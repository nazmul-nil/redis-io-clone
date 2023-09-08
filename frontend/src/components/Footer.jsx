
import { Link } from "react-router-dom"

const Footer = () => {
  return (
    
    <footer className="bg-midnight-700 z-50">
        <p className="container max-w-[85rem] mx-auto px-4 sm:px-8 py-8 text-slate-400 text-sm text-center">
        This is a community website sponsored by
        <Link to={'/redis.com'} className="text-white underline underline-offset-1 decoration-transparent hover:decoration-slate-500 transition-colors">
            Redis Ltd.
        </Link>
        © 2023. Redis and the cube logo are registered trademarks of Redis Ltd. 
        <Link to={'/redis.com'} className="text-white underline underline-offset-1 decoration-transparent hover:decoration-slate-500 transition-colors">
        Terms of use & privacy policy
        </Link>
        </p>
    </footer>
  )
}

export default Footer