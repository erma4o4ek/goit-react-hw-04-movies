import React from "react";
import { NavLink } from "react-router-dom";
import styles from "../Navigation/Navigation.module.css";
import routes from "../../routes/routes";

const Navigation = () => {
  return (
    <nav className={styles.nav}>
      <ul className={styles.list}>
        <li className={styles.item}>
          <NavLink
            exact
            to={routes.home}
            className={styles.link}
            activeClassName={styles.linkactive}
          >
            Home
          </NavLink>
        </li>
        <li className={styles.item}>
          <NavLink
            to={routes.movies}
            className={styles.link}
            activeClassName={styles["link--active"]}
          >
            Movies
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
