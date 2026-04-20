export default function Hero() {
  return (
    <header style={hero}>
      
      {/* LEFT SIDE */}
      <div>
        <p style={sub}>Premium Collection 2025</p>
        <h1 style={title}>
          Curated for<br />
          <span style={{ color:"#f59e0b" }}>the Bold</span>
        </h1>
        <p style={desc}>
          Discover exceptional products with uncompromising quality
        </p>
      </div>

      {/* RIGHT SIDE - IMAGE SLIDER */}
      <div style={sliderContainer}>
        <div style={sliderTrack}>
          <img src="https://images.unsplash.com/photo-1523275335684-37898b6baf30" alt="product" style={sliderImg} />
          <img src="https://images.unsplash.com/photo-1512436991641-6745cdb1723f" alt="product" style={sliderImg} />
          <img src="https://images.unsplash.com/photo-1491553895911-0055eca6402d" alt="product" style={sliderImg} />
          <img src="https://images.unsplash.com/photo-1512496015851-a90fb38ba796" alt="product" style={sliderImg} />
          <img src="https://images.unsplash.com/photo-1592750475338-74b7b21085ab" alt="product" style={sliderImg} />
          <img src="https://tse2.mm.bing.net/th/id/OIP.wK1XBsiJzj-sSfSPXUIvNQHaE7?w=1600&h=1066&rs=1&pid=ImgDetMain&o=7&rm=3" alt="product" style={sliderImg} />

          <img src="https://images.unsplash.com/photo-1523275335684-37898b6baf30" alt="product" style={sliderImg} />
          <img src="https://images.unsplash.com/photo-1512436991641-6745cdb1723f" alt="product" style={sliderImg} />
          <img src="https://images.unsplash.com/photo-1491553895911-0055eca6402d" alt="product" style={sliderImg} />
          <img src="https://images.unsplash.com/photo-1512496015851-a90fb38ba796" alt="product" style={sliderImg} />
          <img src="https://images.unsplash.com/photo-1592750475338-74b7b21085ab" alt="product" style={sliderImg} />
          <img src="https://tse2.mm.bing.net/th/id/OIP.wK1XBsiJzj-sSfSPXUIvNQHaE7?w=1600&h=1066&rs=1&pid=ImgDetMain&o=7&rm=3" alt="product" style={sliderImg} />
        </div>
      </div>

      {/* 🔥 FREE SHIPPING BANNER */}
      <div style={freeShipping}>
        🚚 FREE SHIPPING on all orders above ₹499 | 10-Day Easy Returns | 💎 Premium collections only..!
      </div>

    </header>
  
  );
}

const sub   = { color:"#f59e0b", fontSize:12, letterSpacing:4, textTransform:"uppercase", marginBottom:16, fontFamily:"sans-serif" };
const title = { fontSize:"clamp(40px,6vw,80px)", fontWeight:700, lineHeight:1.1, margin:"0 0 24px", color:"#f8fafc" };
const desc  = { color:"#64748b", fontSize:18, fontFamily:"sans-serif", fontWeight:300 };

const sliderContainer = {
  width: "40%",
  overflow: "hidden",
  borderRadius:"80px"
};

const sliderTrack = {
  display: "flex",
  gap: "20px",
  width: "max-content", 
  animation: "slideImages 35s linear infinite",
};

const sliderImg = {
  height: "250px",
  width: "200px",
  objectFit: "cover",
  backgroundColor: "#ffffff",
  borderRadius: "12px",
};

const freeShipping = {
  position: "absolute",
  bottom: 0,
  left: 0,
  width: "100%",
  background: "rgba(245,158,11,0.1)",
  color: "#f59e0b",
  textAlign: "center",
  padding: "12px 0",
  fontWeight: "600",
  fontSize: "14px",
  letterSpacing: "1px",
  backdropFilter: "blur(6px)"
};

const hero = {
  background:"linear-gradient(135deg,#0a0a0f 0%,#0f172a 50%,#1e1a0f 100%)",
  padding:"80px 24px",
  maxWidth:1400,
  margin:"0 auto",
  display:"flex",
  alignItems:"center",
  justifyContent:"space-between",
  overflow:"hidden",
  position:"relative"   // ✅ ADD THIS
};







