import { useContext } from "react";
import { Form, Formik } from "formik";

import { api } from "@api";
import { FormikField } from "@components/FormikField/FormikField";
import styles from "./LogOn.module.scss";

import { Button } from "../Button/Button.jsx";
import { Modal } from "../Modal/Modal.jsx";

import { ModalContext } from "./LogOn.jsx";

export function ModalPhone({ onClose, setPhone }) {
    const { setModal } = useContext(ModalContext);

    const initialValues = {
        phone: ""
    };

    const onSubmit = values => {
        setPhone(values.phone);
        api.post("/auth/otp", values).then(response => response);
        setModal("code");
    };

    return (
        <Modal onClose={onClose}>
            <h3>Авторизация</h3>
            <p className={styles.text}>
                Введите номер телефона для входа в личный кабинет
            </p>
            <Formik initialValues={initialValues} onSubmit={onSubmit}>
                {formik => (
                    <Form className="form">
                        <FormikField
                            type="text"
                            name="phone"
                            placeholder="Телефон"
                            mask="+7 999 999 99 99"
                        />
                        <Button view="primary">Продолжить</Button>
                    </Form>
                )}
            </Formik>
        </Modal>
    );
}
