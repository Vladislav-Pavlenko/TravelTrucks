import Categories from "./../Categories/Categories";
import styles from "./Features.module.css";
export default function Features({ camper }) {
  return (
    <section className={styles.section}>
      <ul className={styles.categories_list}>
        <Categories camper={camper} />
      </ul>
      <h3 className={styles.title}>Vehicle details</h3>
      <ul className={styles.details_list}>
        <li className={styles.details_list_item}>
          <p className={styles.details_list_item_name}>Form</p>
          <p className={styles.details_list_item_value}>{camper.form}</p>
        </li>
        <li className={styles.details_list_item}>
          <p className={styles.details_list_item_name}>Length</p>
          <p className={styles.details_list_item_value}>{camper.length}</p>
        </li>
        <li className={styles.details_list_item}>
          <p className={styles.details_list_item_name}>Width</p>
          <p className={styles.details_list_item_value}>{camper.width}</p>
        </li>
        <li className={styles.details_list_item}>
          <p className={styles.details_list_item_name}>Height</p>
          <p className={styles.details_list_item_value}>{camper.height}</p>
        </li>
        <li className={styles.details_list_item}>
          <p className={styles.details_list_item_name}>Tank</p>
          <p className={styles.details_list_item_value}>{camper.tank}</p>
        </li>
        <li className={styles.details_list_item}>
          <p className={styles.details_list_item_name}>Consumption</p>
          <p className={styles.details_list_item_value}>{camper.consumption}</p>
        </li>
      </ul>
    </section>
  );
}
