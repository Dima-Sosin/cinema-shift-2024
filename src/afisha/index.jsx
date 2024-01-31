import {useState} from 'react'
import './styles.less'
import { Poster } from '../poster';

export function Afisha() {

    const [films, useFilms] = useState([]);

    fetch('https://shift-backend.onrender.com/cinema/today')
    .then(response => response.json())
    .then(data => {useFilms(data.films)});

  return (
    <>
        <div className="afisha">
            <div className="afisha__container">
                <h1 className="afisha__title">Афиша</h1>
                <ul className="afisha__cards">
                    {films.map((film) => {
                        return(
                            <li className="afisha__card" key={film.id}>
                                <Poster data={{film}}/>
                            </li>
                        )
                    })}
                </ul>
            </div>
        </div>
    </>)
}