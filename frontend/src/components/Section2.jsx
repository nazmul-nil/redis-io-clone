// Vibrant open source database section


const Section2 = () => {
  return (
    <section className=" ">
        <div className="container max-w-[85rem] mx-auto px-4 sm:px-8 text-center pb-28">
            <h1 className="font-display text-4xl leading-tight text-slate-900 font-semibold mb-4 -mt-4">
                A vibrant, open source database
            </h1>
            <p className="text-neutral-600 text-lg max-w-2xl mx-auto mb-12 text-justify">
          Voted the most-loved database for 5 years running, Redis is at the
          center of an engaged community of developers, architects, and open
          source contributors.
            </p>
            <div className="flex flex-col md:grid grid-cols-3 gap-5 text-redis-neutral-800 max-w-2xl mx-auto px-8 md:px-0">
                <div className="w-full text-sm font-semibold text-slate-900 p-6 bg-white border border-slate-900/10 bg-clip-padding shadow-md shadow-slate-900/5 rounded-lg flex flex-col justify-center">
                    <span className="mb-1 text-teal-400 font-display text-5xl">
                    4B+
                    </span>
                     Docker pulls
                </div>
                <div className="w-full text-sm font-semibold text-slate-900 p-6 bg-white border border-slate-900/10 bg-clip-padding shadow-md shadow-slate-900/5 rounded-lg flex flex-col justify-center">
                    <span className="mb-1 text-teal-400 font-display text-5xl">
                    50K+
                    </span>
                    Github stars
                </div>
                <div className="w-full text-sm font-semibold text-slate-900 p-6 bg-white border border-slate-900/10 bg-clip-padding shadow-md shadow-slate-900/5 rounded-lg flex flex-col justify-center">
                    <span className="mb-1 text-teal-400 font-display text-5xl">
                    50+
                    </span>
            Supported programing languages
                </div>
            </div>
        </div>
    </section>
  )
}

export default Section2