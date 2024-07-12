import styles from "./Hall.module.css";
import { useState } from "react";
import { Place } from "../../../components/Place/Place";
import { TicketInf } from "../../../components/TicketInf/TicketInf";

export const Hall = ({ date, seance }) => {
    const [places, setPlaces] = useState([]);
    const [sum, setSum] = useState(0);

    const addDeletePlaces = (isCheck, row, num, price) => {
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
    };

    return (
        <>
            <h2 className={styles.title}>Выбор места</h2>
            <div className={styles.choice_place}>
                <div className={styles.hall}>
                    <span className={styles.screen_title}>Экран</span>
                    <div className={styles.screen} />
                    <span className={styles.row_title}>Ряд</span>
                    <ul>
                        {seance.hall.places.map((row, i) => (
                            <li className={styles.row} key={i}>
                                <span className={styles.row_name}>{i + 1}</span>
                                <ul>
                                    {row.map((place, j) => (
                                        <Place
                                            code={j}
                                            row={i + 1}
                                            number={j + 1}
                                            type={place.type}
                                            onClick={(event) =>
                                                addDeletePlaces(
                                                    event.target.checked,
                                                    i + 1,
                                                    j + 1,
                                                    place.price
                                                )
                                            }
                                        />
                                    ))}
                                </ul>
                            </li>
                        ))}
                    </ul>
                </div>
                <TicketInf date={date} seance={seance} places={places} sum={sum} />
            </div>
        </>
    );
};
