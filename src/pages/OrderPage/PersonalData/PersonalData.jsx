import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { Form, Formik } from "formik";
import * as yup from "yup";

import { Button } from "@components/Button/Button";
import { FormikField } from "@components/FormikField/FormikField";
import { userData } from "@store";

import { PageContext } from "../OrderPage";

export function PersonalData() {
    const { setPage } = useContext(PageContext);
    const data = useLoaderData();

    const initialValues = {
        lastname: data?.user?.lastname,
        firstname: data?.user?.firstname,
        middlename: data?.user?.middlename,
        phone: data?.user?.phone,
        email: data?.user?.email,
        city: data?.user?.city
    };

    const onSubmit = values => {
        userData.addPerson(values);
        setPage("debitCard");
    };

    const validationSchema = yup.object({
        lastname: yup
            .string()
            .max(100, "Слишком много символов!")
            .matches(/^[A-ZА-Я-]+$/i, "Фамилия должна содержать только буквы!")
            .required("Обязательное поле!"),
        firstname: yup
            .string()
            .max(100, "Слишком много символов!")
            .matches(/^[A-ZА-Я-]+$/i, "Имя должно содержать только буквы!")
            .required("Обязательное поле!"),
        middlename: yup
            .string()
            .max(100, "Слишком много символов!")
            .matches(
                /^[A-ZА-Я-]+$/i,
                "Отчество должно содержать только буквы!"
            ),
        phone: yup.string().required("Обязательное поле!"),
        email: yup
            .string()
            .max(100, "Слишком много символов!")
            .matches(
                /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{1,64}$/i,
                "Неправильный email!"
            ),
        city: yup
            .string()
            .max(100, "Слишком много символов!")
            .matches(/^[A-ZА-Я-]+$/i, "Неправильный город!")
    });

    return (
        <>
            <h1>Введите ваши данные</h1>
            <Formik
                initialValues={initialValues}
                onSubmit={onSubmit}
                validationSchema={validationSchema}
            >
                {() => (
                    <Form className="form">
                        <FormikField
                            label="Фамилия*"
                            type="text"
                            name="lastname"
                            placeholder="Фамилия"
                        />
                        <FormikField
                            label="Имя*"
                            type="text"
                            name="firstname"
                            placeholder="Имя"
                        />
                        <FormikField
                            label="Отчество"
                            type="text"
                            name="middlename"
                            placeholder="Отчество"
                        />
                        <FormikField
                            label="Телефон*"
                            type="text"
                            name="phone"
                            placeholder="Телефон"
                            mask="+7 999 999 99 99"
                        />
                        <FormikField
                            label="Email"
                            type="text"
                            name="email"
                            placeholder="Email"
                        />
                        <FormikField
                            label="Город"
                            type="text"
                            name="city"
                            placeholder="Город"
                        />
                        <Button type="submit" view="primary">
                            Продолжить
                        </Button>
                    </Form>
                )}
            </Formik>
        </>
    );
}
