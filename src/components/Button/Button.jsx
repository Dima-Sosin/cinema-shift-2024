import styles from "./Button.module.scss";

export function Button({ className, type, view, onClick, children }) {
    return (
        <button
            type={type}
            className={`${className} ${styles[view]}`}
            onClick={onClick}
        >
            {children}
        </button>
    );
}
