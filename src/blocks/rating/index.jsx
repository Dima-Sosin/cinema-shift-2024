import './styles.less'
import Star from '../../assets/star.svg'

export function Rating({num}) {
  let star = Math.trunc(num/2);

  return (
    <>
      <div className="rating">
        <div className="rating__stars">
            <img src={Star} alt='star' />
            <img src={Star} alt='star' />
            <img src={Star} alt='star' />
            <img src={Star} alt='star' />
            <img src={Star} alt='star' />
        </div>
        <div className="rating__score">
            <p>Kinopoisk - {num}</p>
        </div>
      </div>
    </>)
}