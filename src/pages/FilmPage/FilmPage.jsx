import {
    useNavigate,
    ScrollRestoration,
    useLoaderData
} from "react-router-dom";
import { PageLayout } from "@components/PageLayout/PageLayout";
import { FilmInf } from "./FilmInf/FilmInf";
import { Schedule } from "./Schedule/Schedule";
import { Button } from "@components/Button/Button";
import { BackIcon } from "@assets/BackIcon";

export const FilmPage = () => {
    const data = useLoaderData();
    const nav = useNavigate();

    return (
        <PageLayout>
            <Button view="link" onClick={() => nav(-1)}>
                <BackIcon />
                <p>Назад</p>
            </Button>
            <FilmInf film={data.film.film} />
            <Schedule schedules={data.scheduleResponse.schedules} />
            <ScrollRestoration />
        </PageLayout>
    );
};
