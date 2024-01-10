import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
    const [visible, setVisible] = useState(false)
    return ( 
        <nav className="flex items-center justify-between flex-wrap bg-theme-color py-6 pr-6 drop-shadow-nav">
            <div className="flex items-center flex-shrink-0 text-white mx-8 font-bold text-3xl rotate-[350deg] font-montserrat">
                SC
            </div>
            <div className="w-full hidden flex-grow sm:flex sm:items-center sm:w-auto">
                <div className="text-sm sm:flex-grow">
                    <Link to='/products' className="block mt-4 sm:inline-block sm:mt-0 text-slate-50 hover:text-slate-300 mr-4 text-xl font-montserrat">Products</Link>
                    <Link to='/cart'className="block mt-4 sm:inline-block sm:mt-0 text-slate-50 hover:text-slate-300 mr-4 text-xl font-montserrat">Cart</Link>
                </div>
            </div>
            <button className="border-white border-[1.5px] rounded-lg sm:hidden" onClick={()=>{
                if(visible) setVisible(false)
                else setVisible(true)
            }}>
                <span className="material-symbols-outlined text-white pt-1 px-2">menu</span>
            </button>
            <AnimatePresence>
                {visible && <motion.div 
                className="w-full sm:hidden" 
                id="hamburger-menu-el"
                initial={{
                    y:-200
                }}
                animate={{
                    y:0
                }}
                exit={{
                    y:-200
                }}
                >
                    <div className="text-sm ml-8 mt-8">
                        <Link to='/products' className="block mt-4 sm:inline-block sm:mt-0 text-slate-50 hover:text-slate-300 mr-4 text-xl font-montserrat">Products</Link>
                        <Link to='/cart'className="block mt-4 sm:inline-block sm:mt-0 text-slate-50 hover:text-slate-300 mr-4 text-xl font-montserrat">Cart</Link>
                    </div>
                </motion.div>}
            </AnimatePresence>
        </nav>
    );
}
 
export default Navbar;