import styles from "./VerIcon.module.css";

export const VerIcon = () => {
  return (
    <button className={styles.buttonVer}>
      <span className={`material-symbols-outlined ${styles.customIcon}`}>
        visibility
      </span>
    </button>
  );
};