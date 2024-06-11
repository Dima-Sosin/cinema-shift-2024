import styles from "./styles.module.css"

export const Input = ({ text, type, id, name, placeholder, onClick }) => {
    
    return (
        <div className={styles.container}>
            <label 
                className={styles.label}
                for={id}
            >
                {text}
            </label>
            <input 
                className={styles.input}
                type={type}
                id={id}
                name={name}
                placeholder={placeholder}
                onClick={onClick}
            />
        </div>
    )
}