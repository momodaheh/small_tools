import React from "react";
import styles from "./index.module.scss";
import Head from '../../components/Head'
import Aside from '../../components/Aside'
import Main from '../../components/Main'


export default function index() {
  return (
    <div>
      <Head></Head>
      <div className={styles.center}>
        <Aside></Aside>
        <Main></Main>
      </div>
    </div>
  );
}
