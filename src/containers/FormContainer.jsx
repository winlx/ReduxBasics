import { connect } from 'react-redux';

import Form from '../components/Form';

import { addTodo } from '../actions/actionCreators';

function mapDispatchToProps(dispatch) {
  return {
    onAdd: title => dispatch(addTodo(title)),
  };
}

const FormContainer = connect(null, mapDispatchToProps)(Form);

export default FormContainer;
