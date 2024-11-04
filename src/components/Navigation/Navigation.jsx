import { NavLink } from "react-router-dom";
import styles from "./Navigation.module.css";
import clsx from "clsx";
export default function Navigation() {
  const makeNavClass = ({ isActive }) => {
    return clsx(styles.link, isActive && styles.active);
  };
  return (
    <nav className={styles.nav}>
      <NavLink className={makeNavClass} to="/">
        Home
      </NavLink>
      <NavLink className={makeNavClass} to="/catalog">
        Catalog
      </NavLink>
    </nav>
  );
}
