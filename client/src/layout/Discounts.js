import React from "react";

const Discounts = () => {
  return (
    <section id="discount-info-container">
      <div id="discount-img">img</div>
      <div id="discount-info">
        <div id="discount-circle">
          <span id="d-circle"></span>
          <p>Discount</p>
          <h2>Summer 2019</h2>
          <h6 className="discount-sale">
            Sale <span>50%</span>
          </h6>
        </div>
        <div id="discount-countdown">
          <div className="countdown">
            <span>29</span>
            <span>Day</span>
          </div>
          <div className="countdown">
            <span>11</span>
            <span>Hour</span>
          </div>
          <div className="countdown">
            <span>45</span>
            <span>Min</span>
          </div>
          <div className="countdown">
            <span>30</span>
            <span>Sec</span>
          </div>
        </div>
        <div id="discount-shop-now" className="bordered-link">
          Shop Now
        </div>
      </div>
      <div id="discount-guarantees">
        <div className="guarantee">
          <i className="material-icons guarantee-icon">directions_car</i>
          <div className="guarantee-info">
            <h4>Free Shipping</h4>
            <p>For all orders over $99</p>
          </div>
        </div>

        <div className="guarantee">
          <i className="material-icons guarantee-icon">local_atm</i>
          <div className="guarantee-info">
            <h4>Money Back Guarantee</h4>
            <p>If goods have problems</p>
          </div>
        </div>

        <div className="guarantee">
          <i className="material-icons guarantee-icon">support</i>
          <div className="guarantee-info">
            <h4>Online Support 24/7</h4>
            <p>Dedicated Support</p>
          </div>
        </div>

        <div className="guarantee">
          <i className="material-icons guarantee-icon">headphones</i>
          <div className="guarantee-info">
            <h4>Payment Secure</h4>
            <p>100% Secure Payment</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Discounts;
