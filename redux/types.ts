export enum Selector {
    SHAPES,
    TEXT,
    ELEMENTS,
    ARROWS
}

export type State = {
    selector: Selector;
    activeElements: HTMLElement[];
}

export type Actions = 
    | {type: "changeSelector"; selector: Selector}
    | {type: "changeActiveElements"; activeElements: HTMLElement[]}



export type BaseElementProperties = {
    height: number;
    width: number;
    backgroundColor: string;
    x: number;
    y: number;
}