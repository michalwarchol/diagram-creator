import {Selector, State, Actions} from "./types";

const initialState: State = {
    selector: Selector.SHAPES,
    activeElements: [],
}

const reducer = (state: State = initialState, action: Actions) => {
    switch(action.type){
        case "changeSelector":
            return {
                ...state,
                selector: action.selector
            };
        case "changeActiveElements":
            return {
                ...state,
                activeElements: [...action.activeElements]
            }
        default:
            return state;
    }
}

export default reducer;