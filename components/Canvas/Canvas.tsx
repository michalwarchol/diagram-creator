import React, { BaseSyntheticEvent, useRef, useState } from "react";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import { Actions, State } from "../../redux/types";
import Element from "../Element/Element";
import styles from "./Canvas.module.scss";

interface Props {
  elements: number[];
  changeActiveElements(activeElements: HTMLElement[]): void;
}

const Canvas: React.FC<Props> = ({ elements, changeActiveElements }) => {
  const canvasRef = useRef<HTMLDivElement>(null);
  const [width, setWidth] = useState<number>(1000);
  const [height, setHeight] = useState<number>(800);

  const onClick = (e: BaseSyntheticEvent) => {
    if (e.currentTarget == e.target) {
      changeActiveElements([canvasRef.current!]);
    }
  };

  return (
    <div className={styles.background}>
      <div
        ref={canvasRef}
        className={styles.canvas}
        style={{ width, height }}
        onClick={onClick}
      >
        {elements.map((elem, i) => (
          <Element id={elem} key={i} />
        ))}
      </div>
    </div>
  );
};

const mapStateToProps = (state: State) => {
  return {
    elements: state.elements.map((elem) => elem.id),
  };
};

const mapDispatchToProps = (dispatch: Dispatch<Actions>) => {
  return {
    changeActiveElements: (activeElements: HTMLElement[]) =>
      dispatch({ type: "changeActiveElements", activeElements }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Canvas);
