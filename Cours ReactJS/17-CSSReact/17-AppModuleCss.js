import styles from './monStyle.module.css';
import React from "react";

class App extends React.Component {
    render(){
        return (
          <>
            <h1 className={styles.pstyle}>Bonjour</h1>
            <p className={styles.dstyle}>Message</p>
          </>
        );
    }
}