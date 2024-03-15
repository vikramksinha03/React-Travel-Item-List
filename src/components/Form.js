import { useState } from "react"


export default function Form({onAddItem}) {
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
