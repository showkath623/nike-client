import './App.css';
import { useEffect, useState } from 'react';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import Signup from './Components/Pages/Registration/Signup/Signup'; 
import Featured from "./Components/Featured/Featured";
import Footer from "./Components/Footer/Footer";
import Hero from "./Components/Hero/Hero";
import Navbar from "./Components/Navbar/Navbar";
import Navbar2 from "./Components/Navbar2/Navbar2";
import CartPage from './Components/Pages/Cart/Cart.jsx';
import Men from './Components/Pages/Categories/Men/Men.jsx';
import ProductPage from "./Components/Pages/Product-page/ProductPage.jsx";
import Spotlight from "./Components/Spotlight/Spotlight";
import Topbar from "./Components/TopBar/Topbar";
import Trending from "./Components/Trending/Trending";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ShoeComponent from './Components/Pages/Shoes/Shoes.jsx';
import CheckoutPage from './Components/Pages/Checkout/Checkout.jsx';
import Sportshop from './Components/Sportshop/Sportshop.jsx';
import Women from './Components/Pages/Categories/Women/Women.jsx';
import Kids from './Components/Pages/Categories/Kids/Kids.jsx';

const App = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const auth = getAuth();
    
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });

    return () => unsubscribe(); 
  }, []);

  return (
    <Router>
      <div>
        {user ? ( 
          <>
            <Topbar />
            <Navbar />
            <Navbar2 />
            <Routes>
              <Route path="/" element={
                <>
                  <Hero />
                  <Featured />
                  <Spotlight />
                  <Sportshop/>
                  <Trending />
                </>
              } />
              <Route path="/product/:id" element={<ProductPage />} />
              <Route path="/cart" element={<CartPage />} />
              <Route path='/men' element={<Men />} />
              <Route path='/women' element={<Women />} />
              <Route path='/kids' element={<Kids />} />
              <Route path='/shoes' element={<ShoeComponent />}></Route>
              <Route path='/checkout' element={<CheckoutPage />} />
            </Routes>
            <Footer />
          </>
        ) : (
          <Signup />
        )}
      </div>
    </Router>
  );
};

export default App;
