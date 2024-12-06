import { useEffect, useState } from 'react';
import { getProducts, getMenProducts, getMenShoes } from '../../../Services/apiservices'; 
import './Shoes.css';
import { Link } from 'react-router-dom';
import Sidebar from './Sidebar';

const ShoeComponent = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetching products from all three categories
        const productData = await getProducts();
        const menProductsData = await getMenProducts();
        const menShoesData = await getMenShoes();

        // Combine all fetched products
        const allProducts = [...productData, ...menProductsData, ...menShoesData];

        setProducts(allProducts);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchData();
  }, []);

  return (
    
    <div className="shoe-container">
      
      <Sidebar/>
      

      <div className="shoe-list">
        {products.length === 0 ? (
          <p>Loading products...</p>
        ) : (
          products.map((product) => (
            <Link key={product._id} to={`/product/${product._id}`} className="shoe-item">
              <img src={`http://localhost:5000/images/${product.images[0]}`} alt={product.title} />
              <h3>{product.title}</h3>
              <p>{product.usage}</p>
              <p>Price: ₹{product.price}</p>
            </Link>
          ))
        )}
      </div>
    </div>
  );
};

export default ShoeComponent;
