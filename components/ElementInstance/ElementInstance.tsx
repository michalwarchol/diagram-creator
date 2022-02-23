import React, { ReactNode } from "react";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import {
  Actions,
  BaseElementProperties,
  ElementUnitProps,
  State,
} from "../../redux/types";
import styles from "./ElementInstance.module.scss";

interface Props {
  title: string;
  C: React.FC<ElementUnitProps>;
  children?: ReactNode;
  elementsCounter: number;
  addElement(element: BaseElementProperties): void;
}

const ElementInstance: React.FC<Props> = ({
  title,
  elementsCounter,
  C,
  addElement,
  children,
}) => {
  let h = title == "hexagon" ? 87 : 100;

  const onClick = () => {
    addElement({ id: elementsCounter, C, height: h });
  };

  return (
    <div className={styles.elementInstance} onClick={onClick}>
      <div className={styles.element}>{children}</div>
      <p>{title}</p>
    </div>
  );
};

const mapStateToProps = (state: State) => {
  return {
    elementsCounter: state.elementsCounter,
  };
};

const mapDispatchToProps = (dispatch: Dispatch<Actions>) => {
  return {
    addElement: (element: BaseElementProperties) =>
      dispatch({ type: "addElement", element }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ElementInstance);
