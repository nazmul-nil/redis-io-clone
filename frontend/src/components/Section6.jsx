// Redis stack use cases section

import UseCases from "./UseCases"


const Section6 = () => {
    const redisUseCases = [
        {
            id: 1,
            heading: "Searchable Redis",
            description: "Index and query Redis data structures and data models; run complex aggregations and full-text search on your Redis data.",
        },
        {
            id: 2,
            heading: "Document database",
            description: "Model domain entirely in Redis, and query your JSON data efficiently without ever having to use a cache.",
        },
        {
            id: 3,
            heading: "Telemetry",
            description: "Ingest continuous readings from devices in the field, storing as time series data or analyzing and deduplicating with probabilistic data structures.",
        },
        {
            id: 4,
            heading: "Identity and resource management",
            description: "Define digital resources and ACLs as a graph, and compute permissions in real-time with a single Cypher query.",
        },
        {
            id: 5,
            heading: "Vector similarity search",
            description: "Query vector embeddings to power images search, recommendation engines, and natural language text processing.",
        },
        {
            id: 6,
            heading: "Fraud detection",
            description: "All the tools to detect fraud in real time, probabilistic queries, vector search, and even processing using streams.",
        },
    ]
  return (
    <section className="pb-28">
        <div className="container max-w-[85rem] mx-auto px-4 sm:px-8">
            <h2 className="text-center font-display text-4xl leading-tight text-slate-900 font-semibold mb-10">
                Redis Stack use cases
            </h2>
            <div className="flex flex-col sm:grid md:grid-cols-2 xl:grid-cols-3 gap-14">
                {/* Each use cases */}
                {redisUseCases.map(eachCase => 
                    <UseCases key={eachCase.id} heading={eachCase.heading} description={eachCase.description}/>
                    
                    )}
            </div>
        </div>
    </section>
  )
}

export default Section6