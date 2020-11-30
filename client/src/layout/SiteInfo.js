import React from "react";

const SiteInfo = () => {
  return (
    <section id="site-info-container">
      <div id="site-info">
        <h3>Fashion</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt cilisis.
        </p>
        <div id="credit-cards">
          <i className="material-icons">credit_card</i>
          <i className="material-icons">credit_card</i>
          <i className="material-icons">credit_card</i>
          <i className="material-icons">credit_card</i>
        </div>
      </div>
      <div id="quick-links">
        <h4>Quick Links</h4>
        <a href="#">About</a>
        <a href="#">Blogs</a>
        <a href="#">Contact</a>
        <a href="#">FAQ</a>
      </div>
      <div id="account">
        <h4>My Account</h4>
        <a href="#">My Account</a>
        <a href="#">Orders Tracking</a>
        <a href="#">Checkout</a>
        <a href="#">Wishlist</a>
      </div>
      <div id="newsletter-social">
        <h4>Newsletter</h4>
        <form id="email-form">
          <input
            id="email-input"
            type="email"
            name="email"
            placeholder="Email"
          />
          <button>Subscribe</button>
        </form>
        <div id="social-icons">
          <i className="material-icons">camera_alt</i>
          <i className="material-icons">camera_alt</i>
          <i className="material-icons">camera_alt</i>
          <i className="material-icons">camera_alt</i>
          <i className="material-icons">camera_alt</i>
        </div>
      </div>
    </section>
  );
};

export default SiteInfo;
