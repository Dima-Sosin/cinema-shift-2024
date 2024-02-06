import styles from "./styles.module.css"
import { useState, useEffect } from "react"
import { request } from "../../api/request"

export function Schedule({ num }) {
    const [filmS, setFilmSchedule] = useState([])

    useEffect(() => {
        request
          .fetch("/cinema/film/" + num + "/schedule")
          .then((response) => response.json())
          .then((data) => setFilmSchedule(data))
      }, [])

  return (
    filmS.success == true && (
        <div className={styles.schedule}>
            <h2 className={styles.title}>Расписание</h2>
            {filmS.schedule.map((date) => {
                
            })}
            {console.log(filmS.schedules)}
        </div>
    )
  )
}
