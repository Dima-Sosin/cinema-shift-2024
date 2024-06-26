import styles from "./styles.module.css"
import { useState, useEffect } from "react"
import { request } from "../../api/request"
import { Seances } from "./seances"

export function Schedule({ filmId }) {
    const [filmS, setFilmSchedule] = useState([])
    const [seances, setSeances] = useState([])
    const [date, setDate] = useState()
    useEffect(() => {
        request
            .fetch("/cinema/film/" + filmId + "/schedule")
            .then((response) => response.json())
            .then((data) => {
                setFilmSchedule(data)
                setSeances(data.schedules[0].seances)
            })
    }, [])

    return (
        filmS.success == true && (
            <>
                <h2 className={styles.title}>Расписание</h2>
                <div className={styles.dates}>
                    {filmS.schedules.map((dat, i) => (
                        <div key={i} className={styles.date}>
                            <input
                                type="radio"
                                id={dat.date}
                                name="date"
                                onClick={() => {
                                    setSeances(dat.seances),
                                    setDate(dat.date)
                                }}
                            />
                            <label htmlFor={dat.date}>
                                {dat.date}
                            </label>
                        </div>
                    ))}
                </div>
                <Seances seances={seances} date={date}/>
            </>
        )
    )
}
