import styles from "./ProfilePage.module.scss";

import { useState } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import { Form, Formik } from "formik";
import * as yup from "yup";

import { api } from "@api";
import { Button } from "@components/Button/Button";
import { FormikField } from "@components/FormikField/FormikField";
import { LogOn } from "@components/LogOn/LogOn";
import { LogOut } from "@components/LogOut/LogOut";
import { PageLayout } from "@components/PageLayout/PageLayout";

export function ProfilePage() {
    const data = useLoaderData();
    const nav = useNavigate();

    const [isModal, setIsModal] = useState(false);
    const [isAuth, setIsAuth] = useState(!!localStorage.getItem("token"));

    const Modal = {
        true: (
            <LogOut onClose={() => setIsModal(false)} setIsAuth={setIsAuth} />
        ),
        false: <LogOn onClose={() => setIsModal(false)} setIsAuth={setIsAuth} />
    };

    const initialValues = {
        lastname: data?.user?.lastname,
        firstname: data?.user?.firstname,
        middlename: data?.user?.middlename,
        phone: data?.user?.phone,
        email: data?.user?.email,
        city: data?.user?.city
    };

    const onSubmit = values => {
        const updateProfile = {
            profile: {
                firstname: values?.firstname,
                middlename: values?.middlename,
                lastname: values?.lastname,
                email: values?.email,
                city: values?.city
            },
            phone: values?.phone
        };
        api.patch("/users/profile", updateProfile).then(response => response);
        nav("/afisha");
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
        <PageLayout>
            <h1>Профиль</h1>
            {data?.success && (
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
                                readOnly
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
                                Обновить данные
                            </Button>
                            <br />
                        </Form>
                    )}
                </Formik>
            )}
            <Button
                className={styles.button}
                view="default"
                onClick={() => setIsModal(true)}
            >
                {isAuth ? "Выйти из аккаунта" : "Войти в аккаунт"}
            </Button>
            {isModal && Modal[isAuth]}
        </PageLayout>
    );
}
