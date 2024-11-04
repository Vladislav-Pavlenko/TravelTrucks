import { Link } from "react-router-dom";
import styles from "./Hero.module.css";
export default function Hero() {
  return (
    <section className={styles.section}>
      <h1 className={styles.header}>Campers of your dreams</h1>
      <p className={styles.description}>
        You can find everything you want in our catalog
      </p>
      <Link className={styles.button} to="/catalog" type="button">
        View Now
      </Link>
    </section>
  );
}
