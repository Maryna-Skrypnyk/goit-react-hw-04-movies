import React from 'react';
import PropTypes from 'prop-types';

export default function PageHeading({ text }) {
  return <h1>{text}</h1>;
}

PageHeading.defaultProps = {
  text: '',
};

PageHeading.propTypes = {
  text: PropTypes.string,
};
