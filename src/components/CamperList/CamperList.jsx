import { useSelector } from "react-redux";
import { selectAllCampers } from "../../redux/campers/selectors.js";
import CamperCard from "./../CamperCard/CamperCard";
import styles from "./CamperList.module.css";

export default function CamperList() {
  const campers = useSelector(selectAllCampers);
  return (
    <ul className={styles.list}>
      {campers.map((item) => {
        return (
          <li className={styles.item} key={item.id}>
            <CamperCard camper={item} />
          </li>
        );
      })}
    </ul>
  );
}
