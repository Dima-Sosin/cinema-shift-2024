import styles from "./Place.module.scss";

export const Place = ({ id, number, type, onClick }) => (
    <div className={styles.place}>
        <input
            type="checkbox"
            id={id}
            disabled={type === "BLOCKED"}
            onClick={onClick}
            defaultChecked={false}
        />
        <label htmlFor={id}>{number}</label>
    </div>
);
