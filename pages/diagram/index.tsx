import React from "react";
import {Provider} from "react-redux";
import store from "../../redux/store";
import Head from "next/head";
import styles from "./Diagram.module.scss";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import ElementsSelector from "../../components/ElementsSelector/ElementsSelector";

const Diagram: React.FC = () => {
  return (
    <Provider store={store}>
    <div className={styles.diagram}>
      <Head>
        <title>Diagram Creator</title>
      </Head>
      <Navbar />
      <div className={styles.panel}>
        <ElementsSelector />
      </div>
      <Footer />
    </div>
    </Provider>
  );
};
export default Diagram;
