import React, { MouseEvent, useEffect, useRef, useState } from "react";
import styles from "./Element.module.scss";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import { Actions, ElementProperties, State } from "../../redux/types";
import ElementUnit from "../ElementUnit/ElementUnit";

interface Props {
  id: number;
}

interface ReduxProps {
  elementProps: ElementProperties;
  activeElements: HTMLElement[];
  changeActiveElements(activeElements: HTMLElement[]): void;
  moveElement(id: number, x: number, y: number): void;
}

const Element: React.FC<Props & ReduxProps> = ({
  elementProps,
  activeElements,
  changeActiveElements,
  moveElement
}) => {
  const elementRef = useRef<HTMLDivElement>(null);

  //if element is captured by a mouse
  const [mouseTracked, setMouseTracked] = useState<boolean>(false);

  //position from where element has been moved while moving
  const [startX, setStartX] = useState(100);
  const [startY, setStartY] = useState(100);

  //mouse position while grabbing the element
  const [mousex, setMouseX] = useState(100);
  const [mousey, setMouseY] = useState(100);

  const onMouseDown = (e: MouseEvent<HTMLDivElement>) => {
    if (!mouseTracked) {
      //set position of mouse in the canvas
      setMouseX(e.pageX);
      setMouseY(e.pageY);

      setMouseTracked(true);

      //replace all active elements with the captured one
      changeActiveElements([elementRef.current!]);
    }
  };

  const onMouseUp = () => {
    setMouseTracked(false);
    setStartX(elementProps.x);
    setStartY(elementProps.y);
  };

  const onMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (mouseTracked) {
      //calculate new position of element
      let newX = startX + (e.pageX - mousex);
      let newY = startY + (e.pageY - mousey);
      moveElement(elementProps.id, newX, newY);
    }
  };

  //when element is no longer active, untrack the mouse and set starting point at element's current location
  useEffect(() => {
    if (elementRef.current) {
      if (!activeElements.includes(elementRef.current)) {
        setMouseTracked(false);
        setStartX(elementProps.x);
        setStartY(elementProps.y);
      }
    }
  }, [activeElements]);

  return (
    <div
      ref={elementRef}
      className={
        styles.element +
        " " +
        (activeElements.includes(elementRef.current!)
          ? styles.active
          : undefined)
      }
      onMouseDown={onMouseDown}
      onMouseUp={onMouseUp}
      onMouseMove={onMouseMove}
      style={{
        top: elementProps.y,
        left: elementProps.x,
        zIndex: mouseTracked ? 99 : undefined,
        height: elementProps.height,
      }}
    >
      <ElementUnit C={elementProps.C} />
    </div>
  );
};

const mapStateToProps = (state: State, ownProps: Props) => {
  return {
    activeElements: state.activeElements,
    elementProps: state.elements.find((e) => e.id == ownProps.id)!,
  };
};

const mapDispatchToProps = (dispatch: Dispatch<Actions>) => {
  return {
    changeActiveElements: (activeElements: HTMLElement[]) =>
      dispatch({ type: "changeActiveElements", activeElements }),
    moveElement: (id: number, x: number, y: number) =>
      dispatch({ type: "moveElement", id, x, y }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Element);
