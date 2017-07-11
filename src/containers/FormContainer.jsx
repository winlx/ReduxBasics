import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Form from '../components/Form';

import { addTodo } from '../actions/actionCreators';

class FormContainer extends Component {
  constructor(props, context) {
    super(props, context);

    this.store = context.store;

    this.handleAdd = this.handleAdd.bind(this);
  }

  handleAdd(title) {
    this.store.dispatch(addTodo(title));
  }

  render() {
    return (
      <Form onAdd={this.handleAdd} />
    );
  }
}

FormContainer.contextTypes = {
  store: PropTypes.object,
};

export default FormContainer;
