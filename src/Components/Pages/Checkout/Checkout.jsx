import './Checkout.css';

const CheckoutPage = () => {
    return (
        <div className="checkout-container">
            <h1 className="checkout-title">Checkout</h1>
            <div className="checkout-details">
                <h2 className="checkout-subtitle">Shipping Information</h2>
                <form className="checkout-form">
                    <div className="checkout-form-group">
                        <label className="checkout-label" htmlFor="name">Full Name</label>
                        <input className="checkout-input" type="text" id="name" required />
                    </div>
                    <div className="checkout-form-group">
                        <label className="checkout-label" htmlFor="email">Email</label>
                        <input className="checkout-input" type="email" id="email" required />
                    </div>
                    <div className="checkout-form-group">
                        <label className="checkout-label" htmlFor="address">Address</label>
                        <input className="checkout-input" type="text" id="address" required />
                    </div>
                    <div className="checkout-form-group">
                        <label className="checkout-label" htmlFor="city">City</label>
                        <input className="checkout-input" type="text" id="city" required />
                    </div>
                    <div className="checkout-form-group">
                        <label className="checkout-label" htmlFor="zipcode">Zip Code</label>
                        <input className="checkout-input" type="text" id="zipcode" required />
                    </div>
                    <div className="checkout-form-group">
                        <label className="checkout-label" htmlFor="country">Country</label>
                        <input className="checkout-input" type="text" id="country" required />
                    </div>
                    <button className="checkout-button" type="submit">Proceed To Pay</button>
                </form>
            </div>
        </div>
    );
};

export default CheckoutPage;
