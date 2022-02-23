import React from "react";
import styles from "./ElementsGroup.module.scss";
import { connect } from "react-redux";
import { ElementUnitProps, Selector, State } from "../../redux/types";
import ElementInstance from "../ElementInstance/ElementInstance";
import data from "./elements.json";
import ElementUnit from "../ElementUnit/ElementUnit";
import Circle from "../ElementUnit/Circle";
import Rectangle from "../ElementUnit/Rectangle";
import Triangle from "../ElementUnit/Triangle";
import Hexagon from "../ElementUnit/Hexagon";

interface Props {
  selector: Selector;
}

const components: Record<string, React.FC<ElementUnitProps>> = {
  rectangle: Rectangle,
  circle: Circle,
  triangle: Triangle,
  hexagon: Hexagon,
};

const ElementsGroup: React.FC<Props> = ({ selector }) => {
  return (
    <div className={styles.elementsGroup}>
      <div className={styles.elementsGroupInner}>
        {data[selector].elements.map((elem, index) => (
          <ElementInstance
            title={elem.name}
            key={index}
            C={components[elem.name]}
          >
            <ElementUnit C={components[elem.name]} w={60} h={60} color="gray" />
          </ElementInstance>
        ))}
      </div>
    </div>
  );
};

const mapStateToProps = (state: State) => {
  return {
    selector: state.selector,
  };
};

export default connect(mapStateToProps)(ElementsGroup);
