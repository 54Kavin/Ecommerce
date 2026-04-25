import ProductCard from "./ProductCard";

export default function ProductGrid({ products, onAddToCart }) {
  if (products.length === 0)
    return (
      <div style={empty}>
        <div style={{ fontSize:64 }}>🔍</div>
        <p style={{ color:"#94a3b8", marginTop:16 }}>No products match your filters</p>
      </div>
    );

  return (
    <div style={grid}>
      {products.map((p) => (
        <ProductCard key={p.id} product={p} onAddToCart={onAddToCart} />
      ))}
    </div>
  );
}

// const grid  = { display:"grid", gridTemplateColumns:"repeat(auto-fill,minmax(240px,1fr))", gap:20 };
// const empty = { textAlign:"center", padding:"80px 0", fontFamily:"sans-serif" };

const grid = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", // ✅ better responsiveness
  gap: "clamp(12px, 2vw, 20px)", // ✅ responsive spacing
  padding: "0 10px" // ✅ avoid edge touching on mobile
};

const empty = {
  textAlign: "center",
  padding: "clamp(40px, 10vw, 80px) 10px", // ✅ responsive padding
  fontFamily: "sans-serif"
};