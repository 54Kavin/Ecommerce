const COLORS = {
  Bestseller: "#f59e0b",
  New:        "#6366f1",
  "Top Rated":"#10b981",
  Sale:       "#ef4444",
};

export default function Badge({ text }) {
  if (!text) return null;
  return (
    <span style={{ ...base, background: COLORS[text] || "#6b7280" }}>
      {text}
    </span>
  );
}

const base = {
  position:"absolute", top:12, left:12,
  color:"#fff", fontSize:10, fontWeight:700,
  letterSpacing:1.5, textTransform:"uppercase",
  padding:"4px 8px", borderRadius:4, fontFamily:"sans-serif",
};