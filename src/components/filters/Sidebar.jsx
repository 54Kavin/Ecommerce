import { useState, useEffect } from "react";
import SearchBar from "./SearchBar";
import CategoryFilter from "./CategoryFilter";
import PriceFilter from "./PriceFilter";

export default function Sidebar({
  search, setSearch,
  category, setCategory,
  priceRange, setPriceRange,
  isMobileOpen, onClose
}) {

  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      {/* Overlay */}
      {isMobile && isMobileOpen && (
        <div style={overlay} onClick={onClose}></div>
      )}

      <aside
        style={{
          ...aside,
          ...(isMobile
            ? (isMobileOpen ? mobileAside : { display: "none" })
            : {})
        }}
      >
        {/* Close button (mobile only) */}
        {isMobile && (
          <button style={closeBtn} onClick={onClose}>✕</button>
        )}

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

const aside = {
  width: "100%",
  maxWidth: "260px",
  flex: "1 1 250px",
  position: "sticky",
  top: 80
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

const overlay = {
  position: "fixed",
  inset: 0,
  background: "rgba(0,0,0,0.6)",
  zIndex: 200
};

const closeBtn = {
  background: "transparent",
  border: "none",
  color: "#fff",
  fontSize: 22,
  marginBottom: 20,
  cursor: "pointer"
};

const section = {
  marginBottom: 24
};