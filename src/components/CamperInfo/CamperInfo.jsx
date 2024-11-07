import styles from "./CamperInfo.module.css";
import icons from "../../images/icons.svg";

export default function CamperInfo({ camper }) {
  return (
    <>
      <h2 className={styles.titlee}>{camper.name}</h2>
      <div className={styles.info_container}>
        <svg className={styles.star_icon} width={16} height={16}>
          <use href={`${icons}#icon-star`}></use>
        </svg>
        <p className={styles.rating}>
          {camper.rating}({camper.reviews.length} reviews)
        </p>
        <svg className={styles.map_icon} width={16} height={16}>
          <use href={`${icons}#icon-map`}></use>
        </svg>
        <p className={styles.location}>{camper.location}</p>
      </div>
      <p className={styles.price}>&euro;{camper.price}.00</p>
      <ul className={styles.list}>
        {camper.gallery.map((item, index) => {
          return (
            <li key={index} className={styles.item}>
              <img
                className={styles.img}
                src={item.original}
                alt={camper.name}
              />
            </li>
          );
        })}
      </ul>
      <p className={styles.description}>{camper.description}</p>
    </>
  );
}
