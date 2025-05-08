import React, { useContext } from 'react'
import { ListContext } from './Listcontext'
import './Listitems.css'
import List from './List'

export default function Listitems() {
  const { items } = useContext(ListContext)
  
  return (
    <div className="listitems-container">
      <h2 className="listitems-title">Your Items</h2>
      <p className='list-items'> list items: {items.length}</p>

      <div className="listitems-grid">
        {items.map(item => (
          <List 
            key={item.id}
            name={item.name} 
            price={item.price} 
            id={item.id}
          />
        ))}
      </div>
    </div>
  )
}
