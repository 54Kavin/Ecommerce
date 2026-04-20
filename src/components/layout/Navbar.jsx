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
        <div style={{ display:"flex", alignItems:"center", gap:12 }}>
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

const nav    = { background:"rgba(10,10,15,0.95)", borderBottom:"1px solid #1e293b", position:"sticky", top:0, zIndex:100, backdropFilter:"blur(12px)" };
const inner  = { maxWidth:1400, margin:"0 auto", padding:"0 24px", height:64, display:"flex", alignItems:"center", justifyContent:"space-between" };
const logo   = { display:"flex", alignItems:"center", gap:10 };
const navBtn = { background:"transparent", border:"1px solid #334155", color:"#94a3b8", padding:"8px 16px", borderRadius:6, cursor:"pointer", fontSize:13, letterSpacing:1 };
const cartBtn= { display:"flex", alignItems:"center", gap:8, background:"#f59e0b", border:"none", color:"#0a0a0f", padding:"8px 20px", borderRadius:6, cursor:"pointer", fontWeight:700, fontSize:14, letterSpacing:1, position:"relative" };
const badge  = { position:"absolute", top:-8, right:-8, background:"#ef4444", color:"#fff", borderRadius:"50%", width:20, height:20, display:"flex", alignItems:"center", justifyContent:"center", fontSize:11, fontWeight:700, fontFamily:"sans-serif" };