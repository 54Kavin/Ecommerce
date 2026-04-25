import PriceRanges from "../../data/PriceRanges.js";

export default function PriceFilter({ selected, onChange }) {
  return (
    <>
      <h4 style={title}>💰 Price Range</h4>
      {PriceRanges.map((r, i) => (
        <button
  key={i}
  style={{
    ...btn,
    ...(selected === r ? active : {})
  }}
  onClick={() => onChange(r)}
  onMouseEnter={(e) => (e.currentTarget.style.background = "#0f172a")}
  onMouseLeave={(e) =>
    (e.currentTarget.style.background =
      selected === r ? "#1e293b" : "transparent")
  }
>
  {r.label}
</button>
      ))}
    </>
  );
}

// const title  = { color:"#94a3b8", fontSize:11, letterSpacing:3, textTransform:"uppercase", marginBottom:12, fontFamily:"sans-serif" };
// const btn    = { display:"block", width:"100%", textAlign:"left", background:"transparent", border:"1px solid transparent", color:"#64748b", padding:"8px 12px", borderRadius:6, cursor:"pointer", fontSize:13, marginBottom:4, fontFamily:"sans-serif" };
// const active = { background:"#1e293b", border:"1px solid #334155", color:"#f59e0b" };

const title = {
  color: "#94a3b8",
  fontSize: "clamp(10px, 2.5vw, 12px)", // ✅ responsive
  letterSpacing: 2,
  textTransform: "uppercase",
  marginBottom: 10,
  fontFamily: "sans-serif"
};

const btn = {
  display: "block",
  width: "100%",
  textAlign: "left",
  background: "transparent",
  border: "1px solid transparent",
  color: "#64748b",
  padding: "clamp(8px, 2vw, 10px) 12px", // ✅ better tap area
  borderRadius: 6,
  cursor: "pointer",
  fontSize: "clamp(12px, 2.5vw, 14px)", // ✅ responsive text
  marginBottom: 6,
  fontFamily: "sans-serif",
  transition: "all 0.2s ease"
};

const active = {
  background: "#1e293b",
  border: "1px solid #334155",
  color: "#f59e0b"
};