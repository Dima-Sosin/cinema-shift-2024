import styles from "./styles.module.css";
import { Star } from "./star.jsx";

export function Rating({ num }) {
  let star = Math.round(num / 2);

  let arr = [];
  for (let i = 0; i < star; i++) arr.push(<Star color={"#FFB219"} />); //золотые звезды
  for (let i = star; i < 5; i++) arr.push(<Star color={"#CED2DA"} />); //серые звезды

  return (
    <div className={styles.rating}>
      <div className={styles.stars}>{arr}</div>
      <div className={styles.score}>
        <p>Kinopoisk - {num}</p>
      </div>
    </div>
  );
}
