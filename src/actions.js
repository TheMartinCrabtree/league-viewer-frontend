import { types } from './reducers';

const useActions=(state, dispatch)=>{
    function updateQueryInput( userInput ){
        const inputInState = state.queryInput.queryInput;

        if(!inputInState){
            
            dispatch({type: types.QUERY_INPUT_RESET, payload: ""  })
        }
        else if( inputInState  ){
            dispatch({type: types.QUERY_INPUT_UPDATE, payload: userInput  })
        }
        else{
            alert("error when trying to valiate user input");
        }
    };
};

export default useActions;