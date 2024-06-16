import styles from "./styles.module.css"
import { useEffect, useState } from "react"
import { Place } from "../place/index"
import { TicketInf } from "../ticket_inf"

export const Hall = ({ hall, date_time }) => {
    const [isLoad, setIsLoad] = useState(false)
    useEffect(() =>{
        if((hall != undefined) && (date_time != undefined))
            setIsLoad(true)
        setPlaces([])
        setSum(0)
    }, [hall, date_time])
    
    const [places, setPlaces] = useState([])
    const [sum, setSum] = useState(0)

    const add_deletePlaces = (isCheck, row, num, price) => {
        setPlaces((prevPlaces) => {
            let updatedPlaces = [...prevPlaces]
            if (isCheck) {
                // Проверка, есть ли уже элемент с таким `row`
                let existingPlace = updatedPlaces.find(
                    (place) => place.row === row,
                )
                if (existingPlace) {
                    // Если есть, добавляем номер места в массив `num`, если его еще нет
                    if (!existingPlace.num.includes(num)) {
                        existingPlace.num.push(num)
                        existingPlace.num.sort((a, b) => a - b) // Сортировка для удобства
                    }
                } else {
                    // Если нет, добавляем новый объект с `row` и `num`
                    updatedPlaces.push({ row: row, num: [num] })
                }
                setSum(sum + price)
            } else {
                // Найти объект с совпадающими `row` и `num`
                let existingPlace = updatedPlaces.find(
                    (place) => place.row === row,
                )
                if (existingPlace) {
                    // Удаление номера места из массива `num`
                    existingPlace.num = existingPlace.num.filter(
                        (n) => n !== num,
                    )
                    // Если массив `num` пуст, удаляем весь объект
                    if (existingPlace.num.length === 0) {
                        updatedPlaces = updatedPlaces.filter(
                            (place) => place.row !== row,
                        )
                    }
                }
                setSum(sum - price)
            }
            // Сортировка массива по значению `row`
            updatedPlaces.sort((a, b) => a.row - b.row)
            return updatedPlaces
        })
    }

    return (<>
        {isLoad && <>
            <h2 className={styles.title}>Выбор места</h2>
            <div className={styles.choice_place}>
                <div className={styles.hall}>
                    <span className={styles.screen_title}>Экран</span>
                    <div className={styles.screen} />
                    <span>Ряд</span>
                    {hall.places.map((row, i) => (
                        <div key={i} className={styles.row}>
                            <span className={styles.row_name}>{i + 1}</span>
                            {row.map((place, j) => {
                                let dis = false
                                if (place.type === "BLOCKED") {
                                    dis = true
                                }
                                return (
                                    <Place
                                        row={i + 1}
                                        number={j + 1}
                                        disabled={dis}
                                        onClick={(e) => add_deletePlaces(e.target.checked, i + 1, j + 1, place.price,)}
                                    />
                                )
                            })}
                        </div>
                    ))}
                </div>
                <TicketInf
                    hall={hall.name}
                    date_time={date_time}
                    places={places}
                    sum={sum}
                />
            </div>
        </>}
    </>)
    
}
