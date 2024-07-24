import styles from "./Button.module.scss";

export const Button = ({ type, onClick, children }) => (
    <button className={styles[type]} onClick={onClick}>
        {children}
    </button>
);
