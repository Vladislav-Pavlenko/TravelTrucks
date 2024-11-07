import { useEffect, useState } from "react";
import CamperInfo from "./../../components/CamperInfo/CamperInfo";
import { useDispatch, useSelector } from "react-redux";
import { fetchCamperById } from "../../redux/campers/operations.js";
import { useParams } from "react-router-dom";
import {
  selectAllCampers,
  selectError,
  selectIsLoading,
} from "../../redux/campers/selectors.js";
import styles from "./CamperPage.module.css";
import Loader from "../../components/Loader.jsx";
import { Toaster } from "react-hot-toast";
import ReviewList from "../../components/ReviewList/ReviewList.jsx";
import BookingForm from "./../../components/BookingForm/BookingForm";
import Features from "../../components/Features/Features.jsx";
export default function CamperPage() {
  const [activeTab, setActiveTab] = useState("features");

  const camperArr = useSelector(selectAllCampers);
  const camper = camperArr[0];
  const error = useSelector(selectError);
  const isLoading = useSelector(selectIsLoading);
  const dispatch = useDispatch();
  const { id } = useParams();
  useEffect(() => {
    const fetchData = () => {
      dispatch(fetchCamperById(id));
    };
    fetchData();
  }, [id, dispatch]);

  return (
    <div className={styles.container}>
      <section className={styles.camper_info}>
        {camperArr.length !== 0 && <CamperInfo camper={camper} />}
      </section>

      <nav className={styles.nav}>
        <ul className={styles.list}>
          <li
            className={
              activeTab === "features" ? styles.item_active : styles.item
            }
          >
            <button
              className={styles.btn}
              onClick={() => setActiveTab("features")}
              type="button"
            >
              Features
            </button>
          </li>
          <li
            className={
              activeTab === "reviews" ? styles.item_active : styles.item
            }
          >
            <button
              className={styles.btn}
              onClick={() => setActiveTab("reviews")}
              type="button"
            >
              Reviews
            </button>
          </li>
        </ul>
      </nav>

      {camperArr.length !== 0 && (
        <div className={styles.tab_container}>
          {activeTab === "features" ? (
            <Features camper={camper} />
          ) : (
            <ReviewList camper={camper} />
          )}
          <BookingForm />
        </div>
      )}
      {error && <h2 className={styles.error}>Camper not found :(</h2>}
      {isLoading && <Loader />}
      <Toaster />
    </div>
  );
}
