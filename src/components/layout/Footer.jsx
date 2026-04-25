export default function Footer() {
  return (
    <footer style={footer}>
      <div style={inner}>
        <p style={text}>
          ◆ NOIRSHOP © 2025 · Premium E-Commerce · All rights reserved
        </p>
      </div>
    </footer>
  );
}

const footer = {
  borderTop: "1px solid #1e293b",
  marginTop: 40,
  padding: "20px 16px"
};

const inner = {
  maxWidth: 1200,
  margin: "0 auto",
  textAlign: "center"
};

const text = {
  color: "#64748b",
  fontSize: "clamp(10px, 2.5vw, 13px)", // ✅ responsive text
  letterSpacing: "clamp(1px, 0.5vw, 2px)",
  fontFamily: "sans-serif",
  lineHeight: 1.6
};