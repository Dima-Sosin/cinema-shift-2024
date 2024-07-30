import styles from "./Place.module.scss";

export const Place = ({ row, number, type, onClick }) => (
    <div className={styles.place}>
        <input
            type="checkbox"
            id={String(row) + String(number)}
            disabled={type === "BLOCKED"}
            onClick={onClick}
        />
        <label htmlFor={String(row) + String(number)}>{number}</label>
    </div>
);
