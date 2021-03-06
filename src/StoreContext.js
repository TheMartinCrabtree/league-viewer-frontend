import { initialState, types, reducer } from "./reducers";
import React, { useReducer, createContext, useActions } from 'react'

const StoreContext = createContext(initialState);

const StoreProvider=({ children })=>{
    let [state, dispatch] = useReducer(reducer, initialState);
    const actions = useActions(state, dispatch);

    // console.log("value of actions", actions);
    // console.log("value of dispatch", dispatch);

    

    // Render updated state
    // return(
    //     <StoreContext.Provider value={{state, dispatch, actions}} >
    //         { children }
    //     </StoreContext.Provider>
    // );
    return(
        <StoreContext.Provider value={{state, dispatch, actions}} >
            { children }
        </StoreContext.Provider>
    );
};

export { StoreContext, StoreProvider }