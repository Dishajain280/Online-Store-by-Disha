import React, { useState } from "react";
import "./App.css";

const products = [
  {
    id: 1,
    name: "MacBook Pro",
    price: 250000,
    image:
      "https://mundobytes.com/wp-content/uploads/2025/02/macbook-pro-m5-2.jpg",
  },
  {
    id: 2,
    name: "IPhone 16 Pro Max",
    price: 150000,
    image:
      "data:image/webp;base64,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",
  },
  {
    id: 3,
    name: "Headphones Sony WH-1000XM4",
    price: 3000,
    image:
      "https://miro.medium.com/v2/resize:fit:1400/1*CevtnfvmG5mncYvJdXBHOQ@2x.jpeg",
  },
];

export default function App() {
  let [cart, setCart] = useState([]);

  const addToCart = (product) => {
    const existing = cart.find((item) => item.id === product.id);
    if (existing) {
      const update = cart.map((item) =>
        item.id === product.id ? { ...item, qty: item.qty + 1 } : item,
      );
      setCart(update);
    } else {
      setCart([...cart, { ...product, qty: 1 }]);
    }
  };

  const removeFromCart = (productId) => {
    const existing = cart.find((item) => item.id === productId);
    if (existing.qty === 1) {
      setCart(cart.filter((item) => item.id !== productId));
    } else {
      const update = cart.map((item) =>
        item.id === productId ? { ...item, qty: item.qty - 1 } : item,
      );
      setCart(update);
    }
  };

  const removeAllFromCart = (productId) => {
    setCart(cart.filter((item) => item.id !== productId));
  };

  const getTotal = () => {
    return cart.reduce((total, item) => total + item.price * item.qty, 0);
  };

  return (
    <>
      <h1>Add To Cart</h1>
      <div className="container">
        <h2>🎁Products</h2>
        <div className="products">
          {products.map((product) => (
            <div className="product-card" key={product.id}>
              <img src={product.image} alt={product.name} />
              <div>
                <h3>{product.name}</h3>
                <p>Price: ₹{product.price}</p>
                <button onClick={() => addToCart(product)}>Add to Cart</button>
              </div>
            </div>
          ))}
        </div>
      </div>
      <h2 id="h2Cart">🛒Cart</h2>
      {cart.length === 0 ? (
        <p className="empty-cart">Cart is Empty</p>
      ) : (
        <div className="cart">
          {cart.map((item) => (
            <div key={item.id} className="cart-item">
              <span>
                {item.name} - ₹{item.price} * {item.qty}
              </span>
              <div className="cart-buttons">
                <button onClick={() => addToCart(item)}>+</button>
                <button onClick={() => removeFromCart(item.id)}>-</button>
                <button onClick={() => removeAllFromCart(item.id)}>×</button>
              </div>
            </div>
          ))}
          <h3 className="h3">Total: ₹{getTotal()}</h3>
        </div>
      )}
    </>
  );
}
