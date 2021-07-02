import React, { useState } from "react"
import ShoppingList from "./ShoppingList"
import itemData from "../data/items"

function App() {
  const [items, setItems] = useState(itemData)
  const [isDark, setIsDark] = useState(false)
  const appClass = isDark ? "App dark" : "App light"

  // this data will be passed down to the ShoppingList as a prop

  const handleDarkModeClick = () => (
    setIsDark((isDark) => !isDark)
  )

  return (
    <div className={appClass}>
      <header>
        <h2>Shopster</h2>
        <button onClick={handleDarkModeClick}>{isDark ? "Light Mode" : "Dark Mode"}</button>
      </header>
      <ShoppingList items={items} />
    </div>
  )
}

export default App
