import styles from "./PageHeader.module.scss";
import { Link, Outlet } from "react-router-dom";
import { PageLayout } from "@components/PageLayout/PageLayout"
import { LogoIcon } from "@assets/LogoIcon";
import { UserIcon } from "@assets/UserIcon";
import { TicketIcon } from "@assets/TicketIcon";
import { ExitIcon } from "@assets/ExitIcon";

export const PageHeader = () => (
    <>
        <PageLayout className="header_line">
            <header className={styles.page_header}>
                <div className={styles.left}>
                    <Link to="/afisha">
                        <LogoIcon />
                    </Link>
                    <Link className={styles.block} to="/profile">
                        <UserIcon />
                        <span className={styles.link}>Профиль</span>
                    </Link>
                    <Link className={styles.block} to="/tickets">
                        <TicketIcon />
                        <span className={styles.link}>Билеты</span>
                    </Link>
                </div>
                <div className={styles.block}>
                    <ExitIcon />
                    <span className={styles.link}>Выйти</span>
                </div>
            </header>
        </PageLayout>
        <Outlet />
    </>
);
