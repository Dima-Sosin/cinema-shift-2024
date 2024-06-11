import styles from "./styles.module.css"
import { useState, useEffect } from "react"
import { request } from "../../api/request"
import { Hall } from "./hall"

export function Schedule({ filmId }) {
  const [filmS, setFilmSchedule] = useState([])
  const [halls, setHalls] = useState([])

  useEffect(() => {
    request
      .fetch("/cinema/film/" + filmId + "/schedule")
      .then((response) => response.json())
      .then((data) => setFilmSchedule(data))
  }, [])

  return (
    filmS.success == true && (
      <div className={styles.schedule}>
        {/* {console.log(filmS.schedules)} */}
        <h2 className={styles.title}>Расписание</h2>
        <div className={styles.dates}>
          {filmS.schedules.map((dat) => {
            return(
              <button className={styles.date} key={dat.date} onClick={() => {setHalls(dat.seances)}}>
                {dat.date}
              </button>)
          })}
        </div>
        <Hall halls={halls}/>
      </div>
    )
  )
}
