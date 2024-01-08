import { proxy } from "valtio"

const store = proxy({
    cartItems: []
})

export const addItemFunction = (item) => { 
    for(const currItem of store.cartItems){
        if(currItem.id == item.id){
            currItem.quantity += item.quantity
            return
        }
    }
    store.cartItems.push(item)
}

export default store;