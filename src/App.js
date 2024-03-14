import { useState } from "react";

const initialItems = [
  { id: 1, description: "Passports", quantity: 2, packed: false },
  { id: 2, description: "Socks", quantity: 12, packed: true },
  { id: 3, description: "Charger", quantity: 10, packed: false },
];


function App() {
  return (
    <div className="app">
      <Logo />
      <Form />
      <PackingList />
      <Stats />
    </div>
  )
}

function Logo() {
  return (
    <h1>🌴 Far Away 💼</h1>
  )
}



function Form() {
  const [description, setDescription] = useState('')
  const [quantity, setQuantity] = useState(1)

  function handleSubmit(e) {
    e.preventDefault()
    console.log(e)
    
    if(!description) {
      return
    }

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

function PackingList() {
  return (
    <div className="list">
      <ul>
        {initialItems.map((item) => <Item item={item} key={item.id}/>)}
      </ul>
    </div>
  )
}

function Item({item}) {
  return (
    <li>
      <span style={item.packed ? {textDecoration: 'line-through'} : {}}>
      {item.quantity} {item.description}
      </span>
      <button>❌</button>
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
