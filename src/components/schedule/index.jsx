import styles from "./styles.module.css"
import { useState, useEffect } from "react"
import { request } from "../../api/request"
import { Seances } from "./seances"

export function Schedule({ filmId }) {
    const [check, setCheck] = useState(false)
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
                setDate(data.schedules[0].date)
            })
    }, [])

    return (
        filmS.success == true && (
            <div className={styles.schedule}>
                {console.log(filmS.schedules)}
                <h2 className={styles.title}>Расписание</h2>
                <div className={styles.dates}>
                    {filmS.schedules.map((dat) => {
                        return (
                            <div>
                                <input
                                    type="radio"
                                    id={dat.date}
                                    name="date"
                                    className={styles.input}
                                    onClick={() => {
                                        setSeances(dat.seances),
                                        setDate(dat.date)
                                    }}
                                />
                                <label
                                    for={dat.date}
                                    className={styles.date_label}
                                >
                                    {dat.date}
                                </label>
                            </div>
                        )
                    })}
                </div>
                {/* {document.getElementById(filmS.schedules[0].date)[0].checked = true} */}
                <Seances seances={seances} date={date}/>
            </div>
        )
    )
}
