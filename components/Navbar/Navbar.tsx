import React from 'react'
import styles from "./Navbar.module.scss";

const Navbar:React.FC = () => {
    return(
        <div className={styles.navbar}>
            <h1>Diagram Creator</h1>
        </div>
    )
}
export default Navbar;