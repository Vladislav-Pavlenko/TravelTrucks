import { Link } from "react-router-dom";
import icons from "../../images/icons.svg";
import styles from "./CamperCard.module.css";
import { useDispatch, useSelector } from "react-redux";
import { changeFavorites } from "../../redux/campers/slice.js";
import { selectFavoriteCampers } from "../../redux/campers/selectors.js";
import clsx from "clsx";
import Categories from "../Categories/Categories.jsx";
export default function CamperCard({ camper }) {
  let favoriteCamper = useSelector(selectFavoriteCampers);
  const createLikeClass = clsx(
    styles.like_icon,
    favoriteCamper.includes(camper.id) && styles.like_icon_active
  );
  const dispatch = useDispatch();
  const handleClick = () => {
    let updatedFavorites;

    if (favoriteCamper.includes(camper.id)) {
      updatedFavorites = favoriteCamper.filter((item) => item !== camper.id);
    } else {
      updatedFavorites = [...favoriteCamper, camper.id];
    }

    dispatch(changeFavorites(updatedFavorites));
  };
  return (
    <>
      <img
        src={camper.gallery[0].thumb}
        alt={camper.name}
        className={styles.img}
      />
      <div className={styles.container}>
        <div className={styles.title_container}>
          <h2 className={styles.title}>{camper.name}</h2>
          <p className={styles.price}>&euro;{camper.price}.00</p>
          <button className={styles.like_button} onClick={handleClick}>
            <svg className={createLikeClass} width={26} height={24}>
              <use href={`${icons}#icon-like`}></use>
            </svg>
          </button>
        </div>
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
        <p className={styles.description}>{camper.description}</p>
        <ul className={styles.list}>
          <Categories camper={camper} />
        </ul>
        <Link
          className={styles.more_btn}
          to={`/catalog/${camper.id}`}
          type="button"
        >
          Show more
        </Link>
      </div>
    </>
  );
}
