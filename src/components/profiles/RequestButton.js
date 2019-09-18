import React from 'react';
import PropTypes from 'prop-types';
import stylesCss from './ProfileInfo.css';

function RequestButton({ handleRequest }) {
  return(
    <button className={stylesCss.button} onClick={handleRequest}>Request Partnership</button>
  );
}

RequestButton.propTypes = {
  handleRequest: PropTypes.func
};

export default RequestButton;
