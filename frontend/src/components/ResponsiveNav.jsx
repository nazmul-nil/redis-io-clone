import {AiOutlineMenu, AiOutlineSearch} from 'react-icons/ai'
import {Link} from 'react-router-dom'


const ResponsiveNav = ({isOpen, setIsOpen}) => {
  return (
    <div className="w-full h-[150vh] bg-[#161F31] relative">
        <div className=" fixed top-5 left-3 ">
            <img src="/logo.png" alt="" className={``}/>
        </div>
        <AiOutlineMenu className={`text-white text-2xl lg:hidden fixed right-5 top-5`} onClick={() => setIsOpen(!isOpen)}/>
        <div className='flex items-center justify-center h-[150vh] z-50'>
            <ul>
                <Link to={'/get-started'}>
                  <li className='text-white text-sm font-semibold my-2'>Get Started</li>
                </Link>
                <Link to={'/'}>

                <li className='text-white text-sm font-semibold my-2'>Redis</li>
                </Link>
                <Link to={'/'}>

                <li className='text-white text-sm font-semibold my-2'>Get Started</li>
                </Link>
                <Link to={'/'}>

                <li className='text-white text-sm font-semibold my-2'>Data Types</li>
                </Link>
                <Link to={'/'}>

                <li className='text-white text-sm font-semibold my-2'>Redis CLI</li>
                </Link>
                <Link to={'/'}>

                <li className='text-white text-sm font-semibold my-2'>Redis Clients</li>
                </Link>
                <Link to={'/'}>

                <li className='text-white text-sm font-semibold my-2'>Persistence</li>
                </Link>
                <Link to={'/'}>

                <li className='text-white text-sm font-semibold my-2'>Scaling</li>
                </Link>

                {/* line gap */}
                <div className='w-[150px] h-[1px] bg-gray-600 my-4'></div>
                
                <Link to={'/'}>

                <li className='text-white text-sm font-semibold my-2'>Redis Stack</li>
                </Link>
                <Link to={'/'}>

                <li className='text-white text-sm font-semibold my-2'>Get Started</li>
                </Link>
                <Link to={'/'}>

                <li className='text-white text-sm font-semibold my-2'>RedisInsight</li>
                </Link>
                <Link to={'/'}>

                <li className='text-white text-sm font-semibold my-2'>JSON</li>
                </Link>
                <Link to={'/'}>

                <li className='text-white text-sm font-semibold my-2'>Search</li>
                </Link>
                <Link to={'/'}>

                <li className='text-white text-sm font-semibold my-2'>Probabilistic</li>
                </Link>
                <Link to={'/'}>

                <li className='text-white text-sm font-semibold my-2'>Triggers and functions</li>
                </Link>

                {/* line gap */}
                <div className='w-[150px] h-[1px] bg-gray-600 my-4'></div>
                
                <Link to={'/'}>

                <li className='text-white text-sm font-semibold my-2'>Commands</li>
                </Link>
                <Link to={'/'}>

                <li className='text-white text-sm font-semibold my-2'>Clients</li>
                </Link>
                <Link to={'/'}>

                <li className='text-white text-sm font-semibold my-2'>Libraries</li>
                </Link>
                <Link to={'/'}>

                <li className='text-white text-sm font-semibold my-2'>Tools</li>
                </Link>
                <Link to={'/'}>

                <li className='text-white text-sm font-semibold my-2'>Modules</li>
                </Link>
                <Link to={'/'}>

                <li className='text-white text-sm font-semibold my-2'>Community</li>
                </Link>
                <Link to={'/'}>

                <li className='text-white text-sm font-semibold my-2'>Support</li>
                </Link>
                <div className=''>
                        <div>
                            <button className=' w-[150px] lg:w-auto transition-colors shrink-0 flex-1 lg:flex-none lg:ml-2 lg:mr-0 mt-4 lg:mt-0 inline-flex items-center px-4 py-2 text-sm font-medium rounded-sm border focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-slate-900 border-white/50 hover:text-indigo-600 focus:text-indigo-600 hover:bg-white focus:bg-white focus:ring-white text-white'>
                                <AiOutlineSearch className='text-lg mr-1'/>
                                Search...
                                <span className='ml-2'>K</span>
                            </button>
                        </div>
                        <div>
                            <button className='w-[150px] text-white rounded-sm transition-colors shrink-0 inline-flex items-center justify-center mt-2 lg:mt-0 px-4 py-2 text-sm font-medium  border focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-slate-900
                             border-transparent bg-indigo-500 hover:bg-indigo-600 focus:bg-indigo-600 focus:ring-indigo-600'>
                                Download
                            </button>
                        </div>
                        <div>
                            <button className=' w-[150px] lg:w-auto transition-colors shrink-0 flex-1 lg:flex-none  lg:mr-0 mt-4 lg:mt-0 inline-flex items-center px-4 py-2 text-sm font-medium rounded-sm border focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-slate-900 border-white/50 hover:text-indigo-600 focus:text-indigo-600 hover:bg-white focus:bg-white focus:ring-white text-white'>
                                    Try Redis Cloud
                            </button>
                        </div>
                    </div>
            </ul>
        </div>
    </div>
  )
}

export default ResponsiveNav