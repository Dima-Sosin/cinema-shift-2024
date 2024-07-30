import styles from "./ModalSuccess.module.scss";
import { Link } from "react-router-dom";
import { SuccessIcon } from "@assets/SuccessIcon";
import { Modal } from "@components/Modal/Modal";
import { userData } from "../../../store/createData";

export const ModalSuccess = ({ response, onClose }) => (
    <Modal onClose={() => onClose()}>
        <div className={styles.modal}>
            <SuccessIcon />
            <h2 className={styles.modal_title}>Оплата прошла успешно!</h2>

            <div className={styles.inf}>
                <div className={styles.section}>
                    <p className={styles.section_title}>Номер билета</p>
                    <p>{response.order.orderNumber}</p>
                </div>

                <div className={styles.section}>
                    <p className={styles.section_title}>Фильм</p>
                    <p>{userData.filmName}</p>
                </div>

                <div className={styles.section}>
                    <p className={styles.section_title}>Дата и время</p>
                    <p>
                        {userData.seance.date} {userData.seance.time}
                    </p>
                </div>

                <div className={styles.section}>
                    <p className={styles.section_title}>Места</p>
                    {userData.tickets.map(place => (
                        <p>
                            Ряд: {place.row}, Место: {place.column}
                        </p>
                    ))}
                </div>

                <span className={styles.section_title}>
                    Вся информация была продублирована в SMS
                </span>
            </div>

            <Link to="/tickets" onClick={onClose}>
                Перейти в личный кабинет
            </Link>
        </div>
    </Modal>
);
