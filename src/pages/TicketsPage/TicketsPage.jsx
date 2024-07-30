import styles from "./TicketsPage.module.scss";
import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import { PageLayout } from "@components/PageLayout/PageLayout";
import { Button } from "@components/Button/Button";
import { Modal } from "@components/Modal/Modal";
import { LogOn } from "@components/LogOn/LogOn";
import { QuestionIcon } from "@assets/QuestionIcon";
import { api } from "@api";
import { Translation } from "../../translation/translation";

export const TicketsPage = () => {
    const data = useLoaderData();
    const [delOrder, setDelOrder] = useState("");
    const [isModal, setIsModal] = useState(false);
    const [isLog, setIsLog] = useState(false);

    const [isAuth, setIsAuth] = useState(!!localStorage.getItem("token"));

    const returnTicket = () => {
        api.put("/cinema/orders/cancel", { orderId: delOrder }).then(response =>
            window.location.reload()
        );
        setIsModal(false);
    };

    return (
        <PageLayout>
            <h1>Билеты</h1>
            {data?.success && (
                <ul className={styles.orders}>
                    {data.orders?.map(order => (
                        <li className={styles.order} key={order._id}>
                            <p className={styles.date_time}>
                                <span>{order.tickets[0].seance?.date}</span>
                                <span>{order.tickets[0].seance?.time}</span>
                            </p>

                            <div>
                                <p className={styles.film_name}>
                                    Стражи галактики 3 (16+)
                                </p>
                                {order.status === "PAYED" && (
                                    <ul>
                                        {order.tickets?.map(ticket => (
                                            <li
                                                className={styles.ticket}
                                                key={ticket._id}
                                            >
                                                <p>
                                                    Ряд: {ticket.row}, Место:{" "}
                                                    {ticket.column}
                                                </p>
                                            </li>
                                        ))}
                                    </ul>
                                )}
                            </div>

                            <p className={styles.ticket_inf}>
                                <span
                                    className={`${styles.status} ${styles[order.status]}`}
                                >
                                    {Translation[order.status]}
                                </span>
                                <span className={styles.ticket_number}>
                                    Код билета {order.orderNumber}
                                </span>
                            </p>
                            {order.status === "PAYED" && (
                                <Button
                                    view="default"
                                    onClick={() => {
                                        setIsModal(true);
                                        setDelOrder(order._id);
                                    }}
                                >
                                    Вернуть билет
                                </Button>
                            )}
                        </li>
                    ))}
                </ul>
            )}
            {!data && (
                <Button view="default" onClick={() => setIsLog(true)}>
                    Войти в аккаунт
                </Button>
            )}
            {isLog && (
                <LogOn onClose={() => setIsLog(false)} setIsAuth={setIsAuth} />
            )}
            {isModal && (
                <Modal onClose={() => setIsModal(false)}>
                    <QuestionIcon />
                    <h3 className={styles.modal_title}>Вернуть билет?</h3>
                    <div className={styles.modal_buttons}>
                        <Button view="default" onClick={() => returnTicket()}>
                            Вернуть
                        </Button>
                        <Button
                            view="primary"
                            onClick={() => setIsModal(false)}
                        >
                            Отменить
                        </Button>
                    </div>
                </Modal>
            )}
        </PageLayout>
    );
};
