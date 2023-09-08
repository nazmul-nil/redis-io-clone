import { Link } from "react-router-dom"



const CoreCapabilites = ({image, heading, description}) => {
  return (
    <div className="flex flex-col h-full">
      <div className="flex items-center justify-center w-14 h-14 p-3 bg-indigo-50 rounded-md mb-6">
          <img src={image} alt="" />
      </div>
      <h3 className="font-semibold text-xl mb-2 text-slate-900">
      {heading}
      </h3>
      <p className="text-redis-neutral-800 mb-5">
      {description}
      </p>
      <Link to={'/'} className="group inline-flex items-center text-midnight-700 hover:text-indigo-600 font-medium mt-auto self-start">
          Learn more
          <span className="ml-1.5 text-redis-indigo-500 opacity-50 group-hover:opacity-100 transition group-hover:translate-x-1">
          →
          </span>
      </Link>
    </div>
  )
}

export default CoreCapabilites