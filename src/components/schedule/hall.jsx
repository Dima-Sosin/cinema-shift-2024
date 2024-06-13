import styles from "./styles.module.css"
import { Place } from "../place/index"

export const Hall = ({hall}) => {
    return (
    <div className={styles.hall}>
        <h2 className={styles.title}>Выбор места</h2>
        <span className={styles.screen_title}>Экран</span>
        <div className={styles.screen} />
        <span>Ряд</span>
        {hall.places.map((row, i) => (
            <div key={i} className={styles.row}>
                <span className={styles.row_name}>{i+1}</span>
                {row.map((place, j) => {
                    let dis = false;
                    if(place.type === "BLOCKED"){
                        dis = true;
                    }
                    return <Place number={j+1} disabled={dis}/>
                })}
            </div>
        ))}
    </div>)
}