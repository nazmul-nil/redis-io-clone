// use cases component


const UseCases = ({heading, description}) => {
  return (
    <div className="flex flex-col h-full" >
        <h3 className="font-semibold text-xl mb-2 pt-5 border-t-2 border-indigo-500 text-slate-900"> 
            {heading}
        </h3>
        <p className="text-redis-neutral-800">
        {description}
        </p>
    </div>
  )
}

export default UseCases