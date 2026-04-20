import PriceRanges from "../../data/PriceRanges.js";

export default function PriceFilter({ selected, onChange }) {
  return (
    <>
      <h4 style={title}>💰 Price Range</h4>
      {PriceRanges.map((r, i) => (
        <button
          key={i}
          style={{ ...btn, ...(selected === r ? active : {}) }}
          onClick={() => onChange(r)}
        >
          {r.label}
        </button>
      ))}
    </>
  );
}

const title  = { color:"#94a3b8", fontSize:11, letterSpacing:3, textTransform:"uppercase", marginBottom:12, fontFamily:"sans-serif" };
const btn    = { display:"block", width:"100%", textAlign:"left", background:"transparent", border:"1px solid transparent", color:"#64748b", padding:"8px 12px", borderRadius:6, cursor:"pointer", fontSize:13, marginBottom:4, fontFamily:"sans-serif" };
const active = { background:"#1e293b", border:"1px solid #334155", color:"#f59e0b" };