//Componente
import { Link } from 'react-router-dom'
//Imagini
import caine from '../img/caine.jpg'

const Hero = () => {
  return (
    <div className="mt-24 px-20">
      <section className="container mx-auto">
        <div className="grid grid-cols-1 items-center gap-8 xl:grid-cols-2">
          <div className='flex flex-col items-center text-center gap-4 sm:items-start sm:text-left'>
            <h1 className='text-4xl dark:text-white'>Feed your friend like a king</h1>
            <p className='text-lg dark:text-white'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat vitae corporis expedita dolorum doloribus maxime deleniti nisi nobis nostrum soluta voluptatum natus odit possimus recusandae, neque praesentium debitis. Dolor, ex!</p>
            <div className='flex items-center gap-6'>
              <button className='px-4 py-2 transition-all duration-100 ease-in rounded-md bg-white text-brown font-bold sm:hover:bg-black
              sm:hover:text-white dark:bg-white dark:text-black dark:sm:hover:bg-brown dark:sm:hover:text-white'>Order now</button>
              <Link to={'/shop'}>
              <button className='px-4 py-2 transition-all duration-100 ease-in rounded-md bg-white text-brown font-bold sm:hover:bg-black
              sm:hover:text-white dark:bg-white dark:text-black dark:sm:hover:bg-brown dark:sm:hover:text-white'>View products</button>
              </Link>
            </div>
          </div>
        <div>
          <img src={caine} alt="sabacika image" />
        </div>
        </div>
      </section>
    </div>
  )
}

export default Hero
