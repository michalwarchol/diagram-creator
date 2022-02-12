import React, { BaseSyntheticEvent } from "react";
import styles from "./Button.module.scss";

interface Props {
  variant?: "fill" | "outline";
  className?: string;
  onClick?(e: BaseSyntheticEvent): void;
}

const Button: React.FC<Props> = ({ children, variant = "fill", ...props }) => {
  let className = variant == "fill" ? styles.fill : styles.outline;

  return (
    <div className={className + " " + props.className} onClick={props.onClick} data-testid="testButton">
      {children}
    </div>
  );
};

export default Button;
