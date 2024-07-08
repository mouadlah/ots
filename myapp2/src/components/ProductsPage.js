import React, { useState } from 'react';
import './ProductsPage.css';
import W3 from '../images/W3.png';
import M2 from '../images/M2.png';
import T2 from '../images/T2.png';
import T5 from '../images/T5.png';
import T6 from '../images/T6.png';
import T8 from '../images/T8.png';


const products = [
  {
    id: 1,
    name: 'CleanBot 3000',
    category: 'cleaning',
    description: 'Efficient and silent cleaning robot with advanced navigation.',
    features: ['Advanced Navigation', 'Long Battery Life', 'Remote Control'],
    price: 1500,
    image: W3
  },
  {
    id: 2,
    name: 'GuardBot Pro',
    category: 'security',
    description: 'High-tech security robot with real-time surveillance.',
    features: ['Real-time Surveillance', 'Motion Detection', '24/7 Monitoring'],
    price: 2500,
    image: M2
  },
  {
    id: 3,
    name: 'DeliveryBot X',
    category: 'service',
    description: 'Reliable delivery robot with secure package compartment.',
    features: ['Secure Package Compartment', 'GPS Tracking', 'Autonomous Navigation'],
    price: 1800,
    image: T2
  },
  {
    id: 4,
    name: 'ServiceBot 800',
    category: 'service',
    description: 'Versatile service robot with user-friendly touch screen interface.',
    features: ['Touch Screen Interface', 'Voice Command', 'Multi-purpose Use'],
    price: 2200,
    image: T5
  },
  {
    id: 5,
    name: 'CleanBot Pro',
    category: 'cleaning',
    description: 'Advanced cleaning robot with multiple cleaning modes.',
    features: ['Multiple Cleaning Modes', 'Automatic Charging', 'Remote Control'],
    price: 2000,
    image: T6
  },
  {
    id: 6,
    name: 'SecurityBot X',
    category: 'security',
    description: 'High-performance security robot with advanced AI.',
    features: ['Advanced AI', 'Motion Detection', '24/7 Monitoring'],
    price: 3000,
    image: T8
  }
];

function ProductsPage() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [maxPrice, setMaxPrice] = useState('');

  const filteredProducts = products.filter(product => {
    return (selectedCategory === 'all' || product.category === selectedCategory) &&
           (maxPrice === '' || product.price <= maxPrice);
  });

  return (
    <div className="products-page">
      <aside className="filter-sort">
        <h3>Filter & Sort</h3>
        <div className="filter-category">
          <label>Category</label>
          <select value={selectedCategory} onChange={e => setSelectedCategory(e.target.value)}>
            <option value="all">All</option>
            <option value="cleaning">Cleaning</option>
            <option value="service">Service</option>
            <option value="security">Security</option>
          </select>
        </div>
        <div className="filter-price">
          <label>Price Range</label>
          <input
            type="number"
            value={maxPrice}
            onChange={e => setMaxPrice(e.target.value)}
            placeholder="Enter max price"
          />
        </div>
      </aside>
      <main className="product-list">
        {filteredProducts.map(product => (
          <div key={product.id} className="product-card">
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <p>{product.description}</p>
            <ul>
              {product.features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
            <p className="price">${product.price}</p>
          </div>
        ))}
      </main>
    </div>
  );
}

export default ProductsPage;
