import styles from "./styles.module.css"
import { useState } from "react"
import { Hall } from "./hall"

export const Seances = ({seances}) => {
  const [hall, setHall] = useState(seances[0].hall)
  console.log(seances)
  return (
    <div className={styles.halls}>

      <span>Красный зал</span>
      <div className={styles.seances}>
        {seances.map((seance) => {
          if(seance.hall.name === "Red")
            return(
              <div className={styles.element}>
                <input
                  type="radio"
                  id={seance.time}
                  name="time"
                  className={styles.input}
                  onClick={() => setHall(seance.hall)}
                />
                <label for={seance.time} className={styles.time_label}>{seance.time}</label>
              </div>
            )
        })}
      </div>

      <span>Зеленый зал</span>
      <div className={styles.seances}>
        {seances.map((seance) => {
          if(seance.hall.name === "Green")
            return(
              <div className={styles.element}>
                <input
                  type="radio"
                  id={seance.time}
                  name="time"
                  className={styles.input}
                  onClick={() => setHall(seance.hall)}
                />
                <label for={seance.time} className={styles.time_label}>{seance.time}</label>
              </div>
            )
        })}
      </div>

      <span>Синий зал</span>
      <div className={styles.seances}>
        {seances.map((seance) => {
          if(seance.hall.name === "Blue")
            return(
              <div className={styles.element}>
                <input
                  type="radio"
                  id={seance.time}
                  name="time"
                  className={styles.input}
                  onClick={() => setHall(seance.hall)}
                />
                <label for={seance.time} className={styles.time_label}>{seance.time}</label>
              </div>
            )
        })}
      </div>
      <Hall hall={hall}></Hall>
    </div>
    
  )
}
