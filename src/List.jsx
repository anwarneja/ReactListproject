import React from 'react'
import './List.css'

export default function List({ name, price, id, message }) {
  return (
    <div className="list-item">
      <h2 className="list-item-name">{name}</h2>
      <h3 className="list-item-price">{price}</h3>
      <h4 className="list-item-id">ID: {id}</h4>
      {message && <p className="list-item-message">{message}</p>}
    </div>
  )
}
