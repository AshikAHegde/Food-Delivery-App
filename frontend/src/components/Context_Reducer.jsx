import React, { useReducer, createContext, useContext } from 'react';

const CartStateContext = createContext();
const CartDispatchContext = createContext();

const reducer = (state, action) => {
    switch (action.type) {
        case "ADD":
            return [...state, { id: action.id, name: action.name, price: action.price, qty: action.qty, size: action.size, img: action.img }];
            break;
        case "REMOVE":
            let newState = [...state];
            newState.splice(action.index, 1);
            return newState;
            break;
        case "DROP":
            let empArray = []
            return empArray
        case "UPDATE":
            let arr = [...state]
            let index = arr.findIndex(food => food.id === action.id && food.size === action.size);
            if (index !== -1) {
                arr[index] = {
                    ...arr[index],
                    qty: arr[index].qty + parseInt(action.qty),
                    price: arr[index].price + action.price
                };
            }
            return arr;

        default:
            console.log("Error in Reducer");
    }
};
export const CartProvider = ({ children }) => {

    const [state, dispatch] = useReducer(reducer, []);
    return (
        <CartDispatchContext.Provider value={dispatch}>
            <CartStateContext.Provider value={state}>
                {children}
            </CartStateContext.Provider>
        </CartDispatchContext.Provider>
    );
}


export const useCart = () => useContext(CartStateContext);
export const useDispatchCart = () => useContext(CartDispatchContext);
