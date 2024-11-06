import { Link } from "react-router-dom";
import icons from "../../images/icons.svg";
import styles from "./CamperCard.module.css";
import { useDispatch, useSelector } from "react-redux";
import { changeFavorites } from "../../redux/campers/slice.js";
import { selectFavoriteCampers } from "../../redux/campers/selectors.js";
import clsx from "clsx";
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
          {camper.transmission === "automatic" && (
            <li className={styles.item}>
              <svg className={styles.item_icon} width={20} height={20}>
                <use href={`${icons}#icon-automatic`}></use>
              </svg>
              Automatic
            </li>
          )}
          {camper.engine === "petrol" && (
            <li className={styles.item}>
              <svg className={styles.item_icon} width={20} height={20}>
                <use href={`${icons}#icon-petrol`}></use>
              </svg>
              Petrol
            </li>
          )}
          {camper.kitchen && (
            <li className={styles.item}>
              <svg className={styles.item_icon} width={20} height={20}>
                <use href={`${icons}#icon-cup-hot`}></use>
              </svg>
              Kitchen
            </li>
          )}
          {camper.AC && (
            <li className={styles.item}>
              <svg className={styles.item_icon} width={20} height={20}>
                <use href={`${icons}#icon-wind`}></use>
              </svg>
              AC
            </li>
          )}
          {camper.TV && (
            <li className={styles.item}>
              <svg className={styles.item_icon} width={20} height={20}>
                <use href={`${icons}#icon-tv`}></use>
              </svg>
              TV
            </li>
          )}
          {camper.radio && (
            <li className={styles.item}>
              <svg className={styles.item_icon} width={20} height={20}>
                <use href={`${icons}#icon-radio`}></use>
              </svg>
              Radio
            </li>
          )}
          {camper.bathroom && (
            <li className={styles.item}>
              <svg className={styles.item_icon} width={20} height={20}>
                <use href={`${icons}#icon-shower`}></use>
              </svg>
              Bathroom
            </li>
          )}
          {camper.refrigerator && (
            <li className={styles.item}>
              <svg className={styles.item_icon} width={20} height={20}>
                <use href={`${icons}#icon-frige`}></use>
              </svg>
              Refrigerator
            </li>
          )}
          {camper.microwave && (
            <li className={styles.item}>
              <svg className={styles.item_icon} width={20} height={20}>
                <use href={`${icons}#icon-microwave`}></use>
              </svg>
              Microwave
            </li>
          )}
          {camper.gas && (
            <li className={styles.item}>
              <svg className={styles.item_icon} width={20} height={20}>
                <use href={`${icons}#icon-gas-stove`}></use>
              </svg>
              Gas
            </li>
          )}
          {camper.water && (
            <li className={styles.item}>
              <svg className={styles.item_icon} width={20} height={20}>
                <use href={`${icons}#icon-water`}></use>
              </svg>
              Water
            </li>
          )}
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
