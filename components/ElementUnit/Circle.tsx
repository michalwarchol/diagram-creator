import React from "react";
import { ElementUnitProps } from "../../redux/types";

const Circle: React.FC<ElementUnitProps> = ({ h, w, color }) => {
  return (
    <circle
      cx={(w / 2).toString()}
      cy={(h / 2).toString()}
      r={(h / 2).toString()}
      fill={color}
    />
  );
};
export default Circle;
