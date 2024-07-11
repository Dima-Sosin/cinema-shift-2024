import styles from "./styles.module.css"
import { useState } from "react"
import { Hall } from "../hall/index"

export const Seances = ({ seances, date }) => {
    const [hall, setHall] = useState()
    const [time, setTime] = useState()
    return (
        <div className={styles.seances}>
            <span className={styles.subtitle}>Красный зал</span>
            <div className={styles.times}>
                {seances.map((seance, i) => {
                    if (seance.hall.name === "Red")
                        return (
                            <div className={styles.time} key={i}>
                                <input
                                    type="radio"
                                    id={seance.hall.name + String(seance.time)}
                                    name="time"
                                    onClick={() => {setHall(seance.hall), setTime(seance.time)}}
                                />
                                <label
                                    htmlFor={seance.hall.name + String(seance.time)}
                                >
                                    {seance.time}
                                </label>
                            </div>
                        )
                })}
            </div>

            <span className={styles.subtitle}>Зеленый зал</span>
            <div className={styles.times}>
                {seances.map((seance, i) => {
                    if (seance.hall.name === "Green")
                        return (
                            <div className={styles.time} key={i}>
                                <input
                                    type="radio"
                                    id={seance.hall.name + String(seance.time)}
                                    name="time"
                                    onClick={() => {setHall(seance.hall), setTime(seance.time)}}
                                />
                                <label
                                    htmlFor={seance.hall.name + String(seance.time)}
                                >
                                    {seance.time}
                                </label>
                            </div>
                        )
                })}
            </div>

            <span className={styles.subtitle}>Синий зал</span>
            <div className={styles.times}>
                {seances.map((seance, i) => {
                    if (seance.hall.name === "Blue")
                        return (
                            <div className={styles.time} key={i}>
                                <input
                                    type="radio"
                                    id={seance.hall.name + String(seance.time)}
                                    name="time"
                                    onClick={() => {setHall(seance.hall), setTime(seance.time)}}
                                />
                                <label
                                    htmlFor={seance.hall.name + String(seance.time)}
                                >
                                    {seance.time}
                                </label>
                            </div>
                        )
                })}
            </div>
            <Hall hall={hall} date_time={{date:date, time:time}}></Hall>
        </div>
    )
}
