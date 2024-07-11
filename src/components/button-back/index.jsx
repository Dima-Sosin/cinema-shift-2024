import styles from "./styles.module.css"
import { useNavigate } from "react-router-dom"

export const BtnBack = () => {
    const nav = useNavigate()
    return(
        <a className={styles.btnBack} onClick={() => nav(-1)}>
            
        </a>
    )
}