import styles from './styles.module.css'
import { Rating} from '../rating';
import { Button } from '../button';

export function Poster({data}) {
  const {film} = data;

  const url = "https://shift-backend.onrender.com";

  return (
    <div className={styles.poster}>
      <div className={styles.img}>
        <img src={url+film.img} alt="poster"></img>
      </div>
      <h2 className={styles.title}>{film.name}</h2>
      <p className={styles.subtitle}>{film.description}</p>
      <Rating num={film.userRatings.kinopoisk} />
      <Button>Подробнее</Button>
    </div>)
}