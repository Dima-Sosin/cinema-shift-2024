import { useParams } from "react-router-dom"
import { api } from "../../api/api"
import { FilmInf } from "./film_inf"
import { Schedule } from "../../components/schedule"
import { BtnBack } from "../../components/button-back"

export const FilmPage = () => {
    const { filmId } = useParams();
    const film = api.get("/cinema/film/" + filmId);
    return (
        <div className="page">
            <div className="container">
                <BtnBack/>
                <FilmInf film={film} />
            </div>
            <div className="container">
                <Schedule film={film} />
            </div>
        </div>
    )
}
