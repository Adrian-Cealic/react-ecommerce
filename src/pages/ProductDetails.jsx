//Libs
import axios from 'axios'
//Hooks
import { useState, useEffect } from 'react'

const ProductDetails = () => {

    const [product, setProduct] = useState(null);

    useEffect(() => {
        const productIdFromUrl = window.location.pathname.split('/').pop();
        const fetchProduct = async () => {
            try {
                const responseProduct = await axios.get(`https://662be47fde35f91de159d19f.mockapi.io/petshop/products`);
                const products = responseProduct.data;
                const foundProduct = products.find(product => Number(product.id) === Number(productIdFromUrl));
                setProduct(foundProduct);
            } catch (error) {
                console.log(error);
            }
        }
        fetchProduct();
    }, [])

    if (!product) {
        return <h1>Loading...</h1>
    }

    return (
        <div className='container mx-auto flex items-center justify-around p-6 min-h-[40vh] mt-10'>
            <div className='flex flex-col gap-16'>
                <h2 className='text-center font-bold xl:text-2xl'>{product.name}</h2>
                <img src={`../../src/img/${product.img}`} className='w-full object-cover'/>
            </div>

            <div className='flex flex-col gap-14 justify-center'>
                <h2 className='max-w-[400px] xl:text-2xl'>{product.description}</h2>
                <h2 className='bg-emerald-500 px-8 py-2 text-center text-white text-xl rounded-md '>{product.price}$</h2>
            </div>

        </div>
    )
}

export default ProductDetails
