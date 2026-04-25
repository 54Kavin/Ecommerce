import SearchBar      from "./SearchBar";
import CategoryFilter from "./CategoryFilter";
import PriceFilter    from "./PriceFilter";

export default function Sidebar({
  search, setSearch,
  category, setCategory,
  priceRange, setPriceRange,
  isMobileOpen, onClose   // ✅ new props
}) {
  return (
    <>
      {/* Overlay (mobile only) */}
      {isMobileOpen && <div style={overlay} onClick={onClose}></div>}

      <aside
  className="sidebar"
  style={{
    ...aside,
    display: isMobileOpen ? "block" : "none"   // ✅ control visibility
  }}
>
        {/* Close button (mobile) */}
        <button style={closeBtn} onClick={onClose}>✕</button>

        <div style={section}>
          <SearchBar value={search} onChange={setSearch} />
        </div>

        <div style={section}>
          <CategoryFilter selected={category} onChange={setCategory} />
        </div>

        <div style={section}>
          <PriceFilter selected={priceRange} onChange={setPriceRange} />
        </div>
      </aside>
    </>
  );
}

// const aside   = { width:240, flexShrink:0, position:"sticky", top:80 };
// const section = { marginBottom:32 };
const isMobile = window.innerWidth <= 768;
const aside = {
  width: "100%",
  maxWidth: "260px",        // ✅ flexible instead of fixed
  flex: "1 1 250px",
  position: "sticky",
  top: 80,
};

const section = {
  marginBottom: "clamp(20px, 4vw, 32px)" // ✅ responsive spacing
};

const overlay = {
  position: "fixed",
  inset: 0,
  background: "rgba(0,0,0,0.6)",
  zIndex: 200
};

const mobileAside = {
  position: "fixed",
  top: 0,
  left: 0,
  height: "100vh",
  width: "80%",
  maxWidth: "300px",
  background: "#0f172a",
  padding: 20,
  zIndex: 300,
  overflowY: "auto",
  boxShadow: "20px 0 40px rgba(0,0,0,0.5)"
};

const closeBtn = {
  display: "none",
  background: "transparent",
  border: "none",
  color: "#94a3b8",
  fontSize: 20,
  marginBottom: 16,
  cursor: "pointer"
};