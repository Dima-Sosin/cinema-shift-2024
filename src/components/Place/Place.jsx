import styles from "./Place.module.scss";

export function Place({ id, number, type, onClick }) {
    return (
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
}
