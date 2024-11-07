import icons from "../../images/icons.svg";
import styles from "./ReviewCard.module.css";
export default function ReviewCard({ review }) {
  return (
    <>
      <div className={styles.container}>
        <p className={styles.logo}>{review.reviewer_name.slice(0, 1)}</p>
        <div>
          <h4 className={styles.name}>{review.reviewer_name}</h4>
          <ul className={styles.list}>
            {[...Array(5)].map((_, index) => (
              <li key={index}>
                <svg
                  style={{
                    fill:
                      index < review.reviewer_rating ? "#FFC531" : "#F2F4F7",
                  }}
                  width={16}
                  height={16}
                >
                  <use href={`${icons}#icon-star`}></use>
                </svg>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <p className={styles.comment}>{review.comment}</p>
    </>
  );
}
