import React from "react";
import styles from "./ElementsSelector.module.scss";
import { FaShapes, FaDatabase } from "react-icons/fa";
import { BiText } from "react-icons/bi";
import { BsArrowUpRight } from "react-icons/bs";
import { Selector } from "../../redux/types";
import ElementSectionButton from "../ElementSectionButton/ElementSectionButton";
import ElementsGroup from "../ElementsGroup/ElementsGroup";

const ElementsSelector: React.FC = () => {
  return (
    <div className={styles.elementsSelector}>
      <div className={styles.categories}>
        <ElementSectionButton
          text="Shapes"
          Icon={FaShapes}
          selectorValue={Selector.SHAPES}
        />
        <ElementSectionButton
          text="Text"
          Icon={BiText}
          selectorValue={Selector.TEXT}
        />
        <ElementSectionButton
          text="Elements"
          Icon={FaDatabase}
          selectorValue={Selector.ELEMENTS}
        />
        <ElementSectionButton
          text="Arrows"
          Icon={BsArrowUpRight}
          selectorValue={Selector.ARROWS}
        />
      </div>
      <ElementsGroup />
    </div>
  );
};

export default ElementsSelector;
