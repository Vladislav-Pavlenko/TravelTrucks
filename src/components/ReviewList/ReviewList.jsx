import ReviewCard from "./../ReviewCard/ReviewCard";
import styles from "./ReviewList.module.css";
export default function ReviewList({ camper }) {
  return (
    <ul className={styles.list}>
      {camper.reviews.map((item, index) => {
        return (
          <li key={index} className={styles.item}>
            <ReviewCard review={item} />
          </li>
        );
      })}
    </ul>
  );
}
