//sse agrega al carrito
export const addCart = (product) => {
    return{
        type : "ADDITEM",
        payload : product
    }
}


// se borra del carrito
export const delCart = (product) => {
    return{
        type : "DELITEM",
        payload : product
    }
}