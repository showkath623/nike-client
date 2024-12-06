import './ProductPage.css';
import like from '../../../assets/homeimg/heart.png';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getMenProductById, getMenShoeById, getProductById } from '../../../Services/apiservices'; 
import axios from 'axios';

const ProductPage = () => {
  const { id } = useParams();
  const [productDetails, setProductDetails] = useState(null);
  const [mainImage, setMainImage] = useState('');
  const [cartMessage, setCartMessage] = useState('');

  // Fetch product based on ID (men product)
  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const product = await getProductById(id);  // Fetch regular product
        setProductDetails(product);
        setMainImage(product.images[0]);
      } catch (error) {
        console.error('Error fetching product:', error);
      }
    };
    fetchProduct();
  }, [id]);

  // Fetch men product by ID
  useEffect(() => {
    const fetchMenProduct = async () => {
      try {
        const product = await getMenProductById(id);  // Fetch men product
        setProductDetails(product);
        setMainImage(product.images[0]);
      } catch (error) {
        console.error('Error fetching men product:', error);
      }
    };
    fetchMenProduct();
  }, [id]);

  // Fetch men shoe by ID
  useEffect(() => {
    const fetchMenShoe = async () => {
      try {
        const product = await getMenShoeById(id);  // Fetch men shoe
        setProductDetails(product);
        setMainImage(product.images[0]);
      } catch (error) {
        console.error('Error fetching men shoe:', error);
      }
    };
    fetchMenShoe();
  }, [id]);

  // Function to handle adding product to cart
  const addToCart = async () => {
    try {
      // Extract only the necessary fields from productDetails
      const productData = {
        _id: productDetails._id,
        name: productDetails.title,
        price: productDetails.price, 
        quantity: 1
      };
  
     
      console.log('Sending product data:', productData);
  
     
      const response = await axios.post('http://localhost:5000/api/carts', {
        product: productData
      });
  
      if (response.status === 200) {
        setCartMessage('Product added to cart successfully!');
      }
    } catch (error) {
      console.error('Error adding product to cart:', error);
      setCartMessage('Failed to add product to cart.');
    }
  };
  
  if (!productDetails) return <div>Product not found</div>;

  const handleImageClick = (image) => {
    setMainImage(image);
  };

  return (
    <div className='productpage'>
      <div className="left">
        <div className="imgsel">
          {productDetails.images.map((image, index) => (
            <img
              key={index}
              src={`http://localhost:5000/images/${image}`}
              alt={`Shoe ${index + 1}`}
              onClick={() => handleImageClick(image)}
            />
          ))}
        </div>

        <div className="image">
          <img src={`http://localhost:5000/images/${mainImage}`} alt="Main" />
        </div>
      </div>

      <div className="right-side">
        <div className="title">
          <h2>{productDetails.title}</h2>
          <p>{productDetails.usage}</p>
        </div>
        <div className="price">
          <p className='currentprice'>{productDetails.price}</p>
          <p className='mrp'>MRP : ₹ 9999.00</p>
          <div className='tax'>
            <p>Inclusive of all taxes</p>
            <p>(Also includes all applicable duties)</p>
          </div>
        </div>

        <div className="size">
          <button>UK 5</button>
          <button>UK 6</button>
          <button>UK 7</button>
          <button>UK 8</button>
        </div>

        <div className="action-but">
          <button className='buynow' onClick={addToCart}>Add To Cart</button>
          <button className='fav'>
            Favourite <img src={like} alt="Favorite icon" />
          </button>
        </div>

        {cartMessage && <div className="cart-message">{cartMessage}</div>}

        <div className='description'>
          <p>{productDetails.description}</p>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
