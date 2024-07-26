import styles from "./LogOn.module.scss";
import { useEffect, useState } from "react";
import { api } from "@api";
import { Button } from "../Button/Button.jsx";
import { Modal } from "../Modal/Modal.jsx";
import { FormikField } from "@components/FormikField/FormikField";
import { Form, Formik } from "formik";
import * as yup from "yup";

export const ModalCode = ({ onClose, setIsAuth, phone }) => {
    const [counter, setCounter] = useState(120);

    useEffect(() => {
        if (counter > 0) {
            setTimeout(function () {
                setCounter(counter - 1);
            }, 1000);
        }
    }, [counter]);

    const initialValues = {
        phone: phone,
        code: ""
    };
    const validationSchema = yup.object({
        code: yup.string().matches(/^[0-9]{6}$/, "Код должен содержать 6 цифр!")
    });

    const onSubmit = values => {
        api.post("/users/signin", values).then(response => {
            localStorage.setItem("token", response.data.token);
            api.defaults.headers.common["Authorization"] =
                `Bearer ${response.data.token}`;
            setIsAuth(!!localStorage.getItem("token"));
        });
        onClose();
    };

    return (
        <>
            <Modal onClose={onClose}>
                <h2>Авторизация</h2>
                <p className={styles.text}>
                    Введите проверочный код для входа в личный кабинет
                </p>
                <Formik
                    initialValues={initialValues}
                    onSubmit={onSubmit}
                    validationSchema={validationSchema}
                >
                    {formik => (
                        <Form className="form">
                            <FormikField
                                type="text"
                                name="phone"
                                placeholder="Телефон"
                                mask="+7 999 999 99 99"
                            />
                            <FormikField
                                type="string"
                                name="code"
                                placeholder="Проверочный код"
                            />
                            <Button type="primary">Войти</Button>
                        </Form>
                    )}
                </Formik>
                {counter !== 0 && (
                    <p className={styles.timer}>
                        Запросить код повторно можно через {counter} секунд
                    </p>
                )}
                {counter === 0 && (
                    <Button
                        type="link"
                        onClick={() => {
                            api.post("/auth/otp", { phone: phone }).then(
                                result => result
                            );
                        }}
                    >
                        Запросить код еще раз
                    </Button>
                )}
            </Modal>
        </>
    );
};
