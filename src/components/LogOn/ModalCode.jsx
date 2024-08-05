import styles from "./LogOn.module.scss";

import { useEffect, useState } from "react";
import { Form, Formik } from "formik";
import * as yup from "yup";

import { api } from "@api";
import { FormikField } from "@components/FormikField/FormikField";

import { Button } from "../Button/Button.jsx";
import { Modal } from "../Modal/Modal.jsx";

export function ModalCode({ onClose, setIsAuth, phone }) {
    const [counter, setCounter] = useState(120);

    useEffect(() => {
        if (counter > 0) {
            setTimeout(() => {
                setCounter(counter - 1);
            }, 1000);
        }
    }, [counter]);

    const initialValues = {
        phone,
        code: ""
    };
    const validationSchema = yup.object({
        code: yup.string().matches(/^[0-9]{6}$/, "Код должен содержать 6 цифр!")
    });

    const onSubmit = values => {
        api.post("/users/signin", values).then(response => {
            localStorage.setItem("token", response.data.token);
            api.defaults.headers.common.Authorization = `Bearer ${response.data.token}`;
            setIsAuth(!!localStorage.getItem("token"));
            window.location.reload();
        });
        onClose();
    };

    return (
        <Modal onClose={onClose}>
            <h3>Авторизация</h3>
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
                        <Button view="primary">Войти</Button>
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
                        api.post("/auth/otp", { phone }).then(result => result);
                    }}
                >
                    Запросить код еще раз
                </Button>
            )}
        </Modal>
    );
}
