import PropTypes from 'prop-types';

import styles from './MovieAddInfo.module.scss';

export default function MovieAddInfo() {
  return (
    <div className={styles.MovieAddInfo}>
      <p className={styles.AddInfo}>Additional Information</p>
      <ul className={styles.InfoList}>
        <li>
          Cast
          {/* <Link to={{ pathname: `${url}/cast` }}>Cast</Link> */}
        </li>
        <li>
          Reviews
          {/* <Link>Reviews</Link> */}
        </li>
      </ul>
    </div>
  );
}
