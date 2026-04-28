import { useState } from "react";   // ✅ always at top
import Sidebar     from "../components/filters/Sidebar";
import ProductGrid from "../components/products/ProductGrid";
import Pagination  from "../components/products/Pagination";
import Spinner     from "../components/ui/Spinner";

export default function ShopPage({
  products, loading, total, totalPages,
  category, setCategory, priceRange, setPriceRange,
  page, setPage, search, setSearch, onAddToCart,
}) {

  // ✅ INSIDE function
  const [showFilters, setShowFilters] = useState(false);

  return (
    <main style={main}>

      <Sidebar
        search={search}
        setSearch={setSearch}
        category={category}
        setCategory={setCategory}
        priceRange={priceRange}
        setPriceRange={setPriceRange}
        isMobileOpen={showFilters}                 
        onClose={() => setShowFilters(false)}      
      />

      <section style={content}>

        {/* ✅ FILTER BUTTON */}
        <button
          onClick={() => setShowFilters(true)}
          style={filterBtn}
        >
          ⚙️ Filters
        </button>

        <div style={bar}>
          <p style={count}>
            {total} product{total !== 1 ? "s" : ""} found
            {category !== "All" && (
              <span style={{ color:"#f59e0b" }}> in {category}</span>
            )}
          </p>
          <p style={pInfo}>Page {page} of {totalPages || 1}</p>
        </div>

        {loading
          ? <Spinner />
          : <ProductGrid products={products} onAddToCart={onAddToCart} />
        }

        <Pagination page={page} totalPages={totalPages} onChange={setPage} />
      </section>
    </main>
  );
}


const main = {
  maxWidth: 1400,
  margin: "0 auto",
  padding: "clamp(20px, 5vw, 40px) 16px",
  display: "flex",
  flexWrap: "wrap",           // ✅ important
  gap: "clamp(16px, 3vw, 32px)",
  alignItems: "flex-start"
};

const content = {
  flex: "1 1 600px",          // ✅ responsive width
  minWidth: 0
};

const bar = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  flexWrap: "wrap",           // ✅ mobile wrap
  gap: "10px",
  marginBottom: 24
};

const count = {
  color: "#64748b",
  fontSize: "clamp(12px, 2vw, 14px)", // ✅ responsive text
  fontFamily: "sans-serif"
};

const pInfo = {
  color: "#475569",
  fontSize: "clamp(11px, 2vw, 13px)",
  fontFamily: "sans-serif"
};

const filterBtn = {
  display: "none",
  background: "#f59e0b",
  border: "none",
  padding: "10px 16px",
  borderRadius: 8,
  marginBottom: 16,
  cursor: "pointer",
  fontWeight: 600
};