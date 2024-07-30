import styles from "./Place.module.scss";

export const Place = ({ id, number, type, onClick }) => (
    <div className={styles.place}>
        <input
            type="checkbox"
            id={id}
            disabled={type === "BLOCKED"}
            onClick={onClick}
        />
        <label htmlFor={id}>{number}</label>
    </div>
);
