import styles from "./TicketInf.module.scss";
import { Link, useParams } from "react-router-dom";
import { Translation } from "@translation";
import { Button } from "@components/Button/Button";
import { userData } from "@store";

export const TicketInf = ({ date, seance, places, sum }) => {
    const { filmId } = useParams();

    const addFilm = () => {
        userData.addFilmId(filmId);
        userData.addSeance(date, seance.time);
        places?.map(row => {
            row.num.map(place => {
                userData.addTicket(row.row, place);
            });
        });
    };

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
            <Link to="/order">
                <Button view="primary" onClick={() => addFilm()}>
                    Купить
                </Button>
            </Link>
        </div>
    );
};
