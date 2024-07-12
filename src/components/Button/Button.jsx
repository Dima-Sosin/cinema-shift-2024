import styles from "./Button.module.css";

export const Button = ({ type, onClick, children }) => (
    <button 
        className={`button ${styles[type]}`} 
        onClick={onClick}
    >
        {children}
    </button>
);
