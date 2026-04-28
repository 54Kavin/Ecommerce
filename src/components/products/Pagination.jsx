export default function Pagination({ page, totalPages, onChange }) {
  if (totalPages <= 1) return null;
  const getPages = () => {
  const range = [];

  let start = Math.max(1, page - 2);
  let end = Math.min(totalPages, page + 2);

  for (let i = start; i <= end; i++) {
    range.push(i);
  }

  return range;
};

const pages = getPages();

  return (
    <div style={wrap}>
      <button style={{ ...btn, ...(page===1 ? dis:{}) }} disabled={page===1} onClick={() => onChange(page-1)}>← Prev</button>
      {pages.map((p) => (
        <button key={p} style={{ ...btn, ...(p===page ? active:{}) }} onClick={() => onChange(p)}>{p}</button>
      ))}
      <button style={{ ...btn, ...(page===totalPages ? dis:{}) }} disabled={page===totalPages} onClick={() => onChange(page+1)}>Next →</button>
    </div>
  );
}

const wrap = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  gap: "6px",
  marginTop: 40,
  flexWrap: "wrap",           // ✅ wrap on small screens
  padding: "0 10px"
};

const btn = {
  background: "#0f172a",
  border: "1px solid #1e293b",
  color: "#94a3b8",
  padding: "6px 10px",        // ✅ smaller for mobile
  borderRadius: 6,
  cursor: "pointer",
  fontSize: "clamp(11px, 2vw, 13px)", // ✅ responsive text
  fontFamily: "sans-serif",
  minWidth: "36px"            // ✅ consistent size
};

const active = {
  background: "#f59e0b",
  border: "1px solid #f59e0b",
  color: "#0a0a0f",
  fontWeight: 700
};

const dis = {
  opacity: 0.4,
  cursor: "not-allowed"
};