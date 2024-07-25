import styles from "./ModalSuccess.module.css"
import { Link } from "react-router-dom"
import { SuccessIcon } from "@assets/SuccessIcon"
import { Modal } from "@components/Modal/Modal"
import { Translation } from "@translation"

export const ModalSuccess = ({ pizza, onClose }) => {

    return (
        <Modal onClose={onClose}>
            <div className={styles.modal}>
                <SuccessIcon />
                <h2>Оплата прошла успешно!</h2>

                <div className={styles.section}>
                    <p className={styles.section_title}>Номер билета</p>
                    <p>
                        <ul>
                            {pizza.pizzas.map((el, i) => (
                                <li key={i}>
                                    {calcCost(el.size.price)}
                                    {calcCost(el.doughs.price)}
                                    <span>{el.name}, </span>
                                    <span>{Translation[el.size.name]}, </span>
                                    <span>{Translation[el.doughs.name]} </span>
                                    {"  "}
                                    <ul>
                                        {el.toppings?.map((topping, j) => (
                                            <li key={j}>
                                                {calcCost(topping.cost)}
                                                <span>+ {Translation[topping.name]}</span>
                                                <br />
                                            </li>
                                        ))}
                                    </ul>
                                </li>
                            ))}
                        </ul>
                    </p>
                </div>

                <div className={styles.section}>
                    <p className={styles.section_title}>Адрес доставки</p>
                    <p>
                        Россия, г Томск, {pizza.receiverAddress.street},{" "}
                        {pizza.receiverAddress.house}, {pizza.receiverAddress.apartment}
                    </p>
                </div>

                <div className={styles.section}>
                    <p className={styles.section_title}>Сумма заказа</p>
                    <p>{cost} ₽</p>
                </div>

                <span className={styles.section_title}>
                    Вся информация была продублирована в SMS
                </span>

                <Link to="/catalog" onClick={onClose}>
                    Перейти в главное меню
                </Link>
            </div>
        </Modal>
    )
}