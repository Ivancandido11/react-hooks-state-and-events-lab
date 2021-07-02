import React, { useState } from "react"

function Item({ name, category }) {
  const [inCart, setInCart] = useState(false)
  const itemClass = inCart ? "in-cart" : ""

  const handleAddToCardClick = () => (
    setInCart((inCart) => !inCart)
  )

  return (
    <li className={itemClass}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button onClick={handleAddToCardClick} className="add">Add to Cart</button>
    </li>
  )
}

export default Item
