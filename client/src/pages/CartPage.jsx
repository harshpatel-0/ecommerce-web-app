import { Link } from 'react-router-dom';
import ProductListCard from '../components/CartProductCard';
import Header from '../components/Header';
import { useCart } from '../context/CartContext';

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function CartPage() {
  const { cart, removeFromCart, clearCart } = useCart();
  const totalPrice = cart.reduce((sum, item) => sum + item.price, 0);
  const subtotal = totalPrice;
  const taxRate = 0.07; // example 7% tax
  const tax = subtotal * taxRate;
  const total = subtotal + tax;

  const handleSubmitOrder = () => {
    toast.success(`Order Placed!`, {
      style: { fontFamily: "var(--font-display-text)" },
    });
  };

  return (
    <div className="bg-black text-gray-200">
      <Header/>
      <div className="min-h-screen max-w-6xl mx-auto p-6 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Cart Items */}
        <div className="md:col-span-2 md:pr-8 md:border-r md:border-gray-700">
          <h2 className="font-display-semi text-2xl font-bold mb-4 text-white">Shopping Cart</h2>

          {cart.length === 0 ? (
            <p className="font-display-text text-gray-400">Your cart is empty.</p>
          ) : (
            <>
              {cart.map((item) => (
                <div
                  key={item._id}
                  className="flex justify-between items-center border-b border-gray-700 py-4"
                >
                  <div>
                    <Link to={`/product/${item._id}`}>
                      <p className="font-display-semi text-white hover:text-red-400 hover:underline">{item.title}</p>
                    </Link>
                    <p className="font-display-semi text-white">{item.category}</p>
                    <p className="text-gray-400 font-display-text">${item.price.toFixed(2)}</p>
                  </div>
                  <button
                    className="font-display-text text-red-500 hover:text-red-400"
                    onClick={() => removeFromCart(item._id)}
                  >
                    Remove
                  </button>
                </div>
              ))}

              <button
                className="font-display-semi bg-gray-800 text-white px-4 py-2 mt-4 rounded hover:bg-gray-700"
                onClick={clearCart}
              >
                Clear Cart
              </button>
            </>
          )}
        </div>

        {/* Summary */}
        <div className="bg-gray-900 p-6 rounded-lg h-fit">
          <h3 className="font-display-semi text-xl font-bold mb-4 text-white">Order Summary</h3>

          <div className="font-display-text flex justify-between mb-2 text-gray-300">
            <span>Subtotal</span>
            <span>${subtotal.toFixed(2)}</span>
          </div>

          <div className="font-display-text flex justify-between mb-2 text-gray-300">
            <span>Tax (7%)</span>
            <span>${tax.toFixed(2)}</span>
          </div>

          <div className="font-display-semi flex justify-between font-semibold text-lg border-t border-gray-700 pt-2 text-white">
            <span>Total</span>
            <span>${total.toFixed(2)}</span>
          </div>

          <button
            className="font-display-semi bg-blue-700 text-white w-full py-2 mt-6 rounded hover:bg-blue-600"
            onClick={() => {handleSubmitOrder(); clearCart();}}
          >
            Checkout
          </button>
        </div>
      </div>
    </div>
  );
}


export default CartPage
