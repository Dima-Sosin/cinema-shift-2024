import styles from "./DebitCard.module.scss";
import { useState, useContext } from "react";
import { toJS } from "mobx";
import { Form, Formik } from "formik";
import * as yup from "yup";
import { PageContext } from "../OrderPage";
import { FormikField } from "@components/FormikField/FormikField";
import { Button } from "@components/Button/Button";
import { ModalSuccess } from "../ModalSuccess/ModalSuccess";
import { userData } from "@store";
import { api } from "@api";

export const DebitCard = () => {
    const { setPage } = useContext(PageContext);
    const [isModal, setIsModal] = useState(false);
    const [response, setResponse] = useState({});

    const initialValues = {
        pan: "",
        expireDate: "",
        cvv: ""
    };

    const onSubmit = values => {
        userData.addDebitCard(values);
        const body = {
            filmId: toJS(userData.filmId),
            person: toJS(userData.person),
            debitCard: toJS(userData.debitCard),
            seance: toJS(userData.seance),
            tickets: toJS(userData.tickets)
        };
        api.post("/cinema/payment", body).then(response => {
            setResponse(response.data);
            setIsModal(true);
        });
    };

    const validationSchema = yup.object({
        pan: yup.string().required("Обязательное поле!"),
        expireDate: yup
            .string()
            .matches(
                /^((0[1-9])|(1[0-2]))\/((2[4-9])|([3-9][0-9]))$/,
                "Неправильная дата!"
            )
            .required("Обязательное поле!"),
        cvv: yup.string().required("Обязательное поле!")
    });

    return (
        <>
            <h1>Введите данные карты для оплаты</h1>
            <Formik
                initialValues={initialValues}
                onSubmit={onSubmit}
                validationSchema={validationSchema}
            >
                {() => (
                    <Form className="form">
                        <div className={styles.block}>
                            <FormikField
                                label="Номер*"
                                type="text"
                                name="pan"
                                placeholder="0000 0000"
                                mask="9999 9999"
                            />
                            <div className={styles.lower}>
                                <FormikField
                                    label="Срок*"
                                    type="text"
                                    name="expireDate"
                                    placeholder="мм/гг"
                                    mask="99/99"
                                />
                                <FormikField
                                    label="CVV*"
                                    type="text"
                                    name="cvv"
                                    placeholder="000"
                                    mask="999"
                                />
                            </div>
                        </div>
                        <div className={styles.buttons}>
                            <Button
                                view="default"
                                onClick={() => setPage("personalData")}
                            >
                                Назад
                            </Button>
                            <Button type="submit" view="primary">
                                Оплатить
                            </Button>
                        </div>
                    </Form>
                )}
            </Formik>
            {isModal && (
                <ModalSuccess
                    response={response}
                    onClose={() => setIsModal(false)}
                />
            )}
        </>
    );
};
