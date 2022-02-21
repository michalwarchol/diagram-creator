import React, { MouseEvent, useEffect, useRef, useState } from "react";
import styles from "./Element.module.scss";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import { Actions, State } from "../../redux/types";

interface Props {
  id: number;
  activeElements: HTMLElement[];
  changeActiveElements(activeElements: HTMLElement[]): void;
}

const Element: React.FC<Props> = ({
  id,
  activeElements,
  changeActiveElements,
}) => {
  const init = useRef(true);
  const elementRef = useRef<HTMLDivElement>(null);

  //if element is captured by a mouse
  const [mouseTracked, setMouseTracked] = useState<boolean>(false);

  //position of the element
  const [x, setX] = useState(100);
  const [y, setY] = useState(100);

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
    setStartX(x);
    setStartY(y);
  };

  const onMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (mouseTracked) {
      //calculate new position of element
      let newX = startX + (e.pageX - mousex);
      let newY = startY + (e.pageY - mousey);

      //coordinates outside canvas
      if (newX < 0) setX(0);
      if (newY < 0) setY(0);
      if (newX > 1000) setX(1000 - elementRef.current!.clientWidth);
      if (newY > 1000) setY(800 - elementRef.current!.clientHeight);

      //coordinates in canvas
      if (newX >= 0 && newX <= 1000 - elementRef.current!.clientWidth) {
        setX(newX);
      }
      if (newY >= 0 && newY <= 800 - elementRef.current!.clientHeight) {
        setY(newY);
      }
    }
  };

  //when element is no longer active, untrack the mouse and set starting point at element's current location
  useEffect(() => {
    if (elementRef.current) {
      if (!activeElements.includes(elementRef.current)) {
        setMouseTracked(false);
        setStartX(x);
        setStartY(y);
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
        top: y,
        left: x,
        zIndex: mouseTracked ? 99 : undefined,
      }}
    ></div>
  );
};

const mapStateToProps = (state: State) => {
  return {
    activeElements: state.activeElements,
  };
};

const mapDispatchToProps = (dispatch: Dispatch<Actions>) => {
  return {
    changeActiveElements: (activeElements: HTMLElement[]) =>
      dispatch({ type: "changeActiveElements", activeElements }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Element);
