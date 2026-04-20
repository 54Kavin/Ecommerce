export default function Spinner() {
  return (
    <div style={wrap}>
      <div style={ring} />
      <p style={text}>Loading products...</p>
    </div>
  );
}

const wrap = { display:"flex", flexDirection:"column", alignItems:"center", justifyContent:"center", padding:"80px 0" };
const ring = { width:48, height:48, border:"3px solid #1e293b", borderTop:"3px solid #f59e0b", borderRadius:"50%", animation:"spin 0.8s linear infinite" };
const text = { color:"#475569", marginTop:16, fontFamily:"sans-serif", fontSize:14 };