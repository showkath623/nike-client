import axios from 'axios';

const API_URL = 'http://localhost:5000/api/products';
const MEN_URL = 'http://localhost:5000/api/products'; 
const MENSHOE_URL = 'http://localhost:5000/api/products';
const CART_URL = 'http://localhost:5000/api/products';

// Fetch all products
export const getProducts = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    console.error('Error fetching products:', error);
    throw error;
  }
};

// Fetch a single product by ID
export const getProductById = async (id) => {
  try {
    const response = await axios.get(`${API_URL}/${id}`); 
    return response.data;
  } catch (error) {
    console.error('Error fetching product by ID:', error);
    throw error;
  }
};

// Fetch cart data
export const getCart = async () => {
  try {
    const response = await axios.get(CART_URL);
    return response.data;
  } catch (error) {
    console.error('Error fetching cart:', error);
    throw error;
  }
};

// Remove an item from the cart
export const removeFromCart = async (productId) => {
  try {
    await axios.delete(CART_URL, {
      data: { productId } // Sending productId in the body of the request
    });
  } catch (error) {
    console.error('Error removing item from cart:', error);
    throw error;
  }
};

// Fetching menProduct
export const getMenProducts = async () => {
  try {
    const response = await axios.get(MEN_URL);
    return response.data;
  } catch (error) {
    console.error('Error fetching products:', error);
    throw error;
  }
};

// Fetch menProduct by ID
export const getMenProductById = async (id) => {
  try {
    const response = await axios.get(`http://localhost:5000/api/men/${id}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching men product by ID:', error);
    throw error;
  }
};

// Fetch men shoes
export const getMenShoes = async () => {
  try {
    const response = await axios.get(MENSHOE_URL);
    return response.data;
  } catch (error) {
    console.error('Error fetching products:', error);
    throw error;
  }
};

// Fetch men shoe by ID
export const getMenShoeById = async (id) => {
  try {
    const response = await axios.get(`http://localhost:5000/api/menshoe/${id}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching men product by ID:', error);
    throw error;
  }
};
