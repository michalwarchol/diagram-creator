import React, { BaseSyntheticEvent, useRef, useState } from "react";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import { Actions, State } from "../../redux/types";
import Element from "../Element/Element";
import styles from "./Canvas.module.scss";

interface Props {
  activeElements: HTMLElement[];
  changeActiveElements(activeElements: HTMLElement[]): void;
}

const Canvas: React.FC<Props> = ({ changeActiveElements }) => {
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
        <Element id={1} key={1} />
        <Element id={2} key={2} />
        <Element id={3} key={3} />
        <Element id={4} key={4} />
      </div>
    </div>
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
      dispatch({ type: "changeActiveElements", activeElements })
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Canvas);
