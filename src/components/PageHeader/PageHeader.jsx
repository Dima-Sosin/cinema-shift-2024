import styles from "./PageHeader.module.scss";
import { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import { LogoIcon } from "@assets/LogoIcon";
import { UserIcon } from "@assets/UserIcon";
import { TicketIcon } from "@assets/TicketIcon";
import { ExitIcon } from "@assets/ExitIcon";
import { LogOn } from "../LogOn/LogOn";
import { LogOut } from "../LogOut/LogOut";

export const PageHeader = () => {
    const [isModal, setIsModal] = useState(false);
    const [isAuth, setIsAuth] = useState(!!localStorage.getItem("token"));

    const Modal = {
        true: (
            <LogOut onClose={() => setIsModal(false)} setIsAuth={setIsAuth} />
        ),
        false: <LogOn onClose={() => setIsModal(false)} setIsAuth={setIsAuth} />
    };

    return (
        <>
            <div className={styles.page}>
                <div className={styles.container}>
                    <header className={styles.page_header}>
                        <div className={styles.left}>
                            <Link to="/afisha">
                                <LogoIcon />
                            </Link>
                            {isAuth && (
                                <>
                                    <Link
                                        className={styles.block}
                                        to="/profile"
                                    >
                                        <UserIcon />
                                        <span className={styles.link}>
                                            Профиль
                                        </span>
                                    </Link>
                                    <Link
                                        className={styles.block}
                                        to="/tickets"
                                    >
                                        <TicketIcon />
                                        <span className={styles.link}>
                                            Билеты
                                        </span>
                                    </Link>
                                </>
                            )}
                        </div>
                        <div className={styles.block}>
                            <ExitIcon />
                            <span
                                className={styles.link}
                                onClick={() => setIsModal(true)}
                            >
                                {isAuth ? "Выйти" : "Войти"}
                            </span>
                        </div>
                    </header>
                </div>
            </div>
            {isModal && Modal[isAuth]}
            <Outlet />
        </>
    );
};
