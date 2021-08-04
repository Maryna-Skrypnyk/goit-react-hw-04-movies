import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { toast, Zoom } from 'react-toastify';
import styles from './Searchbar.module.scss';

const Searchbar = ({ handleSubmit }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleChange = e => {
    const { value } = e.target;
    setSearchQuery(value.toLowerCase());
  };

  const handleSearchSubmit = e => {
    e.preventDefault();

    if (searchQuery.trim() === '') {
      return toast.warn('Enter the movie title', {
        position: 'top-left',
        transition: Zoom,
        style: {
          top: 90,
          left: 0,
          textAlign: 'center',
          width: 200,
          margin: '0 auto',
        },
      });
    }
    handleSubmit(searchQuery);
    setSearchQuery('');
  };

  return (
    <form className={styles.SearchForm} onSubmit={handleSearchSubmit}>
      <input
        className={styles.SearchFormInput}
        type="text"
        value={searchQuery}
        onChange={handleChange}
        autoComplete="off"
        autoFocus
        placeholder="Search movies"
      />

      <button
        className={styles.SearchFormButton}
        type="submit"
        aria-label="Search movies"
      >
        Search
      </button>
    </form>
  );
};

Searchbar.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
};

export default Searchbar;
