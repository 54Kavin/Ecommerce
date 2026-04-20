export default function CartFooter({ total, onCheckout, onClear }) {
  return (
    <div style={wrap}>
      <div style={row}>
        <span style={{ color:"#94a3b8", fontFamily:"sans-serif" }}>Total</span>
        <span style={amt}>${total.toFixed(2)}</span>
      </div>
      <button style={checkBtn} onClick={onCheckout}>Checkout →</button>
      <button style={clearBtn} onClick={onClear}>Clear Cart</button>
    </div>
  );
}

const wrap     = { padding:24, borderTop:"1px solid #1e293b", display:"flex", flexDirection:"column", gap:12 };
const row      = { display:"flex", justifyContent:"space-between", alignItems:"center" };
const amt      = { fontSize:24, fontWeight:700, color:"#f59e0b" };
const checkBtn = { background:"#f59e0b", border:"none", color:"#0a0a0f", padding:14, borderRadius:10, cursor:"pointer", fontWeight:700, fontSize:15, letterSpacing:1, fontFamily:"sans-serif", width:"100%" };
const clearBtn = { background:"transparent", border:"1px solid #334155", color:"#64748b", padding:10, borderRadius:10, cursor:"pointer", fontSize:13, fontFamily:"sans-serif", width:"100%" };