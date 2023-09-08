// react icon
import { useState } from 'react'
import {AiOutlineMenu, AiOutlineSearch} from 'react-icons/ai'
// react router dom
import {Link} from 'react-router-dom'
import ResponsiveNav from './ResponsiveNav'
const Nav = () => {
    const [dropdownOpen, setDropdownOpen] = useState(false)
    const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className="w-full  bg-[#161F31] fixed z-10">
        <div className="max-w-[85rem] mx-auto px-4 sm:px-8 py-2 lg:py-0">
            <div className="flex items-center justify-between">
                {/* logo div */}
                <div className="py-3">
                    <img src="/logo.png" alt="" className={`${isOpen ? 'hidden' : 'block'}`}/>
                </div>

                {/* navitem div and buttons */}
                <div className='lg:flex lg:items-center'>

                    {/* nav lists */}
                    <div className='lg:mr-10 hidden lg:block'>
                        <ul className='lg:flex lg:items-center '>
                            <li>
                                <Link to={'/'} className='text-sm font-medium text-white uppercase px-3 py-2 bg-transparent hover:text-white/50 focus:text-white/50 whitespace-nowrap rounded'>GET started</Link>
                            </li>
                            <li className='relative'>
                                <span to={'/'} className={`text-sm cursor-pointer text-white uppercase px-3 py-2 bg-transparent hover:text-white/50 focus:text-white/50 whitespace-nowrap rounded font-medium docs-span `} onClick={() => setDropdownOpen(!dropdownOpen)}>DOCS</span>
                                <div className={`p-2 bg-white lg:flex lg:gap-10 lg:justify-between rounded-lg border border-slate-500/10 shadow-md lg:text-sm ${dropdownOpen ? 'lg:absolute' : 'lg:hidden'}  lg:top-[6vh] lg:w-[450px] docs-dropdown`}>
                                    <div className='lg:flex lg:gap-2 lg:px-4'>
                                        <img src="/redis-logo.png" alt="" className='w-[25px] h-[25px] hidden lg:block'/>
                                        <ul>
                                            <li className='font-semibold'>
                                                <Link to={'/docs/about'} className='text-base hover:text-slate-600 focus:text-slate-600 transition-colors"'>Redis</Link>
                                            </li>
                                            <li className='my-3'>
                                                <Link to={'/docs/getting-started'} className='text-slate-500 hover:text-indigo-600 focus:text-slate-900 transition-colors text-sm'>
                                                    Get started
                                                </Link>
                                            </li>
                                            <li className='my-3'>
                                                <Link to={'/docs/getting-started'} className='text-slate-500 hover:text-indigo-600 focus:text-slate-900 transition-colors text-sm'>
                                                    Data types
                                                </Link>
                                            </li>
                                            <li className='my-3'>
                                                <Link to={'/docs/getting-started'} className='text-slate-500 hover:text-indigo-600 focus:text-slate-900 transition-colors text-sm'>
                                                    Redis CLI
                                                </Link>
                                            </li>
                                            <li className='my-3'>
                                                <Link to={'/docs/getting-started'} className='text-slate-500 hover:text-indigo-600 focus:text-slate-900 transition-colors text-sm'>
                                                    Redis clients
                                                </Link>
                                            </li>
                                            <li className='my-3'>
                                                <Link to={'/docs/getting-started'} className='text-slate-500 hover:text-indigo-600 focus:text-slate-900 transition-colors text-sm'>
                                                    Persistence 
                                                </Link>
                                            </li>
                                            <li className='my-3'>
                                                <Link to={'/docs/getting-started'} className='text-slate-500 hover:text-indigo-600 focus:text-slate-900 transition-colors text-sm'>
                                                    Scaling
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className='w-[1px]  bg-slate-400'></div>
                                    <div className='lg:flex lg:gap-2 lg:pr-2'>
                                        <img src="/redis-stack-logo.png" alt="" className='w-[25px] h-[25px] hidden lg:block'/>
                                        <ul>
                                            <li className='font-semibold'>
                                                <Link to={'/docs/about'} className='text-base hover:text-slate-600 focus:text-slate-600 transition-colors"'>Redis Stack</Link>
                                            </li>
                                            <li className='my-3'>
                                                <Link to={'/docs/getting-started'} className='text-slate-500 hover:text-indigo-600 focus:text-slate-900 transition-colors text-sm'>
                                                    Get started
                                                </Link>
                                            </li>
                                            <li className='my-3'>
                                                <Link to={'/docs/getting-started'} className='text-slate-500 hover:text-indigo-600 focus:text-slate-900 transition-colors text-sm'>
                                                    RedisInsight
                                                </Link>
                                            </li>
                                            <li className='my-3'>
                                                <Link to={'/docs/getting-started'} className='text-slate-500 hover:text-indigo-600 focus:text-slate-900 transition-colors text-sm'>
                                                    JSON
                                                </Link>
                                            </li>
                                            <li className='my-3'>
                                                <Link to={'/docs/getting-started'} className='text-slate-500 hover:text-indigo-600 focus:text-slate-900 transition-colors text-sm'>
                                                    Search
                                                </Link>
                                            </li>
                                            <li className='my-3'>
                                                <Link to={'/docs/getting-started'} className='text-slate-500 hover:text-indigo-600 focus:text-slate-900 transition-colors text-sm'>
                                                    Probabilistic
                                                </Link>
                                            </li>
                                            <li className='my-3'>
                                                <Link to={'/docs/getting-started'} className='text-slate-500 hover:text-indigo-600 focus:text-slate-900 transition-colors text-sm'>
                                                    Triggers and functions
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <Link to={'/'} className='text-sm text-white uppercase px-3 py-2 bg-transparent hover:text-white/50 focus:text-white/50 whitespace-nowrap rounded font-medium'>COmmands</Link>
                            </li>
                            <li>
                                <span to={'/'} className='text-sm cursor-pointer text-white uppercase px-3 py-2 bg-transparent hover:text-white/50 focus:text-white/50 whitespace-nowrap rounded font-medium'>resourches</span>
                            </li>
                            <li>
                                <Link to={'/'} className='text-sm text-white uppercase px-3 py-2 bg-transparent hover:text-white/50 focus:text-white/50 whitespace-nowrap rounded font-medium'>Community</Link>
                            </li>
                            <li>
                                <Link to={'/'} className='text-sm text-white uppercase px-3 py-2 bg-transparent hover:text-white/50 focus:text-white/50 whitespace-nowrap rounded'>support</Link>
                            </li>
                        </ul>
                    </div>

                    {/* buttons */}
                    <div className='lg:flex lg:items-center lg:gap-2 hidden'>
                        <div>
                            <button className=' w-full lg:w-auto transition-colors shrink-0 flex-1 lg:flex-none lg:ml-2 lg:mr-0 mt-4 lg:mt-0 inline-flex items-center px-4 py-2 text-sm font-medium rounded-sm border focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-slate-900 border-white/50 hover:text-indigo-600 focus:text-indigo-600 hover:bg-white focus:bg-white focus:ring-white text-white'>
                                <AiOutlineSearch className='text-lg mr-1'/>
                                Search...
                                <span className='ml-2'>K</span>
                            </button>
                        </div>
                        <div>
                            <button className='text-white rounded-sm transition-colors shrink-0 inline-flex items-center justify-center mt-2 lg:mt-0 px-4 py-2 text-sm font-medium  border focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-slate-900
                             border-transparent bg-indigo-500 hover:bg-indigo-600 focus:bg-indigo-600 focus:ring-indigo-600'>
                                Download
                            </button>
                        </div>
                        <div>
                            <button className=' w-full lg:w-auto transition-colors shrink-0 flex-1 lg:flex-none  lg:mr-0 mt-4 lg:mt-0 inline-flex items-center px-4 py-2 text-sm font-medium rounded-sm border focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-slate-900 border-white/50 hover:text-indigo-600 focus:text-indigo-600 hover:bg-white focus:bg-white focus:ring-white text-white'>
                                    Try Redis Cloud
                            </button>
                        </div>
                    </div>

                    {/* responsive menu button */}
                    <div className=''>
                        <AiOutlineMenu className={`text-white text-2xl lg:hidden ${isOpen ? 'hidden' : 'block'}`} onClick={() => setIsOpen(!isOpen)}/>
                        
                    </div>
                </div>
            </div>
            {isOpen && <ResponsiveNav isOpen={isOpen} setIsOpen={setIsOpen}/>}
        </div>
    </nav>
  )
}

export default Nav