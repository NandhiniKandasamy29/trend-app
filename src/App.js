import './App.css';

function App() {

  const products = [
    {
      id: 1,
      name: "Wireless Headphones",
      price: "$99",
      image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e"
    },
    {
      id: 2,
      name: "Smart Watch",
      price: "$149",
      image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30"
    },
    {
      id: 3,
      name: "Gaming Laptop",
      price: "$999",
      image: "https://images.pexels.com/photos/18105/pexels-photo.jpg"
    },
    {
      id: 4,
      name: "Mobile Phone",
      price: "$699",
      image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9"
    }
  ];

  return (
    <div className="App">

      <header className="header">
        <h1>Trend Store</h1>
        <p>Your One Stop Shopping Destination</p>
      </header>

      <section className="products">

        {products.map((product) => (
          <div className="card" key={product.id}>
            <img src={product.image} alt={product.name} />
            <h2>{product.name}</h2>
            <p>{product.price}</p>
            <button>Buy Now</button>
          </div>
        ))}

      </section>

    </div>
  );
}

export default App;