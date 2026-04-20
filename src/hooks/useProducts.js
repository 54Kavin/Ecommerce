import { useState, useEffect, useCallback } from "react";
import fakeAPI from "../api/fakeAPI";
import PriceRanges from "../data/PriceRanges";

export default function useProducts() {
  const [products,   setProducts]   = useState([]);
  const [loading,    setLoading]    = useState(true);
  const [category,   setCategory]   = useState("All");
  const [priceRange, setPriceRange] = useState(PriceRanges[0]);
  const [page,       setPage]       = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [total,      setTotal]      = useState(0);
  const [search,     setSearch]     = useState("");

  const load = useCallback(async () => {
    setLoading(true);
    const res = await fakeAPI.getProducts({ category, priceRange, page, search });
    setProducts(res.items);
    setTotalPages(res.totalPages);
    setTotal(res.total);
    setLoading(false);
  }, [category, priceRange, page, search]);

  useEffect(() => { load(); }, [load]);

  // Reset to page 1 when filters change
  useEffect(() => { setPage(1); }, [category, priceRange, search]);

  return {
    products, loading, total, totalPages,
    category, setCategory,
    priceRange, setPriceRange,
    page, setPage,
    search, setSearch,
  };
}