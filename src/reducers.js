
import champlist from './lolchampions';

const initialState = {
    allChampList: champlist,
    queryInput: ""
};

const types = {
    QUERY_INPUT_UPDATE: "QUERY_INPUT_UPDATE",
    QUERY_INPUT_RESET: "QUERY_INPUT_RESET"
}

const reducer=(state = initialState, action)=>{
    switch(action.type){
        case    types.QUERY_INPUT_UPDATE:
            return {
                ...state,
                queryInput: action.payload
            };
        case    types.QUERY_INPUT_RESET:
            return{
                ...state,
                queryInput: ""
            };
        
        
        default:
            throw new Error("Unexpected action.");
    }
}