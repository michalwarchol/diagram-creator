import React from "react";
import styles from "./ElementsSelector.module.scss";
import { FaShapes, FaDatabase } from "react-icons/fa";
import { BiText } from "react-icons/bi";
import { BsArrowUpRight } from "react-icons/bs";
import { Selector } from "../../redux/types";
import ElementSectionButton from "../ElementSectionButton/ElementSectionButton";

const ElementsSelector: React.FC = () => {
  return (
    <div className={styles.elementsSelector}>
      <div className={styles.categories}>
        <ElementSectionButton
          text="Shapes"
          Icon={FaShapes}
          selector={Selector.SHAPES}
        />
        <ElementSectionButton
          text="Text"
          Icon={BiText}
          selector={Selector.TEXT}
        />
        <ElementSectionButton
          text="Elements"
          Icon={FaDatabase}
          selector={Selector.ELEMENTS}
        />
        <ElementSectionButton
          text="Arrows"
          Icon={BsArrowUpRight}
          selector={Selector.ARROWS}
        />
      </div>
    </div>
  );
};

export default ElementsSelector;
