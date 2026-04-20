export default function Toast({ msg, type }) {
  const s = type === "success"
    ? { background:"#064e3b", border:"1px solid #10b981", color:"#6ee7b7" }
    : { background:"#450a0a", border:"1px solid #ef4444", color:"#fca5a5" };

  return (
    <div style={{ ...base, ...s }}>
      <span>{type === "success" ? "✓" : "✕"}</span>
      <span>{msg}</span>
    </div>
  );
}

const base = {
  display:"flex", alignItems:"center", gap:10,
  padding:"14px 20px", borderRadius:10,
  fontSize:14, fontWeight:500, fontFamily:"sans-serif",
  boxShadow:"0 8px 24px rgba(0,0,0,0.4)",
  animation:"slideIn 0.3s ease", maxWidth:320,
};