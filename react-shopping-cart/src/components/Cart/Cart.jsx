import store from "../../store";

const Cart = () => {
    return ( 
        <>
            {store.cartItems.map((item)=>{
                console.log(store.cartItems)
                return <h1 className="text-white" key={item.id}>{item.itemName}</h1>
            })}
        </>
     );
}
 
export default Cart;