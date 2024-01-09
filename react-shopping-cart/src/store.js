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

export const increaseQuantity = (item) => { 
    for(const currItem of store.cartItems){
        if(currItem.id == item.id){
            currItem.quantity++
            return
        }
    }
}

export const decreaseQuantity = (item) => { 
    for(const currItem of store.cartItems){
        if(currItem.id == item.id && currItem.quantity > 1){
            currItem.quantity--
            return
        }
    }
}

export const removeItem = (item) => { 
    store.cartItems = store.cartItems.filter(cartItem => cartItem.id !== item.id)
}

export const setQuantityZero = (item) => {
    for(const currItem of store.cartItems){
        if(currItem.id == item.id){
            currItem.quantity = 0
            return
        }
    }
}


export default store;