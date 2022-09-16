import React, { useState } from 'react'

import "./GroceriesList.css"

import ItemsList from "./ItemsList"
import Footer from '../Footer'



const GroceriesList = () => {
    const [items, setItems] = useState([
        {
            id: 1,
            checked: false,
            item: "chinese cucumbers"
        }, 
        {
            id: 2,
            checked: false,
            item: "red apples"
        }, 
        {
            id: 3,
            checked: false,
            item: "west african carrots"
        }
    ]) 

    const handleCheck = (id) => {
        const listItems = items.map((item) => item.id === id ? { ...item, checked: !item.checked } : item)
        setItems(listItems)
        localStorage.setItem('groceries list', JSON.stringify(listItems))
    }

    const handleDelete = (id) => {
        const listItems = items.filter((item) => item.id !== id)
        setItems(listItems)
        localStorage.setItem('groceries list', JSON.stringify(listItems))
    }

    return (
        <main>
            {items.length ? (
                <ItemsList // prop drilling is used to pass items, handleCheck and handleDelete to ItemsList component
                    items={items}
                    handleCheck={handleCheck}
                    handleDelete={handleDelete}
                />
            ): (
                <p style={{ marginTop: '2rem' }}>Your Groceries list is empty</p>
            )}
            <Footer length={items.length} />
        </main> 
    )
}

export default GroceriesList
