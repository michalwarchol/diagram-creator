import {Selector, State, Actions} from "./types";

const initialState: State = {
    selector: Selector.SHAPES
}

const reducer = (state: State = initialState, action: Actions) => {
    switch(action.type){
        case "changeSelector":
            state.selector=action.selector;
            return state;
        default:
            return state;
    }
}

export default reducer;