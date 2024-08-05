import styles from "./FormikField.module.scss";

import InputMask from "react-input-mask";
import { ErrorMessage, Field } from "formik";

export function FormikField({
    name,
    type,
    label,
    placeholder,
    readOnly = false,
    mask
}) {
    return (
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
}
