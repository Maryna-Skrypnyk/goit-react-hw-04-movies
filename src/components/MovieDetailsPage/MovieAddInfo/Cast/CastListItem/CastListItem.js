import React from 'react';
import PropTypes from 'prop-types';

import NoPhoto from '../../../../../images/noImage.png';

import styles from './CastListItem.module.scss';

export default function Cast({ original_name, character, profile_path }) {
  return (
    <li className={styles.Cast}>
      <img
        src={
          profile_path
            ? `https://image.tmdb.org/t/p/w500/${profile_path}`
            : NoPhoto
        }
        alt={original_name}
        className={styles.PhotoCast}
        // width={200}
        // height={283}
      />
      <h4 className={styles.Name}>{original_name}</h4>
      <p className={styles.Character}>{character}</p>
    </li>
  );
}

Cast.defaultProps = {
  profile_path: NoPhoto,
};

Cast.propTypes = {
  original_name: PropTypes.string.isRequired,
  character: PropTypes.string.isRequired,
  profile_path: PropTypes.string,
};
