import React from "react";

export enum Selector {
  SHAPES,
  TEXT,
  ELEMENTS,
  ARROWS,
}

export type ElementProperties = {
    id: number;
    C: React.FC<ElementUnitProps>;
    height: number;
    width: number;
    backgroundColor: string;
    x: number;
    y: number;
  };

export type BaseElementProperties = {
  id: number;
  C: React.FC<ElementUnitProps>;
  height?: number;
  width?: number;
  backgroundColor?: string;
  x?: number;
  y?: number;
};

export type ElementUnitProps = {
  h: number; //element height
  w: number; //element width
  color: string;
};

export type State = {
  selector: Selector;
  activeElements: HTMLElement[];
  elements: ElementProperties[];
  elementsCounter: number;
};

export type Actions =
  | { type: "changeSelector"; selector: Selector }
  | { type: "changeActiveElements"; activeElements: HTMLElement[] }
  | { type: "addElement"; element: BaseElementProperties }
  | { type: "moveElement"; id: number; x: number; y: number };
