import styles from "./styles.module.css"
import { useState, useEffect } from "react"
import { request } from "../../api/request"

export function Hall({halls}) {

  return (
    <div className={styles.hall}>
        <div>{halls.map((seance) => {
            return(<div>
                {seance.time}
            </div>)
        })}</div>
    </div>
  )
}
