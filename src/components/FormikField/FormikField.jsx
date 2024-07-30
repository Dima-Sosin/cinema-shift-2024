import styles from "./FormikField.module.scss";
import { ErrorMessage, Field } from "formik";
import InputMask from "react-input-mask";

export const FormikField = ({
    name,
    type,
    label,
    placeholder,
    readOnly = false,
    mask
}) => (
    <Field name={name}>
        {formikField => (
            <div className={styles.container}>
                <label className={styles.label} htmlFor={name}>
                    {label}
                </label>
                <InputMask
                    mask={mask}
                    className={styles.input}
                    type={type}
                    id={name}
                    placeholder={placeholder}
                    readOnly={readOnly}
                    autoComplete="on"
                    {...formikField.field}
                />
                <ErrorMessage name={name}>
                    {errorMessage => (
                        <span className={styles.error}>{errorMessage}</span>
                    )}
                </ErrorMessage>
            </div>
        )}
    </Field>
);
