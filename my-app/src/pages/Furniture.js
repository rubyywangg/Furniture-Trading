import React, { useState } from 'react';
import './Furniture.css';
import MainHeader from '../components/MainHeader';
import { Link } from 'react-router-dom';

function Furniture() {
  const [filters, setFilters] = useState({
    item: '',
    university: '',
    minPrice: '',
    maxPrice: '',
    lastListed: '',
    condition: {
      new: false,
      used: false,
    },
  });

  const handleFilterChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFilters((prevFilters) => ({
      ...prevFilters,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  return (
    <div className='ListingsPage grainy'>
      <MainHeader />
      <div className="main-content">
        <FilterSidebar filters={filters} onFilterChange={handleFilterChange} />
        <Listings filters={filters} />
      </div>
    </div>
  );
}

function FilterSidebar({ filters, onFilterChange }) {
  return (
    <div className="filter-sidebar">
      <h2>Filters</h2>
      <div className="filter-group">
        <h3>Item</h3>
        <input
          type="text"
          name="item"
          value={filters.item}
          onChange={onFilterChange}
          placeholder="Search items"
        />
      </div>
      <div className="filter-group">
        <h3>University</h3>
        <input
          type="text"
          name="university"
          value={filters.university}
          onChange={onFilterChange}
          placeholder="Search universities"
        />
      </div>
      <div className="filter-group">
        <h3>Price</h3>
        <input
          type="number"
          name="minPrice"
          value={filters.minPrice}
          onChange={onFilterChange}
          placeholder="Min price"
        />
        <input
          type="number"
          name="maxPrice"
          value={filters.maxPrice}
          onChange={onFilterChange}
          placeholder="Max price"
        />
      </div>
      <div className="filter-group">
        <h3>Last Listed</h3>
        <input
          type="date"
          name="lastListed"
          value={filters.lastListed}
          onChange={onFilterChange}
          placeholder="Date"
        />
      </div>
      <div className="filter-group">
        <h3>Condition</h3>
        <label>
          <input
            type="checkbox"
            name="new"
            checked={filters.condition.new}
            onChange={(e) => {
              const { name, checked } = e.target;
              onFilterChange({
                target: { name: `condition.${name}`, type: 'checkbox', checked },
              });
            }}
          />
          New
        </label>
        <label>
          <input
            type="checkbox"
            name="used"
            checked={filters.condition.used}
            onChange={(e) => {
              const { name, checked } = e.target;
              onFilterChange({
                target: { name: `condition.${name}`, type: 'checkbox', checked },
              });
            }}
          />
          Used
        </label>
      </div>
    </div>
  );
}

function Listings({ filters }) {
  const items = [
    { img: "images/couch.png", title: "Couch Chair", description: "Used all of first year. Small ketchup stain on left arm rest.", price: "Free", availability: "Available" },
    { img: "images/plant.png", title: "Plant", description: "Requires minimal sunlight and watering.", price: "$50", availability: "Available" },
    { img: "images/mirror.png", title: "Body Mirror", description: "5ft mirror. Small crack on bottom left corner.", price: "$40", availability: "Unavailable" },
    { img: "images/bed.png", title: "Bed Frame", description: "Full sized bedframe. Used like new.", price: "$150", availability: "Available" },
    { img: "images/couch.png", title: "Couch Chair", description: "Used all of first year. Small ketchup stain on left arm rest.", price: "Free", availability: "Available" },
    { img: "images/plant.png", title: "Plant", description: "Requires minimal sunlight and watering.", price: "$50", availability: "Unavailable" },
    { img: "images/mirror.png", title: "Body Mirror", description: "5ft mirror. Small crack on bottom left corner.", price: "$40", availability: "Available" },
    { img: "images/bed.png", title: "Bed Frame", description: "Full sized bedframe. Used like new.", price: "$150", availability: "Available" },
    { img: "images/couch.png", title: "Couch Chair", description: "Used all of first year. Small ketchup stain on left arm rest.", price: "Free", availability: "Available" },
    { img: "images/plant.png", title: "Plant", description: "Requires minimal sunlight and watering.", price: "$50", availability: "Available" },
    { img: "images/mirror.png", title: "Body Mirror", description: "5ft mirror. Small crack on bottom left corner.", price: "$40", availability: "Available" },
    { img: "images/bed.png", title: "Bed Frame", description: "Full sized bedframe. Used like new.", price: "$150", availability: "Unavailable" },
    // Add more items here
  ];

  const filteredItems = items.filter(item => {
    if (filters.item && !item.title.toLowerCase().includes(filters.item.toLowerCase())) return false;
    if (filters.minPrice && parseFloat(item.price.replace('$', '')) < parseFloat(filters.minPrice)) return false;
    if (filters.maxPrice && parseFloat(item.price.replace('$', '')) > parseFloat(filters.maxPrice)) return false;
    if (filters.condition.new && !item.description.toLowerCase().includes('new')) return false;
    if (filters.condition.used && !item.description.toLowerCase().includes('used')) return false;
    return true;
  });

  return (
    <div className="listings-container">
      {filteredItems.map((item, index) => (
        <Link to='/demoPostPage' key={index}>
          <div className="card">
            <img src={item.img} alt={item.title}></img>
            <div className="card-body">
              <div className={`availability ${item.availability.toLowerCase()}`}>{item.availability}</div>
              <div className="card-title">{item.title}</div>
              <div className="card-description">{item.description}</div>
              <div className="card-price">{item.price}</div>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}

export default Furniture;
