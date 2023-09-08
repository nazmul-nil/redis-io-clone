// import react icons
import {BsTriangleFill, BsCircleFill, BsStarFill } from 'react-icons/bs'


const Hero = () => {
  return (
    <section className=" w-full bg-gradient-to-b from-indigo-50/30 via-indigo-50/30 to-white">
        <div className="max-w-[85rem] mx-auto px-4 sm:px-8 flex items-center justify-center pt-16 lg:pt-0 h-[100vh]">
            <div className="lg:grid grid-cols-2 gap-x-10 items-center  ">
                {/* left section */}
                <div className="text-center lg:text-left"> 
                    <h1 className="font-display lg:text-6xl text-5xl leading-none font-medium mb-4 text-slate-900">
                        Redis
                    </h1>
                    <p className="text-gray-600 text-lg lg:text-xl mb-7 max-w-xl mx-auto lg:mx-0">                      
                         The open source, in-memory data store used by millions of developers as a database, cache, streaming engine, and message broker.
                    </p>
                    {/* button div */}
                    <div className="flex items-center justify-center lg:justify-start">
                        <button className='text-white rounded-sm transition-colors shrink-0 inline-flex items-center justify-center mt-2 lg:mt-0 px-4 py-2 text-sm font-bold  border focus:outline-none focus:ring-2 focus:ring-offset-2
                        border-transparent bg-indigo-500 hover:bg-indigo-600 focus:bg-indigo-600 focus:ring-indigo-600'>
                            Get Started
                        </button>
                        <button className=' rounded-sm transition-colors shrink-0 inline-flex items-center justify-center mt-2 lg:mt-0 px-4 py-2 text-sm font-bold  focus:outline-none focus:ring-2 focus:ring-offset-2 text-slate-900 hover:text-indigo-600 ml-2
                            border border-gray-600 hover:border-indigo-600 focus:ring-indigo-600'>
                            Read the docs
                        </button>
                    </div>
                </div>
                {/* right section */}
                <div className="mt-8 lg:mt-0 mx-auto lg:ml-0  lg:-mr-7 pt-7 pr-7 bg-no-repeat bg-right-top max-w-[768px] lg:max-w-none">
                    <div className="bg-slate-900 rounded-xl shadow-lg shadow-slate-900/10 h-[22.8125rem] ">
                        <div className="border-b border-slate-700 rounded-t-xl px-4 py-3 w-full flex">
                            <BsCircleFill className='text-white text-sm mr-1'/>
                            <BsTriangleFill className='text-white text-sm mr-1'/>
                            <BsStarFill className='text-white text-sm mr-1'/>
                        </div>
                        {/* appearing text */}
                        <form className='redis-cli'>
                            <pre tabIndex={0}>
                                
                            </pre>
                            <div className='prompt'>
                                <span>redis{'>'}</span>
                                <input type="text" name='prompt' autoComplete='off' spellCheck="false" className='bg-transparent border-none focus:border-none focus:outline-none ml-2'/>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Hero