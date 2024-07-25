import styles from "./FormikField.module.scss";
import { ErrorMessage, Field } from "formik";

export const FormikField = ({ name, type, label, placeholder }) => (
    <Field name={name}>
        {(formikField) => 
            <div className={styles.container}>
                <label className={styles.label} htmlFor={name}>
                    {label}
                </label>
                <input
                    className={styles.input}
                    type={type}
                    id={name}
                    placeholder={placeholder}
                    {...formikField.field}
                    defaultChecked={formikField.field.value}
                />
                <ErrorMessage name={name}>
                    {(errorMessage) => 
                        <span className={styles.error}>{errorMessage}</span>
                    }
                </ErrorMessage>
            </div>
        }
    </Field>
);