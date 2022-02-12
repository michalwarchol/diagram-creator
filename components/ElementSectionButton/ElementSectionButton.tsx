import React from "react";
import styles from "./ElementSectionButton.module.scss";
import { IconType } from "react-icons/lib";
import Button from "../Button/Button";
import { Actions, Selector } from "../../redux/types";
import { connect } from "react-redux";
import { Dispatch } from "redux";

interface Props {
  text: string;
  Icon: IconType;
  selector: Selector;
  changeSelector(selector: Selector): void;
}

const ElementSectionButton: React.FC<Props> = ({
  text,
  Icon,
  selector,
  changeSelector,
}) => {
  return (
    <Button
      variant="outline"
      className={styles.elementSectionButton}
      onClick={() => changeSelector(selector)}
    >
      <Icon />
      <span>{text}</span>
    </Button>
  );
};

const mapDispatchToProps = (dispatch: Dispatch<Actions>) => ({
  changeSelector: (selector: Selector) =>
    dispatch({ type: "changeSelector", selector }),
});
export default connect(null, mapDispatchToProps)(ElementSectionButton);
