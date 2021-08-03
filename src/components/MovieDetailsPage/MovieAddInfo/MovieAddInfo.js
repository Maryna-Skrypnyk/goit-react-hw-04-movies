import { NavLink, useRouteMatch, Route, useLocation } from 'react-router-dom';

import CastView from '../../../views/CastView';
import ReviewsView from '../../../views/ReviewsView';

import styles from './MovieAddInfo.module.scss';

export default function MovieAddInfo() {
  const { url, path } = useRouteMatch();
  const location = useLocation();
  console.log(location);
  return (
    <div className={styles.MovieAddInfo}>
      <p className={styles.AddInfo}>Additional Information</p>
      <ul className={styles.InfoList}>
        <li>
          <NavLink
            to={{
              pathname: `${url}/cast`,
              state: {
                from: location.state ? location.state.from : '/',
              },
            }}
            className={styles.link}
            activeClassName={styles.activeLink}
          >
            Cast
          </NavLink>
        </li>
        <li>
          <NavLink
            to={{
              pathname: `${url}/reviews`,
              state: {
                from: location.state ? location.state.from : '/',
              },
            }}
            className={styles.link}
            activeClassName={styles.activeLink}
          >
            Reviews
          </NavLink>
        </li>
      </ul>

      <hr className={styles.Line} />

      <Route
        path={`${path}/cast`}
        // path="/movies/:movieId/cast"
      >
        <CastView />
      </Route>

      <Route path={`${path}/reviews`}>
        <ReviewsView />
      </Route>
    </div>
  );
}
