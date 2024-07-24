import styles from "./Place.module.scss";

export const Place = ({ code, row, number, type, onClick }) => (
    <li className={styles.place} key={code}>
        <input
            type="checkbox"
            id={String(row) + String(number)}
            disabled={type === "BLOCKED"}
            onClick={onClick}
        />
        <label htmlFor={String(row) + String(number)}>{number}</label>
    </li>
);
