import { lazy, Suspense } from 'react';

import {
  NavLink,
  useRouteMatch,
  Route,
  useLocation,
  Switch,
} from 'react-router-dom';

import LoaderSpinner from '../../LoaderSpinner';
import { animateScroll as scroll } from 'react-scroll';

import styles from './MovieAddInfo.module.scss';

const CastView = lazy(() =>
  import('../../../views/CastView.js' /* webpackChunkName: "cast-view" */),
);

const ReviewsView = lazy(() =>
  import('../../../views/ReviewsView' /* webpackChunkName: "reviews-view" */),
);

export default function MovieAddInfo() {
  const { url, path } = useRouteMatch();
  const location = useLocation();

  scroll.scrollToBottom();

  return (
    <div className={styles.MovieAddInfo}>
      <p className={styles.AddInfo}>Additional Information</p>
      <ul className={styles.InfoList}>
        <li className={styles.InfoListItem}>
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
        <li className={styles.InfoListItem}>
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

      <Suspense fallback={<LoaderSpinner />}>
        <Switch>
          <Route path={`${path}/cast`}>
            <CastView />
          </Route>

          <Route path={`${path}/reviews`}>
            <ReviewsView />
          </Route>
        </Switch>
      </Suspense>
    </div>
  );
}
