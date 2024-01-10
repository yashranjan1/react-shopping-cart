import { motion } from "framer-motion"
import store, { addItemFunction } from "../../store"

const subtract = (id) => {
    const quantity = document.getElementById(`quantity-div-${id}`)
    if (quantity.innerText > 0) quantity.innerText--
}

const add = (id) => {
    const quantity = document.getElementById(`quantity-div-${id}`)
    quantity.innerText++
}

const Products = (props) => {
    return ( 
        <div className="sm:ml-28 sm:mr-[72px] sm:my-14 m-10">
            <h1 className="text-white font-montserrat font-bold text-5xl mb-8">Popular Items</h1>
            <div className="flex flex-wrap" >
            {props.items.map((item)=>{
                return (
                    <motion.div  
                    whileHover='hover'
                    variants={{
                        hover: {
                            scale:1.05
                        },
                    }}
                    transition={{
                        duration: 0.5,
                        ease: "backInOut"
                    }}
                    key={item.id}
                    className="max-w-sm bg-theme-color border rounded-lg border-gray-700 sm:mr-10 mb-10">
                        <img className="rounded-t-lg" src={`../src/assets/${item.itemImage}`} alt="" />
                        <div className="p-5 font-montserrat">
                            <h5 className="mb-2 text-2xl font-thin tracking-tight text-white font-mono">{item.itemName}</h5>
                            <p className="mb-5 text-white">Price:  &#x20b9; {item.price}</p>      
                            <div className="relative flex items-center">
                                <p className="mr-4 text-white">Quantity:</p>
                                <button type="button" className="bg-theme-color rounded-s-lg p-3 h-11 border-2 border-r-0 border-slate-800 active:bg-slate-800/40" onClick={()=>subtract(`${item.id}`)}>
                                    <svg className="w-3 h-3 text-white" viewBox="0 0 18 2">
                                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h16"/>
                                    </svg>
                                </button>
                                <div className="text-white py-[8px] w-12 text-center border-2 border-slate-800" id={`quantity-div-${item.id}`}>
                                    0
                                </div>
                                <button type="button" className="bg-theme-color rounded-e-lg p-3 h-11 border-2 border-l-0 border-slate-800 active:bg-slate-800/40 " onClick={()=>add(`${item.id}`)}>
                                    <svg className="w-3 h-3 text-gray-900 dark:text-white" viewBox="0 0 18 18">
                                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 1v16M1 9h16"/>
                                    </svg>
                                </button>
                            </div>   
                            <motion.button 
                            whileTap={{
                                scale:0.85
                            }}
                            type="button" 
                            className="text-white hover:text-theme-color border-[1.5px] border-slate-50 hover:border-theme-color py-2 px-4 my-6 rounded-lg float-right hover:bg-slate-50 active:bg-slate-200"
                            onClick={()=>{
                                const numAdded = parseInt(document.getElementById(`quantity-div-${item.id}`).innerText)
                                if (numAdded == 0) return
                                let itemWithQuantity = JSON.parse(JSON.stringify(item))
                                itemWithQuantity.quantity = numAdded
                                addItemFunction(itemWithQuantity)
                            }}
                            >
                            
                                Add to cart
                            </motion.button>                    
                        </div>
                    </motion.div>
                )
            })}
            </div>
        </div> 
    );
}
 
export default Products;