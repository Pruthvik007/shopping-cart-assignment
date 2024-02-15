import Filters from "../components/Filters";
import ProductsList from "../components/ProductsList";
import Pagination from "../components/common/Pagination";
import useProducts from "../hooks/useProducts";

const HomePage = () => {
  const { products, setFilters, getNextPage, getPreviousPage } = useProducts();

  return (
    <div className="text-center pt-32 md:pt-28 lg:pt-24">
      <Filters setFilters={setFilters} />
      {products && (
        <>
          <ProductsList products={products.products} />
          <Pagination
            startIndex={products.skip + 1}
            endIndex={products.skip + products.limit}
            total={products.total}
            getPreviousPage={getPreviousPage}
            getNextPage={getNextPage}
          />
        </>
      )}
    </div>
  );
};

export default HomePage;
