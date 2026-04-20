import { useState }  from "react";
import { useAuth }   from "../../context/AuthContext";
import { useToast }  from "../../context/ToastContext";

export default function LoginModal({ onClose }) {
  const { login }       = useAuth();
  const { add: toast }  = useToast();
  const [email, setEmail] = useState("demo@shop.com");
  const [pass,  setPass ] = useState("password");

  const handleLogin = () => {
    login();
    toast("Welcome back! 👋", "success");
    onClose();
  };

  return (
    <div style={overlay} onClick={onClose}>
      <div style={modal} onClick={(e) => e.stopPropagation()}>
        <div style={header}>
          <h2 style={title}>Sign In</h2>
          <button style={closeBtn} onClick={onClose}>✕</button>
        </div>
        <div style={{ padding:24 }}>
          <p style={sub}>Sign in to access your cart and orders</p>
          <label style={label}>Email</label>
          <input style={input} value={email} onChange={(e) => setEmail(e.target.value)} />
          <label style={label}>Password</label>
          <input style={input} type="password" value={pass} onChange={(e) => setPass(e.target.value)} />
          <button style={btn} onClick={handleLogin}>Sign In →</button>
          <p style={{ color:"#64748b", fontSize:12, textAlign:"center", marginTop:12 }}>
            Use any credentials to demo
          </p>
        </div>
      </div>
    </div>
  );
}

const overlay  = { position:"fixed", inset:0, background:"rgba(0,0,0,0.7)", zIndex:200, display:"flex", justifyContent:"center", alignItems:"center", backdropFilter:"blur(4px)" };
const modal    = { background:"#0f172a", borderRadius:16, border:"1px solid #1e293b", width:"100%", maxWidth:380 };
const header   = { display:"flex", justifyContent:"space-between", alignItems:"center", padding:24, borderBottom:"1px solid #1e293b" };
const title    = { color:"#f8fafc", fontSize:20, fontWeight:700, margin:0 };
const closeBtn = { background:"transparent", border:"none", color:"#64748b", fontSize:20, cursor:"pointer" };
const sub      = { color:"#94a3b8", marginBottom:24, fontSize:14, fontFamily:"sans-serif" };
const label    = { display:"block", color:"#94a3b8", fontSize:12, letterSpacing:1, marginBottom:6, fontFamily:"sans-serif" };
const input    = { width:"100%", background:"#1e293b", border:"1px solid #334155", color:"#f1f5f9", padding:"12px 16px", borderRadius:8, fontSize:14, outline:"none", boxSizing:"border-box", marginBottom:16, fontFamily:"sans-serif" };
const btn      = { background:"#f59e0b", border:"none", color:"#0a0a0f", padding:14, borderRadius:10, cursor:"pointer", fontWeight:700, fontSize:15, fontFamily:"sans-serif", width:"100%" };