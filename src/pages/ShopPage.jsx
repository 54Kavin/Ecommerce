import Sidebar     from "../components/filters/Sidebar";
import ProductGrid from "../components/products/ProductGrid";
import Pagination  from "../components/products/Pagination";
import Spinner     from "../components/ui/Spinner";

export default function ShopPage({
  products, loading, total, totalPages,
  category, setCategory, priceRange, setPriceRange,
  page, setPage, search, setSearch, onAddToCart,
}) {
  return (
    <main style={main}>
      <Sidebar
        search={search}       setSearch={setSearch}
        category={category}   setCategory={setCategory}
        priceRange={priceRange} setPriceRange={setPriceRange}
      />
      <section style={content}>
        <div style={bar}>
          <p style={count}>
            {total} product{total !== 1 ? "s" : ""} found
            {category !== "All" && <span style={{ color:"#f59e0b" }}> in {category}</span>}
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

const main    = { maxWidth:1400, margin:"0 auto", padding:"40px 24px", display:"flex", gap:32, alignItems:"flex-start" };
const content = { flex:1, minWidth:0 };
const bar     = { display:"flex", justifyContent:"space-between", alignItems:"center", marginBottom:24 };
const count   = { color:"#64748b", fontSize:14, fontFamily:"sans-serif" };
const pInfo   = { color:"#475569", fontSize:13, fontFamily:"sans-serif" };