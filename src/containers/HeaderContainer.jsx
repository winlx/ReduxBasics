import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Header from '../components/Header';

class HeaderContainer extends Component {
  constructor(props, context) {
    super(props, context);

    this.store = context.store;
  }

  componentDidMount() {
    this.unsubscribe = this.store.subscribe(() => this.forceUpdate());
  }

  componentWillUnmount() {
    this.unsubscribe();
  }

  render() {
    const todos = this.store.getState();

    return (
      <Header todos={todos} />
    );
  }
}

HeaderContainer.contextTypes = {
  store: PropTypes.object,
};

export default HeaderContainer;
