import styles from "./DebitCard.module.scss";
import { useState, useContext } from "react";
import { PageContext } from "../OrderPage";
import { FormikField } from "@components/FormikField/FormikField";
import { Button } from "@components/Button/Button";
import { Form, Formik } from "formik";
import * as yup from "yup";

export const DebitCard = () => {
    const { setPage } = useContext(PageContext);
    const [isModal, setIsModal] = useState(false);

    const initialValues = {
        pan: "",
        expireDate: "",
        cvv: ""
    };

    const onSubmit = values => {
        console.log(JSON.stringify(values, null, 4));
        setIsModal(true);
    };

    const validationSchema = yup.object({
        expireDate: yup
            .string()
            .matches(/^((0[1-9])|(1[0-2]))\/((2[4-9])|([3-9][0-9]))$/i, "Неправильная дата!")
    });

    return (
        <>
            <h1>Введите данные карты для оплаты</h1>
            <Formik
                initialValues={initialValues}
                onSubmit={onSubmit}
                validationSchema={validationSchema}
            >
                {formik => (
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
                                type="default"
                                onClick={() => setPage("personalData")}
                            >
                                Назад
                            </Button>
                            <Button type="primary">Оплатить</Button>
                        </div>
                    </Form>
                )}
            </Formik>
            {isModal && <ModalSuccess onClose={() => setIsModal(false)} />}
        </>
    );
};
