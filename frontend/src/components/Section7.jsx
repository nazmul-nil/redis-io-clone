// get started section

import Section7Card from "./Section7Card"

const Section7 = () => {
    const section7Cards = [
        {
            id: 1,
            heading: "Preparation",
            links: [
                {
                    link1: "Install & launch Redis",
                    to: "/",
                },
                {
                    link2: "Learn the Redis CLI",
                    to: "/",
                }
            ]
        },
        {
            id: 2,
            heading: "Countdown",
            links: [
                {
                    link1: "Experiment with Redis data structures",
                    to: "/",
                },
                {
                    link2: "Explore Redis clients",
                    to: "/",
                }
            ]
        },
        {
            id: 3,
            heading: "Liftoff",
            links: [
                {
                    link1: "See Redis programming patterns",
                    to: "/",
                },
                {
                    link2: "Join to the community",
                    to: "/",
                }
            ]
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
                {section7Cards.map(card => 
                    <Section7Card key={card.id} 
                    heading={card.heading} 
                    link1={card.links.map(link => link.link1)}
                    link2={card.links.map(link => link.link2)}
                    />
                    
                    )}
            </div>
        </div>
    </section>
  )
}

export default Section7