import styles from "./styles.module.css"

export const Input = ({ text, type, id, name, placeholder, defaultValue, onChange}) => {
    
    return (
        <div className={styles.container}>
            <label 
                className={styles.label}
                htmlFor={id}
            >
                {text}
            </label>
            <input 
                className={styles.input}
                type={type}
                id={id}
                name={name}
                placeholder={placeholder}
                defaultValue={defaultValue}
                onChange={onChange}
            />
        </div>
    )
}