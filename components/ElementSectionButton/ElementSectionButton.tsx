import React from "react";
import styles from "./ElementSectionButton.module.scss";
import { IconType } from "react-icons/lib";
import Button from "../Button/Button";
import { Actions, Selector, State } from "../../redux/types";
import { connect } from "react-redux";
import { Dispatch } from "redux";

interface Props {
  text: string;
  Icon: IconType;
  selectorValue: Selector;
  selector: Selector;
  changeSelector(selector: Selector): void;
}

const ElementSectionButton: React.FC<Props> = ({
  text,
  Icon,
  selectorValue,
  selector,
  changeSelector,
}) => {
  let className = styles.elementSectionButton;
  if (selectorValue == selector) {
    className += " " + styles.selected;
  }

  return (
    <Button
      variant="outline"
      className={className}
      onClick={() => changeSelector(selectorValue)}
    >
      <Icon />
      <span>{text}</span>
    </Button>
  );
};

const mapStateToProps = (state: State) => {
  return {
    selector: state.selector,
  };
};

const mapDispatchToProps = (dispatch: Dispatch<Actions>) => ({
  changeSelector: (selector: Selector) =>
    dispatch({ type: "changeSelector", selector }),
});
export default connect(mapStateToProps, mapDispatchToProps)(ElementSectionButton);
