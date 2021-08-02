import { NavLink, useRouteMatch, Route } from 'react-router-dom';

import CastView from '../../../views/CastView';
import ReviewsView from '../../../views/ReviewsView';

import styles from './MovieAddInfo.module.scss';

export default function MovieAddInfo() {
  const { url, path } = useRouteMatch();
  // console.log(url);
  return (
    <div className={styles.MovieAddInfo}>
      <p className={styles.AddInfo}>Additional Information</p>
      <ul className={styles.InfoList}>
        <li>
          <NavLink
            to={{ pathname: `${url}/cast` }}
            className={styles.link}
            activeClassName={styles.activeLink}
          >
            Cast
          </NavLink>
          <Route
            path={`${path}/cast`}
            // path="/movies/:movieId/cast"
          >
            <CastView />
          </Route>
        </li>
        <li>
          <NavLink
            to={{ pathname: `${url}/reviews` }}
            className={styles.link}
            activeClassName={styles.activeLink}
          >
            Reviews
          </NavLink>
        </li>

        <Route path={`${path}/reviews`}>
          <ReviewsView />
        </Route>
      </ul>
    </div>
  );
}
