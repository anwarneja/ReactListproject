import React, { useState, useContext } from 'react'
import { ListContext } from './Listcontext'
import './Addlist.css'

export default function Addlist() {
  const [name, setName] = useState('')
  const [price, setPrice] = useState('')
  const [id, setId] = useState('')

  const { items, setItems } = useContext(ListContext)

  const updateName = (e) => {
    setName(e.target.value)
  }
  const updatePrice = (e) => {
    setPrice(e.target.value)
  }
  const updateId = (e) => {
    setId(e.target.value)
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    setItems(prevItems => [...prevItems, { name: name, price: price, id: id }])
    console.log(name, price, id)
  }
  return (
    <div className="addlist-container">
      <form onSubmit={handleSubmit} className="addlist-form">
        <h2>Add New Item</h2>
        <div className="form-group">
          <label>Name</label>
          <input type="text" name='name' id='name' value={name} onChange={updateName} placeholder="Enter item name" />
        </div>
        <div className="form-group">
          <label>Price</label>
          <input type="number" name='price' id='price' value={price} onChange={updatePrice} placeholder="Enter price" />
        </div>
        <div className="form-group">
          <label>ID</label>
          <input type="text" name='id' id='id' value={id} onChange={updateId} placeholder="Enter item ID" />
        </div>
        <button type='submit' className="add-button">Add Item</button>
      </form>
    </div>
  )
}
