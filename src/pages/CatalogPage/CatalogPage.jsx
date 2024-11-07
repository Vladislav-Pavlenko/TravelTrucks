import { useDispatch, useSelector } from "react-redux";
import FiltersBar from "../../components/FiltersBar/FiltersBar.jsx";
import { useEffect, useState } from "react";
import { fetchCampers } from "../../redux/campers/operations.js";
import CamperList from "../../components/CamperList/CamperList.jsx";
import styles from "./CatalogPage.module.css";
import {
  selectError,
  selectFilters,
  selectIsLoading,
  selectTotalCampers,
} from "../../redux/campers/selectors.js";
import DocumentTitle from "../../components/DocumentTitle.jsx";
import Loader from "../../components/Loader.jsx";
import { Toaster } from "react-hot-toast";
import { useSearchParams } from "react-router-dom";
export default function CatalogPage() {
  const [page, setPage] = useState(2);
  const [searchParams] = useSearchParams();
  const error = useSelector(selectError);
  const isLoading = useSelector(selectIsLoading);
  const totalCampers = useSelector(selectTotalCampers);
  const dispatch = useDispatch();
  const params = useSelector(selectFilters);

  useEffect(() => {
    const initialFilters = {
      ...Object.fromEntries(searchParams.entries()),
    };
    const fetchData = async () => {
      await dispatch(fetchCampers({ page: 1, ...initialFilters }));
    };
    fetchData();
  }, [dispatch, searchParams]);

  const handleClick = async () => {
    setPage((prevState) => prevState + 1);
    await dispatch(fetchCampers({ page: page, ...params }));
  };

  return (
    <div className={styles.container}>
      <DocumentTitle>Catalog</DocumentTitle>
      <FiltersBar setPage={setPage} />
      <div className={styles.info_container}>
        <CamperList />
        {isLoading && <Loader className={styles.loader} />}
        {error && <h2 className={styles.error}>Camper not found :(</h2>}
        {page * 4 < totalCampers + 4 && totalCampers > 0 && (
          <button
            className={styles.more_btn}
            onClick={handleClick}
            type="button"
          >
            Load more
          </button>
        )}
      </div>
      <Toaster />
    </div>
  );
}
