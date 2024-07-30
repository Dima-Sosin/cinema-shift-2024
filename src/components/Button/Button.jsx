import styles from "./Button.module.scss";

export const Button = ({ type, view, onClick, children }) => (
    <button type={type} className={styles[view]} onClick={onClick}>
        {children}
    </button>
);
