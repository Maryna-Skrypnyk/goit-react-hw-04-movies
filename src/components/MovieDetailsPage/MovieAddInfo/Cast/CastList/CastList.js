import React from 'react';

import PropTypes from 'prop-types';

import CastListItem from '../CastListItem';

import styles from './CastList.module.scss';

export default function CastList({ actors }) {
  return (
    <ul className={styles.CastList}>
      {actors.map(({ credit_id, original_name, character, profile_path }) => (
        <CastListItem
          key={credit_id}
          credit_id={credit_id}
          original_name={original_name}
          character={character}
          profile_path={profile_path}
        />
      ))}
    </ul>
  );
}

CastList.defaultProps = {
  actors: [],
};

CastList.propTypes = {
  actors: PropTypes.arrayOf(
    PropTypes.shape({
      credit_id: PropTypes.string.isRequired,
    }),
  ),
};
