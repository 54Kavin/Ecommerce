import { useCart }  from "../../context/CartContext";
import { useToast } from "../../context/ToastContext";
import CartItem     from "./CartItem";
import CartFooter   from "./CartFooter";

export default function CartDrawer({ onClose }) {
  const { cart, removeFromCart, updateQty, clearCart, total } = useCart();
  const { add: toast } = useToast();

  const handleCheckout = () => {
    clearCart();
    toast("Order placed successfully! 🎉", "success");
    onClose();
  };

  return (
    <div style={overlay} onClick={onClose}>
      <div style={drawer} onClick={(e) => e.stopPropagation()}>
        {/* Header */}
        <div style={header}>
          <h2 style={title}>Your Cart</h2>
          <button style={closeBtn} onClick={onClose}>✕</button>
        </div>

        {/* Empty */}
        {cart.length === 0 ? (
          <div style={empty}>
            <div style={{ fontSize:64 }}>🛒</div>
            <p style={{ color:"#94a3b8", marginTop:16 }}>Your cart is empty</p>
          </div>
        ) : (
          <>
            <div style={items}>
              {cart.map((item) => (
                <CartItem
                  key={item.id}
                  item={item}
                  onRemove={removeFromCart}
                  onUpdateQty={updateQty}
                />
              ))}
            </div>
            <CartFooter total={total} onCheckout={handleCheckout} onClear={clearCart} />
          </>
        )}
      </div>
    </div>
  );
}

const overlay  = { position:"fixed", inset:0, background:"rgba(0,0,0,0.7)", zIndex:200, display:"flex", justifyContent:"flex-end", backdropFilter:"blur(4px)" };
const drawer   = { background:"#0f172a", borderLeft:"1px solid #1e293b", width:"100%", maxWidth:440, height:"100vh", overflowY:"auto", display:"flex", flexDirection:"column" };
const header   = { display:"flex", justifyContent:"space-between", alignItems:"center", padding:24, borderBottom:"1px solid #1e293b", position:"sticky", top:0, background:"#0f172a" };
const title    = { color:"#f8fafc", fontSize:20, fontWeight:700, margin:0 };
const closeBtn = { background:"transparent", border:"none", color:"#64748b", fontSize:20, cursor:"pointer" };
const empty    = { display:"flex", flexDirection:"column", alignItems:"center", justifyContent:"center", flex:1, padding:40, fontFamily:"sans-serif" };
const items    = { flex:1, padding:24, display:"flex", flexDirection:"column", gap:16 };