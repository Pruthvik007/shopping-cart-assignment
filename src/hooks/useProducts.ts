import { useEffect, useState } from "react";
import { FilterType, Page, Products } from "../types/DummyJsonServiceTypes";
import DummyJsonService from "../services/DummyJsonService";
import { PAGE_SIZE } from "../constants/DummyJsonConstants";
import { useBackDrop } from "./useBackDrop";

const useProducts = () => {
  const { setIsVisible } = useBackDrop();
  const [products, setProducts] = useState<Products & Page>();
  const [filters, setFilters] = useState<FilterType>({
    searchTerm: "",
    limit: PAGE_SIZE,
    skip: 0,
  });

  const getNextPage = () => {
    if (!products || products.skip + products.limit >= products.total) {
      return;
    }
    setFilters((prevFilters) => ({
      ...prevFilters,
      skip: prevFilters.skip + prevFilters.limit,
    }));
    scrollToTop();
  };

  const getPreviousPage = () => {
    if (!products || filters.skip === 0) {
      return;
    }
    setFilters((prevFilters) => ({
      ...prevFilters,
      skip: prevFilters.skip - prevFilters.limit,
    }));
    scrollToTop();
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    setIsVisible(true);
    DummyJsonService.getProducts(filters)
      .then((res) => {
        setProducts(res);
      })
      .catch((err) => {
        console.log("error", err);
      })
      .finally(() => {
        setIsVisible(false);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filters]);

  return { products, setFilters, getNextPage, getPreviousPage };
};

export default useProducts;
