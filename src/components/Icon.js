import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {ICONS} from '../constants';

const Icon = props => {
  const styles = {
    svg: {
      display: 'inline-block',
      verticalAlign: 'middle',
    },
    path: {
      fill: props.color,
    },
  };

  return (
    <svg
    	class={`${props.name}`}
      style={styles.svg}
      viewBox="0 0 1024 1024"
    >
      <path
        style={styles.path}
        d={ICONS[props.name.toUpperCase()]}
      ></path>
    </svg>
  );
};

Icon.propTypes = {
  icon: PropTypes.string.isRequired,
  size: PropTypes.number,
  color: PropTypes.string,
};

Icon.defaultProps = {
  size: 16,
};

export default Icon;
