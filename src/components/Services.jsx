//Libs (react-countup)
import CountUp from 'react-countup'
const Services = () => {
    return (
        <section className='container mx-auto mt-12'>
            <div className='mx-auto mt-4 grid w-full grid-cols-4 gap-4 bg-white p-4 dark:bg-brown dark:text-white'>
                <div className='flex flex-col items-center justify-center bg-slate-200 p-2 text-center'>
                    <p className='text-2xl text-brown font-bold'><CountUp end={167} duration={3} /></p>
                    <p className='text-xl font-bold dark:text-black'>Clients</p>
                </div>
                <div className='flex flex-col items-center justify-center bg-slate-200 p-2 text-center'>
                    <p className='text-2xl text-brown font-bold'><CountUp end={1000} duration={4.5} prefix='+' /></p>
                    <p className='text-xl font-bold dark:text-black'>Happy Dogs</p>
                </div>
                <div className='flex flex-col items-center justify-center bg-slate-200 p-2 text-center'>
                    <p className='text-2xl text-brown font-bold'><CountUp end={1200} duration={3.7} prefix='+' /></p>
                    <p className='text-xl font-bold dark:text-black'>Kind Cats</p>
                </div>
                <div className='flex flex-col items-center justify-center bg-slate-200 p-2 text-center'>
                    <p className='text-2xl text-brown font-bold'><CountUp end={98} duration={6} /></p>
                    <p className='text-xl font-bold dark:text-black'>Reviews</p>
                </div>
            </div>
        </section>
    )
}

export default Services
