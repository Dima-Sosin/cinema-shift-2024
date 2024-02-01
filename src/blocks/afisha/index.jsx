import styles from './styles.module.css'
import {useState, useEffect} from 'react'
import { Poster } from '../poster';

export function Afisha() {

    const [films, setFilms] = useState([]);

    useEffect(() => {
        fetch('https://shift-backend.onrender.com/cinema/today')
        .then(response => response.json())
        .then(data => {setFilms(data.films)});
    }, []);

  return (
    <div className={styles.afisha}>
        <div className={styles.container}>
            <h1 className={styles.title} >Афиша</h1>
            <ul className={styles.cards}>
                {films.map((film) => 
                    <li className={styles.card} key={film.id}>
                        <Poster film={film}/>
                    </li>)
                }
            </ul>
        </div>
    </div>)
}