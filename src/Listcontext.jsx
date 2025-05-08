import React, { useState, createContext } from 'react'
import Listitems from './Listitems'

export const ListContext = createContext();

export default function Listcontext(props) {
    const [items, setItems] = useState([
        {
          name: "book",
          id: 12,
          price: "10$"
        },
        {
          name: "waterpot",
          id: 13,
          price: "20$"
        },
        {
          name: "eyeglass",
          id: 14,
          price: "30$"
        }
    ]);
    
    return (
        <div>
            <ListContext.Provider value={{items, setItems}}>
                <Listitems/>
                {props.children} 
            </ListContext.Provider>
              
        </div>
    )
}
