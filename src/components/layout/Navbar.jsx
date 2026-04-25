import { useCart } from "../../context/CartContext";
import { useAuth } from "../../context/AuthContext";

export default function Navbar({ onCartClick, onLoginClick }) {
  const { count }               = useCart();
  const { isLoggedIn, logout }  = useAuth();

  return (
    <nav style={nav}>
      <div style={inner}>
        {/* Logo */}
        <div style={logo}>
          <span style={{ color:"#f59e0b", fontSize:20 }}>◆</span>
          <span style={{ fontSize:20, fontWeight:700, letterSpacing:4, color:"#f8fafc" }}>
            Flip<span style={{ color:"#f59e0b" }}>Kart</span>
          </span>
        </div>

        {/* Actions */}
        <div style={{ display:"flex", alignItems:"center", gap:10, flexWrap: "wrap" }}>
          {isLoggedIn
            ? <button style={navBtn} onClick={logout}>Sign Out</button>
            : <button style={navBtn} onClick={onLoginClick}>Sign In</button>
          }
          <button style={cartBtn} onClick={onCartClick}>
            <span>🛒</span>
            <span>Cart</span>
            {count > 0 && <span style={badge}>{count}</span>}
          </button>
        </div>
      </div>
    </nav>
  );
}


const nav = {
  background: "rgba(10,10,15,0.95)",
  borderBottom: "1px solid #1e293b",
  position: "sticky",
  top: 0,
  zIndex: 100,
  backdropFilter: "blur(12px)"
};

const inner = {
  maxWidth: 1400,
  margin: "0 auto",
  padding: "12px 20px",        // ✅ flexible height
  display: "flex",
  flexWrap: "wrap",            // ✅ important
  alignItems: "center",
  justifyContent: "space-between",
  gap: "10px"
};

const logo = {
  display: "flex",
  alignItems: "center",
  gap: 10,
  flex: "1 1 auto"             // ✅ flexible
};

const navBtn = {
  background: "transparent",
  border: "1px solid #334155",
  color: "#94a3b8",
  padding: "6px 12px",         // ✅ smaller for mobile
  borderRadius: 6,
  cursor: "pointer",
  fontSize: "clamp(11px,2vw,13px)", // ✅ responsive text
  letterSpacing: 1
};

const cartBtn = {
  display: "flex",
  alignItems: "center",
  gap: 6,
  background: "#f59e0b",
  border: "none",
  color: "#0a0a0f",
  padding: "6px 14px",         // ✅ reduced
  borderRadius: 6,
  cursor: "pointer",
  fontWeight: 700,
  fontSize: "clamp(12px,2vw,14px)",
  letterSpacing: 1,
  position: "relative"
};

const badge = {
  position: "absolute",
  top: -6,
  right: -6,
  background: "#ef4444",
  color: "#fff",
  borderRadius: "50%",
  width: 18,
  height: 18,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  fontSize: 10,
  fontWeight: 700
};
// const nav    = { background:"rgba(10,10,15,0.95)", borderBottom:"1px solid #1e293b", position:"sticky", top:0, zIndex:100, backdropFilter:"blur(12px)" };
// const inner  = { maxWidth:1400, margin:"0 auto", padding:"0 24px", height:64, display:"flex", alignItems:"center", justifyContent:"space-between" };
// const logo   = { display:"flex", alignItems:"center", gap:10 };
// const navBtn = { background:"transparent", border:"1px solid #334155", color:"#94a3b8", padding:"8px 16px", borderRadius:6, cursor:"pointer", fontSize:13, letterSpacing:1 };
// const cartBtn= { display:"flex", alignItems:"center", gap:8, background:"#f59e0b", border:"none", color:"#0a0a0f", padding:"8px 20px", borderRadius:6, cursor:"pointer", fontWeight:700, fontSize:14, letterSpacing:1, position:"relative" };
// const badge  = { position:"absolute", top:-8, right:-8, background:"#ef4444", color:"#fff", borderRadius:"50%", width:20, height:20, display:"flex", alignItems:"center", justifyContent:"center", fontSize:11, fontWeight:700, fontFamily:"sans-serif" };