import styles from "./Schedule.module.css";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { api } from "../../../api/api";
import { Times } from "../../../components/Times/Times";
import { Hall } from "../Hall/Hall";

export const Schedule = () => {
    const { filmId } = useParams();

    const [scheduleResponse, setScheduleResponse] = useState({});
    const [schedule, setSchedule] = useState({});
    const [seance, setSeance] = useState({});

    useEffect(() => {
        api.get("/cinema/film/" + filmId + "/schedule").then((data) => {
            setScheduleResponse(data);
            setSchedule(data.schedules[0]);
            setSeance(data.schedules[0].seances[0]);
        });
    }, []);

    return (
        scheduleResponse.success && (
            <>
                <h2 className={styles.title}>Расписание</h2>
                <ul className={styles.dates}>
                    {scheduleResponse.schedules.map((schedule, i) => (
                        <li className={styles.date} key={i}>
                            <input
                                type="radio"
                                id={schedule.date}
                                name="date"
                                onClick={() => {
                                    setSchedule(schedule);
                                }}
                            />
                            <label htmlFor={schedule.date}>{schedule.date}</label>
                        </li>
                    ))}
                </ul>

                <div className={styles.seances}>
                    <span className={styles.subtitle}>Красный зал</span>
                    <Times
                        seances={schedule.seances}
                        hall={"Red"}
                        onClick={(seance) => {
                            setSeance(seance);
                        }}
                    />
                </div>
                <div className={styles.seances}>
                    <span className={styles.subtitle}>Зеленый зал</span>
                    <Times
                        seances={schedule.seances}
                        hall={"Green"}
                        onClick={(seance) => {
                            setSeance(seance);
                        }}
                    />
                </div>
                <div className={styles.seances}>
                    <span className={styles.subtitle}>Синий зал</span>
                    <Times
                        seances={schedule.seances}
                        hall={"Blue"}
                        onClick={(seance) => {
                            setSeance(seance);
                        }}
                    />
                </div>

                <Hall date={schedule.date} seance={seance} />
            </>
        )
    );
};
