import styles from "./styles.module.css"
import { useState, useEffect } from "react"

export function Hall({halls}) {
  const [arr, setArr] = useState([])

  useEffect(() => {
    const arrHalls = () => {
      let arrH = []
      let i = 0;
      halls.map((seance) => {
        if(seance.hall.name !== arrH[0]){
          arrH.unshift(seance.hall.name)
        }
      })
      setArr(arrH)
    }
  }, [])

  return (
    <div className={styles.hall}>
      {arr.map((arrHall) => {
        return(<div><h2>{arrHall}</h2>
          <div>{halls.map((hall) => {
            if(hall.name == arrHall){
              return(<div>{hall.time}</div>)
            }
          })}</div>
        </div>)
      })}
    </div>
  )
}
