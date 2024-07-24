import styles from "./TicketInf.module.scss";
import { Button } from "@components/Button/Button";
import { Translation } from "@translation";

export const TicketInf = ({ date, seance, places, sum }) => {
    return (
        <div className={styles.ticket_inf}>
            <div className={styles.block}>
                <span className={styles.title}>Зал</span>
                <div className={styles.inf}>
                    {Translation[seance.hall.name]}
                </div>
            </div>
            <div className={styles.block}>
                <span className={styles.title}>Дата и время</span>
                <div className={styles.inf}>
                    {date}, {seance.time}
                </div>
            </div>
            <div className={styles.block}>
                <span className={styles.title}>Места</span>
                <div className={styles.inf}>
                    {places?.map((row, i) => (
                        <div key={i}>
                            <span>{row.row} ряд - </span>
                            {row.num?.map((place, j) => (
                                <span className={styles.elem} key={j}>
                                    {place}
                                </span>
                            ))}
                            <br />
                        </div>
                    ))}
                </div>
            </div>
            <div className={styles.block}>
                <div className={styles.price}>Сумма: {sum} ₽</div>
            </div>
            <Button type="primary">Купить</Button>
        </div>
    );
};
