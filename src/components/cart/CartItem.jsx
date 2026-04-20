export default function CartItem({ item, onRemove, onUpdateQty }) {
  return (
    <div style={row}>
      <div style={{ fontSize:36, flexShrink:0 }}>{item.image}</div>
      <div style={{ flex:1 }}>
        <p style={name}>{item.name}</p>
        <p style={priceText}>
          ${item.price} × {item.qty} = <strong>${(item.price * item.qty).toFixed(2)}</strong>
        </p>
        <div style={qtyRow}>
          <button style={qtyBtn} onClick={() => onUpdateQty(item.id, item.qty - 1)}>−</button>
          <span style={qtyNum}>{item.qty}</span>
          <button style={qtyBtn} onClick={() => onUpdateQty(item.id, item.qty + 1)}>+</button>
        </div>
      </div>
      <button style={rmBtn} onClick={() => onRemove(item.id)}>🗑️</button>
    </div>
  );
}

const row      = { display:"flex", alignItems:"center", gap:16, padding:16, background:"#1e293b", borderRadius:12 };
const name     = { color:"#f1f5f9", fontSize:14, fontWeight:600, margin:"0 0 4px" };
const priceText= { color:"#64748b", fontSize:13, margin:"0 0 8px", fontFamily:"sans-serif" };
const qtyRow   = { display:"flex", alignItems:"center", gap:10 };
const qtyBtn   = { background:"#334155", border:"none", color:"#f1f5f9", width:28, height:28, borderRadius:6, cursor:"pointer", fontSize:16 };
const qtyNum   = { color:"#f8fafc", fontWeight:700, fontSize:15, fontFamily:"sans-serif", minWidth:20, textAlign:"center" };
const rmBtn    = { background:"transparent", border:"none", cursor:"pointer", fontSize:18, opacity:0.7 };