import { PageLayout } from "@components/PageLayout/PageLayout";
import { useLoaderData } from "react-router-dom";
import { Button } from "@components/Button/Button";
import { FormikField } from "@components/FormikField/FormikField";
import { Form, Formik } from "formik";
import * as yup from "yup";

export const ProfilePage = () => {
    const data = useLoaderData();
    const initialValues = {
        lastname: data.user?.lastname,
        firstname: data.user?.firstname,
        middlename: data.user?.middlename,
        phone: data.user?.phone,
        email: data.user?.email,
        city: data.user?.city
    };

    const onSubmit = values => {
        console.log(values);
        setPage("debitCard");
    };

    const validationSchema = yup.object({
        lastname: yup
            .string()
            .max(100, "Слишком много символов!")
            .matches(/^[A-ZА-Я-]+$/i, "Фамилия должна содержать только буквы!"),
        firstname: yup
            .string()
            .max(100, "Слишком много символов!")
            .matches(/^[A-ZА-Я-]+$/i, "Имя должно содержать только буквы!"),
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
            {data.success && (
                <Formik
                    initialValues={initialValues}
                    onSubmit={onSubmit}
                    validationSchema={validationSchema}
                >
                    {formik => (
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
                                readOnly={true}
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
                            <Button type="primary">Продолжить</Button>
                        </Form>
                    )}
                </Formik>
            )}
        </PageLayout>
    );
};
