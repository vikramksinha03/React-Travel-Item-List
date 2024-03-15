import { useState } from "react";
import Item from "./Item";

export default function PackingList({ item, onDeleteItem, onToggleItems, onClearClick }) {
  const [sortBy, setSortBy] = useState('input');

  function handleChange(e) {
    setSortBy(e.target.value);
  }

  let sortedItem;

  if (sortBy === 'input') {
    sortedItem = item;
  }

  if (sortBy === 'description') {
    sortedItem = item.slice().sort((a, b) => a.description.localeCompare(b.description));
  }

  if (sortBy === 'packed') {
    sortedItem = item.slice().sort((a, b) => a.packed - b.packed);
  }

  return (
    <div className="list">
      <ul>
        {sortedItem.map((item) => <Item item={item} onDeleteItem={onDeleteItem} onToggleItems={onToggleItems} key={item.id} />)}
      </ul>
      <div className="actions">
        <select value={sortBy} onChange={handleChange}>
          <option value="input">Sort by input order</option>
          <option value="description">Sort by description</option>
          <option value="packed">Sort by packed status</option>
        </select>
        <button onClick={onClearClick}>Clear List</button>
      </div>
    </div>
  );
}
