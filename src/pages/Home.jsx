//Components
import Hero from '../components/Hero'
import Services from '../components/Services'


const Home = () => {
  return (
    <div className='text-black'>
      <div className='absolute w-full h-full top-36 bg-brown -z-50 dark:bg-black'></div>
      <Hero />
      <Services />
    </div>
  )
}

export default Home

