import { useState } from "react";
import Logo from "./logo";
import Form from "./Form";
import PackingItem from "./PackingItem";
import Stats from "./Stats";

export default function App() {
  const [items, setItems] = useState([]);

  function handleAddItems(item) {
    setItems((items) => [...items, item]);
  }
  function handleDeleteItems(id) {
    setItems((items) => items.filter((item) => item.id !== id));
  }
  function handleCheckBox(id) {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }
  function handleClearList() {
    const confirmed = window.confirm(
      "Are you sure you want to delete all items"
    );

    if (confirmed) setItems([]);
  }

  return (
    <div className="app">
      <Logo />
      <Form onAddItems={handleAddItems} />
      <PackingItem
        items={items}
        onDeleteItems={handleDeleteItems}
        onToggleItems={handleCheckBox}
        onClearList={handleClearList}
      />
      <Stats items={items} />
    </div>
  );
}
