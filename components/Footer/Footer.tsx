import React from "react";
import styles from "./Footer.module.scss";

const Footer: React.FC = () => {
  return (
    <div className={styles.footer} data-testid="footer">
      <span>
        Michał Warchoł © {new Date().getFullYear()}. All rights reserved.
      </span>
    </div>
  );
};
export default Footer;
