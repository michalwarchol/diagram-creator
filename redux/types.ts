export enum Selector {
    SHAPES,
    TEXT,
    ELEMENTS,
    ARROWS
}

export type State = {
    selector: Selector;
}

export type Actions = 
    | {type: "changeSelector"; selector: Selector}