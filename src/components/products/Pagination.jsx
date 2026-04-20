export default function Pagination({ page, totalPages, onChange }) {
  if (totalPages <= 1) return null;
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

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

const wrap   = { display:"flex", justifyContent:"center", gap:8, marginTop:40, flexWrap:"wrap" };
const btn    = { background:"#0f172a", border:"1px solid #1e293b", color:"#94a3b8", padding:"8px 14px", borderRadius:6, cursor:"pointer", fontSize:13, fontFamily:"sans-serif" };
const active = { background:"#f59e0b", border:"1px solid #f59e0b", color:"#0a0a0f", fontWeight:700 };
const dis    = { opacity:0.4, cursor:"not-allowed" };