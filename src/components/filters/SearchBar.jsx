export default function SearchBar({ value, onChange }) {
  return (
    <>
      <h4 style={title}>🔍 Search</h4>
      <input
        style={input}
        placeholder="Search products..."
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </>
  );
}


const title = {
  color: "#94a3b8",
  fontSize: "clamp(10px, 2.5vw, 12px)",
  letterSpacing: 2,
  textTransform: "uppercase",
  marginBottom: 8,
  fontFamily: "sans-serif"
};

const input = {
  width: "100%",
  background: "#0f172a",
  border: "1px solid #1e293b",
  color: "#f1f5f9",
  padding: "clamp(8px, 2vw, 12px) 14px",
  borderRadius: 8,
  fontSize: "clamp(12px, 3vw, 14px)",
  outline: "none",
  boxSizing: "border-box"
};
// const title = { color:"#94a3b8", fontSize:11, letterSpacing:3, textTransform:"uppercase", marginBottom:12, fontFamily:"sans-serif" };
// const input = { width:"100%", background:"#0f172a", border:"1px solid #1e293b", color:"#f1f5f9", padding:"10px 14px", borderRadius:8, fontSize:14, outline:"none", boxSizing:"border-box", fontFamily:"sans-serif" };