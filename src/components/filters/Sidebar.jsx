import SearchBar      from "./SearchBar";
import CategoryFilter from "./CategoryFilter";
import PriceFilter    from "./PriceFilter";

export default function Sidebar({ search, setSearch, category, setCategory, priceRange, setPriceRange }) {
  return (
    <aside style={aside}>
      <div style={section}><SearchBar      value={search}     onChange={setSearch}     /></div>
      <div style={section}><CategoryFilter selected={category} onChange={setCategory}   /></div>
      <div style={section}><PriceFilter    selected={priceRange} onChange={setPriceRange}/></div>
    </aside>
  );
}

const aside   = { width:240, flexShrink:0, position:"sticky", top:80 };
const section = { marginBottom:32 };