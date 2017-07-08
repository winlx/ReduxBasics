import React from 'react';
import PropTypes from 'prop-types';

import Stats from './Stats';
import Stopwatch from './Stopwatch';

function Header(props) {
  return (
    <header>
      <Stats todos={props.todos} />
      <h1>Redux Todo</h1>
      <Stopwatch />
    </header>
  );
}

Header.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired,
    id: PropTypes.number.isRequired,
  })).isRequired,
};

export default Header;
