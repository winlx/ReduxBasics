import React from 'react';
import PropTypes from 'prop-types';

import Checkbox from './Checkbox';
import Button from './Button';

class Todo extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      editing: false,
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleToggle = this.handleToggle.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.editing) {
      this.title.focus();
    }
  }

  handleSubmit(event) {
    event.preventDefault();

    const title = this.title.value;

    this.props.onEdit(this.props.id, title);
    this.setState({ editing: false });
  }

  handleDelete() {
    this.props.onDelete(this.props.id);
  }

  handleToggle() {
    this.props.onToggle(this.props.id);
  }

  handleEdit() {
    this.setState({ editing: true });
  }

  renderDisplay() {
    const className = `todo${this.props.completed ? ' completed' : ''}`;

    return (
      <div className={className}>
        <Checkbox checked={this.props.completed} onChange={this.handleToggle} />

        <span className="todo-title">{this.props.title}</span>

        <Button className="edit icon" icon="edit" onClick={this.handleEdit} />
        <Button className="delete icon" icon="delete" onClick={this.handleDelete} />
      </div>
    );
  }

  renderForm() {
    return (
      <form className="todo-edit-form" onSubmit={this.handleSubmit}>
        <input type="text" ref={(input) => { this.title = input; }} defaultValue={this.props.title} />
        <Button className="save icon" icon="save" type="submit" />
      </form>
    );
  }

  render() {
    return this.state.editing ? this.renderForm() : this.renderDisplay();
  }
}

Todo.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  completed: PropTypes.bool.isRequired,
  onDelete: PropTypes.func.isRequired,
  onToggle: PropTypes.func.isRequired,
  onEdit: PropTypes.func.isRequired,
};

export default Todo;
