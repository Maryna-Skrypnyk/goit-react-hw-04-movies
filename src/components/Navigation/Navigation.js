import { NavLink } from 'react-router-dom';
import styles from './Navigation.module.scss';

const Navigation = () => (
  <div className={styles.ContainerNav}>
    <nav className={styles.Navigation}>
      <ul className={styles.NavList}>
        <li className={styles.NavListItem}>
          <NavLink
            exact
            to="/"
            className={styles.link}
            activeClassName={styles.activeLink}
          >
            Home
          </NavLink>
        </li>
        <li className={styles.NavListItem}>
          <NavLink
            to="/movies"
            className={styles.link}
            activeClassName={styles.activeLink}
          >
            Movies
          </NavLink>
        </li>
      </ul>
    </nav>
  </div>
);

export default Navigation;
