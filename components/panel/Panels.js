import styles from "./Panels.module.css";

export default function Panels() {
  return (
    <div className={styles.panels}>
      <div className={styles.panelOne}></div>
      <div className={styles.panelTwo}></div>
      <div className={styles.panelThree}></div>
    </div>
  );
}
