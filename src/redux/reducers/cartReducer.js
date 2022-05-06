const initState = {
    products: [],
};

function CartReducer(state = initState, action) {
    switch (action.type) {
        case 'ADD_PRODUCT': {
            let newProducts = [...state.products];
            newProducts.push(action.payload);
            return {
                ...state,
                products: newProducts,
            }
        }

        case 'DELETE_PRODUCT': {
            let newProducts = [...state.products].filter(p => p.id !== action.payload);
            return {
                ...state,
                products: newProducts,
            }
        }
        default:
            return state
    }
}

export default CartReducer;
