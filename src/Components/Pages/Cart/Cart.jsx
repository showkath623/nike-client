import './Cart.css';
import { useState, useEffect, useContext } from 'react';
import { CartContext } from '../../../assets/Context/CartContext';
import axios from 'axios';
import trash from '../../../assets/homeimg/trashicon.png';
import { Link } from 'react-router-dom';

const CartPage = () => {
  const { cartItems, setCartItems} = useContext(CartContext);
  const [productDetails, setProductDetails] = useState([]);

  const fetchProductsForCart = async (items) => {
    const productFetches = items.map(async (item) => {
      try {
        return await axios.get(`http://localhost:5000/api/products/${item._id}`);
      } catch {
        try {
          return await axios.get(`http://localhost:5000/api/menshoe/${item._id}`);
        } catch {
          return await axios.get(`http://localhost:5000/api/men/${item._id}`);
        }
      }
    });

    const products = await Promise.all(productFetches);
    return products.map(product => product.data);
  };

  useEffect(() => {
    const fetchCart = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/carts');
        setCartItems(response.data.items);

        const products = await fetchProductsForCart(response.data.items);
        setProductDetails(products);
      } catch (error) {
        console.error('Error fetching cart:', error);
      }
    };

    fetchCart();
  }, [setCartItems]);

  const handleRemoveFromCart = async (productId) => {
    try {
      await axios.delete('http://localhost:5000/api/carts', {
        data: { productId }
      });
      setCartItems(prevItems => prevItems.filter(item => item._id !== productId));
      setProductDetails(prevDetails => prevDetails.filter(product => product._id !== productId));
    } catch (error) {
      console.error('Error removing item from cart:', error);
    }
  };
  
  const handleQuantityChange = async (productId, newQuantity) => {
    if (newQuantity < 1) return;

    try {
      await axios.put('http://localhost:5000/api/carts', { productId, quantity: newQuantity });
      setCartItems(prevItems =>
        prevItems.map(item =>
          item._id === productId ? { ...item, quantity: newQuantity } : item
        )
      );
    } catch (error) {
      console.error('Error updating quantity:', error);
    }
  };

  if (productDetails.length === 0 && cartItems.length > 0) {
    return <div className="empty-cart">Loading...</div>;
  }

  if (productDetails.length === 0 && cartItems.length === 0) {
    return <div className="empty-cart">Your bag is empty</div>;
  }

  const totalPrice = productDetails.reduce((total, product) => {
    const cartItem = cartItems.find(item => item._id === product._id);
    const price = parseFloat(product.price.replace('₹', '').replace(',', ''));
    return total + price * (cartItem ? cartItem.quantity : 1);
  }, 0);

  return (
    <div className="cart-page">
      <div className="cart-left">
        <h2>Bag</h2>
        <div className="cart-items">
          {productDetails.map((product, index) => {
            const cartItem = cartItems.find(item => item._id === product._id);
            return (
              <div key={index} className="cart-item">
                <img
                  src={`http://localhost:5000/images/${product.images[0]}`}
                  alt={product.title}
                  className="cart-item-image"
                />
                <div className="cart-item-details">
                  <h3>{product.title}</h3>
                  <p>{product.usage}</p>
                  <p className="cart-item-price">{product.price}</p>
                  <p className='quantity-container'>
                    Quantity: 
                    <input
                      type="number"
                      value={cartItem ? cartItem.quantity : 1}
                      onChange={(e) => handleQuantityChange(product._id, parseInt(e.target.value))}
                      min="1"
                    />
                  </p>
                </div>
                <button className="remove-btn" onClick={() => handleRemoveFromCart(product._id)}>
                  <img src={trash} alt="Remove" />
                </button>
              </div>
            );
          })}
        </div>
      </div>

      <div className="cart-right">
        <div className="cart-summary">
          <h3>Summary</h3>
          <p>Total Price: ₹{totalPrice.toLocaleString()}</p>
          <hr />
          {/* Pass productDetails and totalPrice via Link's state */}
          <Link
            to='/checkout'
          >
            <button className="checkout-btn">Proceed to Checkout</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
