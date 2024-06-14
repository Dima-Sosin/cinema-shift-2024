import styles from "./styles.module.css"
import { Place } from "../place/index"
import { TicketInf } from "../ticket_inf"

export const Hall = ({ hall, date_time }) => {
    console.log(date_time)
    return (<>
        <h2 className={styles.title}>Выбор места</h2>
        <div className={styles.choice_place}>
            <div className={styles.hall}>
                <span className={styles.screen_title}>Экран</span>
                <div className={styles.screen} />
                <span>Ряд</span>
                {hall.places.map((row, i) => (
                    <div key={i} className={styles.row}>
                    <span className={styles.row_name}>{i + 1}</span>
                    {row.map((place, j) => {
                        let dis = false
                        if (place.type === "BLOCKED") {
                        dis = true
                        }
                        return <Place row={i + 1} number={j + 1} disabled={dis} />
                    })}
                    </div>
                ))}
            </div>
            <TicketInf 
                hall={hall.name} 
                date_time={date_time} 
                places={[{row:1, num:[5,6]}, 
                        {row:4, num:[7,10]},
                        {row:5, num:[1,11]}]}
                sum={2800}
            />
        </div>
    </>)
}
