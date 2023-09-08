
import { Link } from "react-router-dom"

const Section7Card = ({heading, link1, link2}) => {
  return (
    <div className="flex flex-col h-full" >
        <h3 className="font-semibold text-xl mb-2 pt-5 border-t-2 border-indigo-500 text-slate-900"> 
            {heading}
        </h3>

        <Link to={'/'} className="group inline-flex items-center text-midnight-700 hover:text-indigo-600 font-medium mt-auto self-start">
            {link1}
            <span className="ml-1.5 text-redis-indigo-500 opacity-50 group-hover:opacity-100 transition group-hover:translate-x-1">
            →
            </span>
        </Link>
        <Link to={'/'} className="group inline-flex items-center text-midnight-700 hover:text-indigo-600 font-medium mt-auto self-start">
            {link2}
            <span className="ml-1.5 text-redis-indigo-500 opacity-50 group-hover:opacity-100 transition group-hover:translate-x-1">
            →
            </span>
        </Link>
    </div>
  )
}

export default Section7Card