import './styles.less'
import { Rating} from '../rating';
import { Button } from '../button';

export function Poster({data}) {
  const {film} = data;

  const url = "https://shift-backend.onrender.com";

  return (
    <div className="poster">
      <div className="poster__img">
        <img src={url+film.img} alt="poster"></img>
      </div>
      <h2 className="poster__title">{film.name}</h2>
      <p className="poster__subtitle">{film.description}</p>
      <Rating num={film.userRatings.kinopoisk} />
      <Button>Подробнее</Button>
    </div>)
}