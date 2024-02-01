import styles from './styles.module.css'
import Star from '../../assets/star.svg'

export function Rating({num}) {
  let star = Math.trunc(num/2);

  return (
    <div className={styles.rating}>
      <div className={styles.stars}>
          <img src={Star} alt='star' />
          <img src={Star} alt='star' />
          <img src={Star} alt='star' />
          <img src={Star} alt='star' />
          <img src={Star} alt='star' />
      </div>
      <div className={styles.score}>
          <p>Kinopoisk - {num}</p>
      </div>
    </div>
  )
}