import { QuestionIcon } from "@assets/QuestionIcon";
import styles from "./LogOut.module.scss";

import { Button } from "../Button/Button";
import { Modal } from "../Modal/Modal";

export function LogOut({ onClose, setIsAuth }) {
    const onClick = () => {
        localStorage.removeItem("token");
        setIsAuth(!!localStorage.getItem("token"));
        onClose();
        window.location.reload();
    };

    return (
        <Modal onClose={onClose}>
            <div className={styles.modal}>
                <QuestionIcon />
                <h3>Вы действительно хотите выйти?</h3>
                <div className={styles.buttons}>
                    <Button view="default" onClick={onClose}>
                        Отменить
                    </Button>
                    <Button view="primary" onClick={() => onClick()}>
                        Выйти
                    </Button>
                </div>
            </div>
        </Modal>
    );
}
