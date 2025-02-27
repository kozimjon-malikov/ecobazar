const initState = false;

export const loaderReducer = (state = initState, action) => {
    switch (action.type) {
        case "LOADING":
            return !state;
        default:
            return state; 
    }
};
