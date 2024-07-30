import styles from "./ChooseTickets.module.scss";
import { useState } from "react";
import { Place } from "@components/Place/Place";
import { TicketInf } from "../TicketInf/TicketInf";

export const ChooseTickets = ({ date, seance }) => {
    const [places, setPlaces] = useState([]);
    const [sum, setSum] = useState(0);
    let id = 0;

    const addDeletePlaces = (isCheck, row, num, price) => {
        setPlaces(prevPlaces => {
            let updatedPlaces = [...prevPlaces];
            if (isCheck) {
                // Проверка, есть ли уже элемент с таким `row`
                let existingPlace = updatedPlaces.find(
                    place => place.row === row
                );
                if (existingPlace) {
                    // Если есть, добавляем номер места в массив `num`, если его еще нет
                    if (!existingPlace.num.includes(num)) {
                        existingPlace.num.push(num);
                        existingPlace.num.sort((a, b) => a - b); // Сортировка для удобства
                    }
                } else {
                    // Если нет, добавляем новый объект с `row` и `num`
                    updatedPlaces.push({ row: row, num: [num] });
                }
                setSum(sum + price);
            } else {
                // Найти объект с совпадающими `row` и `num`
                let existingPlace = updatedPlaces.find(
                    place => place.row === row
                );
                if (existingPlace) {
                    // Удаление номера места из массива `num`
                    existingPlace.num = existingPlace.num.filter(
                        n => n !== num
                    );
                    // Если массив `num` пуст, удаляем весь объект
                    if (existingPlace.num.length === 0) {
                        updatedPlaces = updatedPlaces.filter(
                            place => place.row !== row
                        );
                    }
                }
                setSum(sum - price);
            }
            // Сортировка массива по значению `row`
            updatedPlaces.sort((a, b) => a.row - b.row);
            return updatedPlaces;
        });
    };

    return (
        <section className={styles.choose_tickets}>
            <h2>Выбор места</h2>
            <div className={styles.choice_place}>
                <div className={styles.hall_plan}>
                    <ul className={styles.row_numbers}>
                        <p className={styles.row_title}>Ряд</p>
                        {seance.hall.places.map((_, i) => (
                            <li key={i}>
                                <p className={styles.row_name}>{i + 1}</p>
                            </li>
                        ))}
                    </ul>

                    <div className={styles.hall}>
                        <p className={styles.screen_title}>Экран</p>
                        <div className={styles.screen} />

                        <ul className={styles.rows}>
                            {seance.hall.places.map((row, i) => (
                                <li className={styles.row} key={i}>
                                    <ul className={styles.places}>
                                        {row.map((place, j) => (
                                            <li key={j}>
                                                <Place
                                                    id={id++}
                                                    number={j + 1}
                                                    type={place.type}
                                                    onClick={event =>
                                                        addDeletePlaces(
                                                            event.target
                                                                .checked,
                                                            i + 1,
                                                            j + 1,
                                                            place.price
                                                        )
                                                    }
                                                />
                                            </li>
                                        ))}
                                    </ul>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                <TicketInf
                    date={date}
                    seance={seance}
                    places={places}
                    sum={sum}
                />
            </div>
        </section>
    );
};
