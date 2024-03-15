import { useState } from "react";

// const initialItems = [
//   { id: 1, description: "Passports", quantity: 2, packed: false },
//   { id: 2, description: "Socks", quantity: 12, packed: true },
//   { id: 3, description: "Charger", quantity: 10, packed: false },
// ];


function App() {
  const [items, setItems] = useState([])

  function handleAddItem(item) {
    setItems(items => [...items, item])
  }

  function handleDeleteItem(id) {
    setItems(items => items.filter(item => item.id !== id))
  }

  function handleToggle(id) {
    setItems(items => items.map(item => item.id === id ? {...item, packed: !item.packed} : item))
  }

  return (
    <div className="app">
      <Logo />
      <Form onAddItem={handleAddItem}/>
      <PackingList item={items} onDeleteItem={handleDeleteItem} onToggleItems={handleToggle}/>
      <Stats />
    </div>
  )
}

function Logo() {
  return (
    <h1>🌴 Far Away 💼</h1>
  )
}



function Form({onAddItem}) {
  const [description, setDescription] = useState('')
  const [quantity, setQuantity] = useState(1)

  function handleSubmit(e) {
    e.preventDefault()
    console.log(e)
    
    if(!description) {
      return
    }

    const newItem = {description, quantity, packed: false, id: Date.now()}

    onAddItem(newItem)

    setDescription('')
    setQuantity(1)
  }

  function handleInputChange(e) {
    setDescription(e.target.value)
  }

  function handleSelectChange(e) {
    setQuantity(+e.target.value)
  }


  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3>What do you need for your 😍 trip?</h3>
      <select value={quantity} onChange={handleSelectChange}>
        {Array.from({length: 20}, (_, i) => i + 1).map(
          (item) => (
          <option value={item} key={item} >
            {item}
          </option>
        ))}
      </select>
      <input type="text" placeholder="Item..." value={description} onChange={handleInputChange}/>
      <button>Add</button>
    </form>
  )
}

function PackingList({item, onDeleteItem, onToggleItems}) {
  return (
    <div className="list">
      <ul>
        {item.map((item) => <Item item={item} onDeleteItem={onDeleteItem} onToggleItems={onToggleItems} key={item.id}/>)}
      </ul>
    </div>
  )
}

function Item({item, onDeleteItem, onToggleItems}) {
  return (
    <li>
      <input type="checkbox" onClick={() => onToggleItems(item.id)}/>
      <span style={item.packed ? {textDecoration: 'line-through'} : {}}>
      {item.quantity} {item.description}
      </span>
      <button onClick={() => onDeleteItem(item.id)}>❌</button>
    </li>
  )
}

function Stats() {
  return (
    <footer className="stats">
      <em>🧳 You have X items n your list, and you already packed X (X%)</em>
    </footer>
  )
}

export default App;
