import { useState } from "react";
import Filters from "../components/Filters";
import ProductsList from "../components/ProductsList";
import useProducts from "../hooks/useProducts";
import { FilterType } from "../types/DummyJsonServiceTypes";

const HomePage = () => {
  const [filters, setFilters] = useState<FilterType>({ searchTerm: "" });
  const products = useProducts(filters);

  return (
    <div className="text-center pt-32 md:pt-28 lg:pt-24">
      <Filters setFilters={setFilters} />
      <ProductsList products={products.products} />
    </div>
  );
};

export default HomePage;
