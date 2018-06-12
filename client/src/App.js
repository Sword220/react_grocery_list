import React, { Component } from 'react';
import GroceryForm from './components/GroceryForm' 
//import GroceryList from './component/Grocerylist'

class App extends Component {
  state = { groceries: [] }

  componentDidMount () {
    //make call to rails server, get items
  }

  addItem = (name, price) => {

  } 

  updateItem = (id) => {

  }

  deleteItem = (id) => {

  }
  
  render() {
    return (
      <div className="container">
        <GroceryForm  />
        {/* <GroceryList
          updateItem={this.updateItem}
          deleteItem={this.deleteItem}
          items={this.state.groceries}
        /> */}
      </div>

    );
  }
}

export default App;


