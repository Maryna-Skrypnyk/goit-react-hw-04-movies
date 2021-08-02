import React from 'react';

import PropTypes from 'prop-types';

import CastListItem from '../CastListItem';

import styles from './CastList.module.scss';

export default function CastList({ actors }) {
  return (
    <ul className={styles.CastList}>
      {actors.map(({ id, original_name, character, profile_path }) => (
        <CastListItem
          key={id}
          id={id}
          original_name={original_name}
          character={character}
          profile_path={profile_path}
        />
      ))}
    </ul>
  );
}

CastList.propTypes = {
  actors: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }),
  ),
};
