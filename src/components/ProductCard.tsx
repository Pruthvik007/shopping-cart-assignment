import { useCart } from "../hooks/useCart";
import { Product } from "../types/DummyJsonServiceTypes";

const ProductCard = ({ product }: { product: Product }) => {
  const { addToCart, removeFromCart, isProductInCart, getCartItem } = useCart();
  const cartItem = getCartItem(product.id);
  return (
    <div
      id="product-card"
      className="p-6 bg-white border border-gray-200 rounded-xl shadow dark:bg-gray-800 hover:bg-gray-700 dark:hover:bg-gray-700 dark:border-gray-700 flex flex-col gap-3"
    >
      <img
        className="w-full h-full max-h-36 min-h-36 max-w-full object-contain"
        src={product.thumbnail}
        alt={product.title}
      />
      <p className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        {product.title}
      </p>
      <div className=" overflow-y-auto max-h-20">
        <p className="font-normal text min-h-20">{product.description}</p>
      </div>
      <span className="inline-block rounded-full py-1 text-sm font-semibold text-gray-700 bg-gray-400 dark:text-gray-400 dark:bg-gray-700 mb-2 mx-auto p-3">
        #{product.category}
      </span>
      <p className="text-sm text">{product.rating}</p>
      <p className="text-lg font-bold text">Price: {product.price}$</p>
      <div className="flex flex-row justify-between gap-5 items-center">
        <button
          disabled={!isProductInCart(product.id)}
          onClick={() => removeFromCart(product)}
          className="bg-blue-600 hover:bg-blue-800 text-white font-bold py-2 px-4 rounded-full"
        >
          <p className="font-bold">-</p>
        </button>
        {cartItem && (
          <p className="text-lg font-bold text">
            Quantity In Cart: x{cartItem.quantity}
          </p>
        )}
        <button
          onClick={() => addToCart(product)}
          className="bg-blue-600 hover:bg-blue-800 text-white font-bold py-2 px-4 rounded-full"
        >
          <p className="font-bold">+</p>
        </button>
      </div>
    </div>
  );
};
export default ProductCard;
