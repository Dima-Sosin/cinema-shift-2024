import styles from "./Schedule.module.scss";
import { useState } from "react";
import { Times } from "@components/Times/Times";
import { ChooseTickets } from "../ChooseTickets/ChooseTickets";

export const Schedule = ({ schedules }) => {
    const [schedule, setSchedule] = useState(schedules[0]);
    const [seance, setSeance] = useState(schedules[0].seances[0]);

    return (
        <>
            <section className={styles.schedule}>
                <h2>Расписание</h2>
                <ul className={styles.dates}>
                    {schedules.map((schedule, i) => (
                        <li className={styles.date} key={i}>
                            <input
                                type="radio"
                                id={schedule.date}
                                name="date"
                                onClick={() => {
                                    setSchedule(schedule);
                                }}
                            />
                            <label htmlFor={schedule.date}>
                                {schedule.date}
                            </label>
                        </li>
                    ))}
                </ul>

                <div className={styles.seances}>
                    <span className={styles.subtitle}>Красный зал</span>
                    <Times
                        seances={schedule.seances}
                        hall={"Red"}
                        onClick={seance => {
                            setSeance(seance);
                        }}
                    />
                </div>
                <div className={styles.seances}>
                    <span className={styles.subtitle}>Зеленый зал</span>
                    <Times
                        seances={schedule.seances}
                        hall={"Green"}
                        onClick={seance => {
                            setSeance(seance);
                        }}
                    />
                </div>
                <div className={styles.seances}>
                    <span className={styles.subtitle}>Синий зал</span>
                    <Times
                        seances={schedule.seances}
                        hall={"Blue"}
                        onClick={seance => {
                            setSeance(seance);
                        }}
                    />
                </div>
            </section>
            <ChooseTickets date={schedule.date} seance={seance} />
        </>
    );
};
