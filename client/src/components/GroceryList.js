import React from 'react'
import Grocery from './grocery'

const GroceryList = ({ items, updateItems, deleteItems }) => (
  <div className="row">
    { items.map( item =>
      <Grocery
        key={item.id}
        {...item}
        updateItem={updateItem}
        deleteItem={deleteItem}
        />
    )}
  </div>
)

export default GroceryList;