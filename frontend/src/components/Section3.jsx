// Core Capabilities section

import CoreCapabilites from "./CoreCapabilites"


const Section3 = () => {
    const coreCapabilites = [
        {
            id: 1,
            image: "/core-img-1.png",
            heading: "In-memory data structures",
            description: "Well-known as a 'data structure server', with support for strings, hashes, lists, sets, sorted sets, streams, and more.",
        },
        {
            id: 2,
            image: "/core-img-2.png",
            heading: "Programmability",
            description: "Server-side scripting with Lua and server-side stored procedures with Redis Functions.",
        },
        {
            id: 3,
            image: "/core-img-3.png",
            heading: "Extensibility",
            description: "A module API for building custom extensions to Redis in C, C++, and Rust.",
        },
        {
            id: 4,
            image: "/core-img-4.png",
            heading: "Persistence",
            description: "Keeps the dataset in memory for fast access, but can also persist all writes to permanent storage to survive reboots and system failures.",
        },
        {
            id: 5,
            image: "/core-img-5.png",
            heading: "Clustering",
            description: "Horizontal scalability with hash-based sharding, scaling to millions of nodes with automatic re-partitioning when growing the cluster.",
        },
        {
            id: 6,
            image: "/core-img-6.png",
            heading: "High availability",
            description: "Replication with automatic failover for both standalone and clustered deployments.",
        },
    ]
  return (
    <section className="py-28 bg-gradient-to-b from-indigo-50/30 via-indigo-50/30 to-white">
        <div className="container max-w-[85rem] mx-auto px-4 sm:px-8">
            <h2 className="text-center font-display text-4xl leading-tight text-slate-900 font-semibold mb-10 -mt-4">
            Core capabilities
            </h2>
            <div className="flex flex-col sm:grid md:grid-cols-2 xl:grid-cols-3 gap-14">
                {/* Individual core capabilites */}
                {coreCapabilites.map(coreCapability => 
                    <CoreCapabilites key={coreCapability.id} heading={coreCapability.heading} image={coreCapability.image} description={coreCapability.description}/>
                    )}
            </div>
        </div>
    </section>
  )
}

export default Section3