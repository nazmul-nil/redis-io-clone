// Use Cases section

import UseCases from "./UseCases"

const Section4 = () => {
    const useCases = [
        {
            id:1, 
            heading: "Real-time data store",
            description: "Redis' versatile in-memory data structures enable building data infrastructure for real-time applications that require low latency and high-throughput.",
        },
        {
            id:2, 
            heading: "Caching & session storage",
            description: "Redis' speed makes it ideal for caching database queries, complex computations, API calls, and session state.",
        },
        {
            id:3, 
            heading: "Streaming & messaging",
            description: "The stream data type enables high-rate data ingestion, messaging, event sourcing, and notifications.",
        }
    ]
  return (
    <section className="pb-28">
        <div className="container max-w-[85rem] mx-auto px-4 sm:px-8">
            <h2 className="text-center font-display text-4xl leading-tight text-slate-900 font-semibold mb-10"> 
                Use cases
            </h2>
            <div className="flex flex-col sm:grid md:grid-cols-2 xl:grid-cols-3 gap-14">
                {/* Each use cases */}
                {useCases.map(eachCase => 
                    <UseCases key={eachCase.id} heading={eachCase.heading} description={eachCase.description}/>
                    
                    )}
            </div>
        </div>
    </section>
  )
}

export default Section4