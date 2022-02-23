import { Selector, State, Actions } from "./types";

const initialState: State = {
  selector: Selector.SHAPES,
  activeElements: [],
  elements: [],
  elementsCounter: 0,
};

const reducer = (state: State = initialState, action: Actions) => {
  switch (action.type) {
    case "changeSelector":
      return {
        ...state,
        selector: action.selector,
      };
    case "changeActiveElements":
      return {
        ...state,
        activeElements: [...action.activeElements],
      };
    case "addElement":
      const { id, C, height, width, backgroundColor, x, y } = action.element;
      return {
        ...state,
        elements: [
          ...state.elements,
          {
            id,
            C,
            height: height || 100,
            width: width || 100,
            backgroundColor,
            x: x || 100,
            y: y || 100,
          },
        ],
        elementsCounter: state.elementsCounter + 1,
      };

    case "moveElement":
        return {
            ...state,
            elements: state.elements.map(elem=>{
                if(elem.id != action.id) return elem;
                return {
                    ...elem,
                    x: action.x,
                    y: action.y
                }
            })
        }
    default:
      return state;
  }
};

export default reducer;
