import styles from "./Categories.module.css";
import icons from "../../images/icons.svg";
export default function Categories({ camper }) {
  return (
    <>
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
    </>
  );
}
