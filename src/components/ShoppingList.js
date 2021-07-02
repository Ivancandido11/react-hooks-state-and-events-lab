import React, {useState} from "react";
import Item from "./Item";

function ShoppingList({ items }) {
  let [selectedCategory, setSelectedCategory] = useState("All")

  const handleSelectChange = (event) => {
    setSelectedCategory(selectedCategory = event.target.value)
  }

  const filteredItems = items.filter(item => item.category === selectedCategory)
  const displayItems = () => {
    if(selectedCategory === "All") {
      return items.map(item => (
        <Item 
          key={item.id} 
          name={item.name} 
          category={item.category} 
        />
      ))
    } else {
      return filteredItems.map(item => (
        <Item 
          key={item.id} 
          name={item.name} 
          category={item.category} 
        />
      ))
    }
  }

  return (
    <div className="ShoppingList">
      <div className="Filter">
        <select onChange={handleSelectChange} name="filter">
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="Items">
        {displayItems()}
      </ul>
    </div>
  );
}

export default ShoppingList;
