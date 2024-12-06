import './Spotlight.css';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getProducts } from '../../Services/apiservices';
import Carousel from 'react-multi-carousel';

const responsive = {
  superLargeDesktop: { breakpoint: { max: 4000, min: 1024 }, items: 5 },
  desktop: { breakpoint: { max: 1024, min: 768 }, items: 5 },
  tablet: { breakpoint: { max: 768, min: 464 }, items: 3 },
  mobile: { breakpoint: { max: 464, min: 0 }, items: 1 }
};

const Spotlight = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const productsData = await getProducts();
        setProducts(productsData);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div>
      <h2 className='heading'>Classics Spotlight</h2>

      <div className="classics"></div>
      <Carousel responsive={responsive} >
      
        {products.map(product => (
          <Link key={product._id} className='one' to={`/product/${product._id}`}>
            <div className="cards">
              <img src={`http://localhost:5000/images/${product.images[0]}`} alt={product.title} />
              <h1>{product.title}</h1>
            </div>
          </Link>
        ))}
        
      
      </Carousel>
    </div>
  );
};

export default Spotlight;












