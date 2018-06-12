import React from 'react';

class GroceryForm extends React.Component {
  state = {name: '', price: '',}

  handleChange = (e) => {
    this.setState({ name: e.target.value, price: e.target.value})
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const {name, price}= this.state;
    this.props.addItem(this.state);
    this.setState({ name: '', price: '' })
  }

  render() {
    const { name, price } = this.state
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          placeholder="Add an Item"
          required
          value={name}
          onChange={this.handleChange}
        />
        <input
          placeholder="Add a Price"
          value={price}
          inchange={this.handleChange}
          />
      </form>
    )
  }
}

export default GroceryForm;