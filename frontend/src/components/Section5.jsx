// Redis Stack section
import { Link } from "react-router-dom"


const Section5 = () => {
  return (
    <section className="py-28 bg-gradient-to-b from-indigo-50/30 via-indigo-50/30 to-white">
        <div className="container max-w-[85rem] mx-auto px-4 sm:px-8">
            <h2 className="flex items-center justify-center text-center font-display text-4xl leading-tight text-slate-900 font-semibold mb-10">
                <div className="mr-4 -ml-9">
                    <img src="/redis-stack-logo.png" alt="" className="w-9 object-cover"/>
                </div>
                Redis Stack
            </h2>
            <p className="text-redis-neutral-800 text-lg max-w-2xl mx-auto mb-12 text-center">
            Redis Stack extends Redis with modern data models and processing engines to provide a complete developer experience. Download the source, install using your favorite package manager, or spin it up for free in the cloud.
            </p>
            <div className="flex flex-col md:grid grid-cols-2 gap-5 text-redis-neutral-800 max-w-3xl mx-auto mb-12">
            {/*  Each redis stack */}
                <div className="w-full text-sm font-medium text-slate-900 p-6 bg-white border border-slate-900/10 bg-clip-padding shadow-md shadow-slate-900/5 rounded-lg flex flex-col justify-center">
                    <span className="mx-auto h-36 mb-6">
                        <img src="/redis-stack-1.png" alt="" />
                    </span>
                    <p>
                    Redis Stack Server lets you build applications with searchable JSON and time series data models, and extended probabilistic data structures.
                    </p>
                </div>
                <div className="w-full text-sm font-medium text-slate-900 p-6 bg-white border border-slate-900/10 bg-clip-padding shadow-md shadow-slate-900/5 rounded-lg flex flex-col justify-center">
                    <span className="mx-auto h-36 mb-6">
                        <img src="/redis-stack-2.png" alt="" />
                    </span>
                    <p>
                    Get productive quickly with the Redis Stack object mapping and client libraries.
                    </p>
                </div>
                <div className="col-span-full w-full text-sm font-medium text-slate-900 p-6 bg-white border border-slate-900/10 bg-clip-padding shadow-md shadow-slate-900/5 rounded-lg flex items-center justify-center">
                    <span className="mr-5">
                        <img src="/redis-stack-3.png" alt="" />
                    </span>
                    <p className="pr-5">
                    Visualize and optimize your Redis data with RedisInsight.
                    </p>
                </div>
            </div>
            {/* buttons */}
            <div className="flex justify-center mx-auto">
                <Link to={'/'}>
                    <button className='text-white rounded-sm transition-colors shrink-0 inline-flex items-center justify-center mt-2 lg:mt-0 px-4 py-2 text-base font-bold  border focus:outline-none focus:ring-2 focus:ring-offset-2 
                    border-transparent bg-indigo-500 hover:bg-indigo-600 focus:bg-indigo-600 focus:ring-indigo-600'>
                        Download Stack
                    </button>
                </Link>
                <Link to={'/'}>
                    <button className=' rounded-sm transition-colors shrink-0 inline-flex items-center justify-center mt-2 lg:mt-0 px-4 py-2 text-base font-bold  focus:outline-none focus:ring-2 focus:ring-offset-2 text-slate-900 hover:text-indigo-600 ml-2
                    border border-gray-600 hover:border-indigo-600 focus:ring-indigo-600'>
                        Learn more
                    </button>
                </Link>
            </div>
        </div>
    </section>
  )
}

export default Section5