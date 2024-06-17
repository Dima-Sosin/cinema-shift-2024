import styles from "./styles.module.css"

export const Place = ({ row, number, disabled, checked, onClick }) => (
    <div className={styles.place}>
        <input
            type="checkbox"
            id={String(row) + String(number)}
            disabled={disabled}
            onClick={onClick}
        />
        <label for={String(row) + String(number)}>{number}</label>
    </div>
)
