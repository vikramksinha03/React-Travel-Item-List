import { useState } from "react";
import Logo from './Logo'
import Form from './Form'
import PackingList from "./PackingList";
import Stats from "./Stats";

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

  function handleClear() {
    const confirmed = window.confirm("Are you sure you want to delete all items")
    if(confirmed) {
      setItems([])
    }
  }

  return (
    <div className="app">
      <Logo />
      <Form onAddItem={handleAddItem}/>
      <PackingList item={items} onDeleteItem={handleDeleteItem} onToggleItems={handleToggle} onClearClick={handleClear}/>
      <Stats item={items}/>
    </div>
  )
}

export default App;
