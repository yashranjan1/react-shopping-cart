import { Link } from "react-router-dom";

const Navbar = () => {
    return ( 
        <nav className="flex items-center justify-between flex-wrap bg-theme-color py-6 pr-6 drop-shadow-nav">
            <div className="flex items-center flex-shrink-0 text-white mx-8 font-bold text-3xl rotate-[350deg] font-montserrat">
                SC
            </div>
            <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
                <div className="text-sm lg:flex-grow">
                    <Link to='/products' className="block mt-4 lg:inline-block lg:mt-0 text-slate-50 hover:text-slate-300 mr-4 text-xl font-montserrat">Products</Link>
                    <Link to='/cart'className="block mt-4 lg:inline-block lg:mt-0 text-slate-50 hover:text-slate-300 mr-4 text-xl font-montserrat">Cart</Link>
                </div>
            </div>
        </nav>
    );
}
 
export default Navbar;