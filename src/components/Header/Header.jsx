import Navigation from "../Navigation/Navigation.jsx";
import { Link } from "react-router-dom";
import logo from "../../images/logo.svg";
import styles from "./Header.module.css";
export default function Header() {
  return (
    <header className={styles.header}>
      <Link className={styles.logo} to="/">
        <img
          className={styles.logo_img}
          width={136}
          height={16}
          src={logo}
          alt="TravelTrucks"
        />
      </Link>
      <div className={styles.navigation}>
        <Navigation />
      </div>
    </header>
  );
}
