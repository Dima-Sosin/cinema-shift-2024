import styles from "./Times.module.scss";

export function Times({ seances, hall, onClick }) {
    return (
        <div className={styles.times}>
            {seances.map((seance, i) => {
                if (seance.hall.name === hall) {
                    return (
                        <div className={styles.time} key={i}>
                            <input
                                type="radio"
                                id={seance.hall.name + String(seance.time)}
                                name="time"
                                onClick={() => onClick(seance)}
                            />
                            <label
                                htmlFor={seance.hall.name + String(seance.time)}
                            >
                                {seance.time}
                            </label>
                        </div>
                    );
                }
            })}
        </div>
    );
}
