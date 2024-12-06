import './Kids.css';
import { Link } from 'react-router-dom';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { useState, useEffect } from 'react';
import { getMenProducts,getMenShoes } from '../../../../Services/apiservices'; 
import kidsad from '../../../../assets/homeimg/kidsad.mp4'
import kids1 from '../../../../assets/homeimg/kids1.png'
import kids2 from '../../../../assets/homeimg/kids2.jpg'
import kids3 from '../../../../assets/homeimg/kids3.png'

const responsive = {
  superLargeDesktop: { breakpoint: { max: 4000, min: 1024 }, items: 4 },
  desktop: { breakpoint: { max: 1024, min: 768 }, items: 3 },
  tablet: { breakpoint: { max: 768, min: 464 }, items: 2 },
  mobile: { breakpoint: { max: 464, min: 0 }, items: 1 }
};

const Kids = () => {
  const [menProductsData, setMenProductsData] = useState([]);
  const[menShoeData,setMenShoeData] = useState([]);

  useEffect(() => {
    const fetchMenProducts = async () => {
      try {
        const productsData = await getMenProducts();
        setMenProductsData(productsData);
      } catch (error) {
        console.error('Error fetching men products:', error);
      }
    };

    fetchMenProducts();
  }, []);

  useEffect(() => {
    const fetchMenShoes = async () => {
      try {
        const menShoeData = await getMenShoes();
        setMenShoeData(menShoeData);
      } catch (error) {
        console.error('Error fetching men products:', error);
      }
    };

    fetchMenShoes();
  }, []);



  return (
    <div className='kids'>
      
        

      <video autoPlay loop muted className="women-video">
          <source src={kidsad} type="video/mp4" />
          
        </video>
        <div className="featured">
        <div className="images">
          <img src={kids1} alt="Running shoes" />
          <p>Shop</p>
        </div>
        <div className="images">
          <img src={kids2} alt="Freak shoes" />
          <p>Shop</p>
        </div>
        <div className="images">
          <img src={kids3} alt="T-shirt" />
          <p>Shop</p>
        </div>
      </div>

      <h1 className='heading'>Football Essentials</h1>

      <Carousel responsive={responsive}>
        {menProductsData.map(product => (
          <Link key={product._id} to={`/product/${product._id}`} className="foot-card">
            <img src={`http://localhost:5000/images/${product.images[0]}`} alt={product.title} />
            <h2>{product.title}</h2>
            <h3>{product.usage}</h3>
            <p>MRP: {product.price}</p>
          </Link>
        ))}
      </Carousel>
      <h2 className='heading2'>Discover Icons</h2>

      <Carousel responsive={responsive}>
        {menShoeData.map(shoe => (
          <Link key={shoe._id} to={`/product/${shoe._id}`} className="menshoe">
            <img src={`http://localhost:5000/images/${shoe.images[0]}`} alt={shoe.title} />
            <h2>{shoe.title}</h2>
            
          </Link>
        ))}
      </Carousel>

      
    </div>
  );
};

export default Kids;
