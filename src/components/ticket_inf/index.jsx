import styles from "./styles.module.css"
import { Button } from "../button"

export const TicketInf = ({hall, date_time, places, sum }) => {
    console.log(places)
    let hall_rus = "Красный"
    if(hall === "Green")
        hall_rus="Зеленый"
    if(hall === "Blue")
        hall_rus="Синий"
    return(
        <div className={styles.ticket_inf}>
            <div className={styles.block}>
                <span className={styles.title}>Зал</span>
                <div className={styles.inf}>{hall_rus}</div>
            </div>
            <div className={styles.block}>
                <span className={styles.title}>Дата и время</span>
                <div className={styles.inf}>{date_time.date}, {date_time.time}</div>
            </div>
            <div className={styles.block}>
                <span className={styles.title}>Места</span>
                <div className={styles.inf}>
                    {places?.map((el) => (
                        <div>
                            <span>{el.row} ряд - </span>
                            <span>
                                {el.num?.map((place) => (
                                    <span className={styles.elem}>{place}</span>
                                ))}
                            </span><br/>
                        </div>
                    ))}
                </div> 
            </div>
            <div className={styles.block}>
                <div className={styles.price}>Сумма: {sum} ₽</div>
            </div>
            <Button>Купить</Button>
        </div>
    )
}