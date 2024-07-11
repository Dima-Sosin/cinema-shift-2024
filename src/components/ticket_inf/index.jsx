import styles from "./styles.module.css"
import { Button } from "../Button/Button"
import { Translation } from "../../Translation"

export const TicketInf = ({hall, date_time, places, sum }) => {
    return(
        <div className={styles.ticket_inf}>
            <div className={styles.block}>
                <span className={styles.title}>Зал</span>
                <div className={styles.inf}>{Translation[hall]}</div>
            </div>
            <div className={styles.block}>
                <span className={styles.title}>Дата и время</span>
                <div className={styles.inf}>{date_time.date}, {date_time.time}</div>
            </div>
            <div className={styles.block}>
                <span className={styles.title}>Места</span>
                <div className={styles.inf}>
                    {places?.map((el, i) => (
                        <div key={i}>
                            <span>{el.row} ряд - </span>
                            <span>
                                {el.num?.map((place, j) => (
                                    <span className={styles.elem} key={j}>{place}</span>
                                ))}
                            </span><br/>
                        </div>
                    ))}
                </div> 
            </div>
            <div className={styles.block}>
                <div className={styles.price}>Сумма: {sum} ₽</div>
            </div>
            <Button type="primary">Купить</Button>
        </div>
    )
}