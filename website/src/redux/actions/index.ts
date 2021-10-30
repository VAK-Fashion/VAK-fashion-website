export const user = (data: object) => {
    return {
        type: "USER",
        data
    }
}
export const cart = (data: object) => {
    return {
        type: "CART",
        data
    }
}