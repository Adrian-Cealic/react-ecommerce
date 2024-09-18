import { useContext } from 'react';
import { CiTrash } from 'react-icons/ci';
import { FaMinus, FaPlus } from 'react-icons/fa6';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/ReactToastify.css';
import ShopContext from '../contexts/ShopContext';

const Cart = () => {
  const { cartItems, setCartItems } = useContext(ShopContext);
  const totalPrice = cartItems.reduce((acc, item) => acc + item.product.price * item.product.quantity, 0).toFixed(2);

  const increment = async (id) => {
    try {
      const item = cartItems.find(item => item.product.id === id);
      if (item) {
        const updatedCart = cartItems.map(item =>
          item.product.id === id ? { ...item, product: { ...item.product, quantity: item.product.quantity + 1 } } : item
        );
        setCartItems(updatedCart);
        await axios.put(`https://662be47fde35f91de159d19f.mockapi.io/petshop/cart/${item.id}`, { product: { ...item.product, quantity: item.product.quantity + 1 } });
      }
    } catch (error) {
      console.error(error);
      toast.error("An error occurred while updating the item quantity");
    }
  };

  const decrement = async (id) => {
    try {
      const item = cartItems.find(item => item.product.id === id);
      if (item.product.quantity > 1) {
        const updatedCart = cartItems.map(item =>
          item.product.id === id ? { ...item, product: { ...item.product, quantity: item.product.quantity - 1 } } : item
        )
        setCartItems(updatedCart);
        await axios.put(`https://662be47fde35f91de159d19f.mockapi.io/petshop/cart/${item.id}`, { product: { ...item.product, quantity: item.product.quantity - 1 } });
      }
      else{
        removeItems(item.id);
      }
    } catch (error) {
      console.error(error);
      toast.error("An error occurred while updating the item quantity");
    }
  };

  const removeItems = async (id) => {
    try {
      await axios.delete(`https://662be47fde35f91de159d19f.mockapi.io/petshop/cart/${id}`);
      setCartItems(cartItems.filter(item => item.product.id !== id));
      toast.success("Item removed successfully");
    } catch (error) {
      console.error(error);
      toast.error("An error occurred while removing the item");
    }
  };

  const checkout = async () => {
    try {
      for (let item of cartItems) {
        await axios.delete(`https://662be47fde35f91de159d19f.mockapi.io/petshop/cart/${item.id}`);
      }
      setCartItems([]);
      toast.success("Thank you for your purchase");
    } catch (error) {
      console.error(error);
      toast.error("An error occurred during checkout");
    }
  };

  return (
    <>
      <ToastContainer position="top-right" autoClose={2000} />
      <div className='container mx-auto pt-10 p-2 dark:bg-black dark:text-white'>
        <p className='text-xl font-bold'>Your cart:</p>
        <div className='flex flex-wrap items-center justify-between border mt-5 rounded-md'>
          {cartItems.map((item, idx) => (
            <div className="flex items-center justify-between w-full border-b py-4 px-4 rounded-md" key={idx}>
              <img src={`../../src/img/${item.product.img}`} alt={item.product.name} className='w-[70px]' />
              <div className="flex flex-col">
                <p className='max-w-[110px] text-[12.5px]'>{item.product.name}</p>
                <p>{item.product.price}$</p>
              </div>
              <div className="flex items-center gap-4">
                <button onClick={() => decrement(item.product.id)} className='border rounded-full p-1'>
                  <FaMinus size={28} color='gray' />
                </button>
                <h1>{item.product.quantity}</h1>
                <button onClick={() => increment(item.product.id)} className='border rounded-full p-1'>
                  <FaPlus size={28} color='gray' />
                </button>
                <button className='border rounded-full p-1 hover:text-red-500' onClick={() => removeItems(item.id)}>
                  <CiTrash size={28} color='red' />
                </button>
              </div>
            </div>
          ))}
        </div>
        <div className="flex items-center justify-between">
          {cartItems.length !== 0 ? (
            <button onClick={checkout} className='w-full py-2 bg-slate-400 mt-5 rounded-md text-white'>
              Checkout - {totalPrice}$
            </button>
          ) : (
            <div>Your cart is empty</div>
          )}
        </div>
      </div>
    </>
  );
};

export default Cart;
