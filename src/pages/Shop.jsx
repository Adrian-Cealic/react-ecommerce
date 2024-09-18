//Hooks
import { useEffect, useState, useContext } from 'react';
//Libs
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
//Components
import { Link } from 'react-router-dom';
//Contexts
import ShopContext from '../contexts/ShopContext';
//Styles
import 'react-toastify/dist/ReactToastify.css';

const Shop = () => {
    let [searchQuery, setSearchQuery] = useState('');
    const { setCartItems, cartItems, items } = useContext(ShopContext);
    const [currentPage, setCurrentPage] = useState(1);


    const itemsPerPage = 4;

    const isMobileUse = () => {
        const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

        useEffect(() => {
            const handelResize = () => {
                setIsMobile(window.innerWidth < 768);
            }
            window.addEventListener('resize', handelResize);
            return () => {
                window.removeEventListener('resize', handelResize);
            }
        }, [])
        return isMobile;
    };

    const isMobile = isMobileUse();



    const addToCart = async (product) => {
        try {
            const isItem = cartItems.find(item => item.product.id === product.id);
            if (isItem) {
                const updatedCart = cartItems.map(item =>
                    item.product.id === product.id ? { ...item, product: { ...item.product, quantity: item.product.quantity + 1 } } : item
                );
                setCartItems(updatedCart);
                await axios.put(`https://662be47fde35f91de159d19f.mockapi.io/petshop/cart/${isItem.id}`, { product: { ...isItem.product, quantity: isItem.product.quantity + 1 } });
                toast.success("Item quantity increased");
            } else {
                const response = await axios.post("https://662be47fde35f91de159d19f.mockapi.io/petshop/cart", { product: { ...product, quantity: 1 } });
                setCartItems([...cartItems, response.data]);
                toast.success("Item added successfully");
            }
        } catch (error) {
            console.error(error);
            toast.error("Something went wrong");
        }
    };


    const filteredProducts = items.filter(item => item.name.toLowerCase().includes(searchQuery.toLocaleLowerCase()));

    const startIndex = (currentPage - 1) * itemsPerPage;
    const paginatedProducts = filteredProducts.slice(startIndex, startIndex + itemsPerPage);

    const handleNextPage = () => {
        setCurrentPage(prevPage => prevPage + 1);
    }
    const handlePrevPage = () => {
        setCurrentPage(prevPage => prevPage - 1 ? prevPage - 1 : prevPage);
    }
    return (
        <><div className="dark:bg-black">
            <ToastContainer position="top-right" autoClose={2000} />
            <div className="container mx-auto pt-10 ml-10">
                <input type='text' value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} placeholder='Search product' className='border-2 pl-5 pr-20 py-2 outline-none rounded-md'></input>
            </div>
            <div className='container mx-auto flex flex-wrap p-6 mt-10 gap-[53px]'>

                {
                    (isMobile ? filteredProducts : paginatedProducts).map((item, index) => (
                        <div className='w-full flex flex-col justify-between gap-5 m-2 border-2 p-5 md:w-[40%] lg:w-[35%] lg:p-0 xl:w-1/5 xl:p-5 rounded-md' key={index}>
                            <Link
                                to={`/view_product/${item.id}`}>
                                <img src={`../../src/img/${item.img}`} alt={item.name} className='mb-2' />
                                <div className='flex justify-between items-center gap-5 lg:px-6 xl:px-0 dark:text-white'>
                                    <p className='text-md max-w-[130px] xl:max-w-[190px]'>{item.name}</p>
                                    <p className='font-bold text-xl xl:text-xl'>{item.price} $</p>
                                </div>
                            </Link>
                            <button
                                className='bg-emerald-500 text-white text-lg px-6 py-2 rounded-md xl:px-2'
                                onClick={() => addToCart(item)}
                            >Add to cart</button>
                        </div>
                    ))
                }
            </div>
            <div className="container mx-auto">
                {
                    !isMobile && (
                        <div className='flex items-center justify-center gap-10'>
                            <button onClick={handlePrevPage} disabled={currentPage === 1} className='bg-emerald-500 text-white text-lg px-6 py-2 rounded-md xl:px-4 md:px-2'>Prev</button>
                            <button onClick={handleNextPage} disabled={startIndex + itemsPerPage >= filteredProducts.length} className='bg-emerald-500 text-white text-lg px-6 py-2 rounded-md xl:px-4 md:px-2'>Next</button>
                        </div>
                    )
                }
            </div>
        </div>
        </>
    )
}


export default Shop;
