import {Selector, State, Actions} from "./types";

const initialState: State = {
    selector: Selector.SHAPES
}

const reducer = (state: State = initialState, action: Actions) => {
    switch(action.type){
        case "changeSelector":
            return {
                ...state,
                selector: action.selector
            };
        default:
            return state;
    }
}

export default reducer;