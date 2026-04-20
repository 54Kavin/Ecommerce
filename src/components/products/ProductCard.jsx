import { useState } from "react";
import Badge from "../ui/Badge";
import StarRating from "../ui/StarRating";

export default function ProductCard({ product, onAddToCart }) {
  const [hover, setHover] = useState(false);
  const discount = Math.round((1 - product.price / product.originalPrice) * 100);

  return (
    <div
      style={{ ...card, ...(hover ? cardHover : {}) }}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      {/* Image */}
      <div style={imgWrap}>
        <img
          src={product.images}
          alt="image"
          style={{ height: "100px", width: "150px", objectFit: "cover",marginTop:"8px",border: "1px solid #ddd",borderRadius: "10px", }}
        />        
        
        <Badge text={product.badge} />
        {discount > 0 && <span style={discTag}>-{discount}%</span>}
      </div>

      {/* Body */}
      <div style={body}>
        <p style={cat}>{product.category}</p>
        <h3 style={name}>{product.name}</h3>
        <p style={desc}>{product.description}</p>
        <div style={{ display: "flex", alignItems: "center", gap: 6, marginBottom: 12 }}>
          <StarRating rating={product.rating} />
          <span style={{ color: "#475569", fontSize: 11, fontFamily: "sans-serif" }}>
            ({product.reviews.toLocaleString()})
          </span>
        </div>
        <div style={footer}>
          <div>
            <span style={price}>₹{product.price}</span>
            <span style={orig}>₹{product.originalPrice}</span>
          </div>
          <button style={addBtn} onClick={() => onAddToCart(product)}>
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}

const card = { background: "#0f172a", border: "1px solid #1e293b", borderRadius: 12, overflow: "hidden", transition: "all 0.3s", cursor: "pointer" };
const cardHover = { transform: "translateY(-4px)", border: "1px solid #334155", boxShadow: "0 20px 40px rgba(0,0,0,0.5)" };
const imgWrap = { background: "linear-gradient(135deg,#1e293b,#0f172a)", height: 160, display: "flex", alignItems: "center", justifyContent: "center", position: "relative" };
const discTag = { position: "absolute", top: 12, right: 12, background: "#ef4444", color: "#fff", fontSize: 11, fontWeight: 700, padding: "4px 8px", borderRadius: 4, fontFamily: "sans-serif" };
const body = { padding: 16 };
const cat = { color: "#475569", fontSize: 10, letterSpacing: 2, textTransform: "uppercase", marginBottom: 4, fontFamily: "sans-serif" };
const name = { color: "#f1f5f9", fontSize: 15, fontWeight: 600, margin: "0 0 6px", lineHeight: 1.3 };
const desc = { color: "#64748b", fontSize: 12, margin: "0 0 10px", lineHeight: 1.5, fontFamily: "sans-serif" };
const footer = { display: "flex", alignItems: "center", justifyContent: "space-between" };
const price = { color: "#f8fafc", fontSize: 20, fontWeight: 700 };
const orig = { color: "#475569", fontSize: 13, textDecoration: "line-through", marginLeft: 6, fontFamily: "sans-serif" };
const addBtn = { background: "#f59e0b", border: "none", color: "#0a0a0f", padding: "8px 14px", borderRadius: 6, cursor: "pointer", fontWeight: 700, fontSize: 12, fontFamily: "sans-serif" };