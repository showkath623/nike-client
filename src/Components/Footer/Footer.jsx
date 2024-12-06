import './Footer.css';
import global from '../../assets/homeimg/global.png';
import { logout } from '../../Components/Pages/Registration/Signup/firebaseconfig'; 

const Footer = () => {
  
  // Handle logout
  const handleLogout = async () => {
    try {
      await logout();
      console.log("User logged out");
    } catch (err) {
      console.error("Error logging out:", err.message);
    }
  };

  return (
    <div>
      <hr />
      <div className="footer">
        <div className="sections">
          <h4>Resources</h4>
          <p>Find A Store</p>
          <p>Become A member</p>
          <p>Send us Feedback</p>
        </div>
        <div className="sections">
          <h4>Help</h4>
          <p>Get Help</p>
          <p>Order Status</p>
          <p>Delivery</p>
          <p>Returns</p>
          <p>Payment Options</p>
          <p>Contact Us On Nike.com Inquiries</p>
          <p>Contact Us On All Other Inquiries</p>
        </div>
        <div className="sections">
          <h4>Company</h4>
          <p>About Nike</p>
          <p>News</p>
          <p>Careers</p>
          <p>Investors</p>
          <p>Sustainability</p>
        </div>

        <div className="region">
          <img src={global} alt="Global" />
          <p>India</p>
        </div>
        
        <div className="last">
          <h4>© 2024 Nike, Inc. All rights reserved</h4>
          <h4>Guides</h4>
          <h4>Terms of Sale</h4>
          <h4>Terms of Use</h4>
          <h4>Nike Privacy Policy</h4>
        </div>

        {/* Adding the logout button */}
        <div className="logout-section">
          <button className="logout-btn" onClick={handleLogout}>
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Footer;
