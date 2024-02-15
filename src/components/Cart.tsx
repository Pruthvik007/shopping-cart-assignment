import { useCart } from "../hooks/useCart";

const Cart = () => {
  const { cart } = useCart();
  return (
    <div className="w-16 h-16 flex flex-col items-center justify-center">
      <span className="bg-red-100 text-red-800 font-bold text-xs me-2 px-2.5 py-0.5 rounded dark:bg-red-900 dark:text-red-300">
        {cart.totalItems}
      </span>
      <div className="text-2xl md:text-5xl pb-1 mt-[-10px]">&#128722;</div>
      <span className="bg-green-100 text-green-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-green-900 dark:text-green-300">
        {cart.totalAmount}$
      </span>
    </div>
  );
};

export default Cart;
