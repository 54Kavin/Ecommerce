import PRODUCTS_DB from "../data/products";

const ITEMS_PER_PAGE = 8;

const fakeAPI = {
  getProducts: ({ category, priceRange, page, search }) =>
    new Promise((resolve) => {
      setTimeout(() => {
        let filtered = [...PRODUCTS_DB];

        if (search)
          filtered = filtered.filter(
            (p) =>
              p.name.toLowerCase().includes(search.toLowerCase()) ||
              p.category.toLowerCase().includes(search.toLowerCase())
          );

        if (category && category !== "All")
          filtered = filtered.filter((p) => p.category === category);

        filtered = filtered.filter(
          (p) => p.price >= priceRange.min && p.price < priceRange.max
        );

        const total      = filtered.length;
        const totalPages = Math.ceil(total / ITEMS_PER_PAGE);
        const items      = filtered.slice(
          (page - 1) * ITEMS_PER_PAGE,
          page * ITEMS_PER_PAGE
        );

        resolve({ items, total, totalPages, page });
      }, 600);
    }),
};

export default fakeAPI;