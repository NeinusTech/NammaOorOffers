import React from "react";
import {
  FaStore,
  FaCheckCircle,
  FaMapMarkerAlt,
  FaSearchLocation,
  FaFilter,
  FaInfoCircle,
  FaShoppingBag,
  FaRedo,
} from "react-icons/fa";
import { Helmet } from "react-helmet";
import "../../styles/About.css";

const About = () => {
  return (
    <>
      <Helmet>
        <title>
          About Us | Namma Ooru Offers – Local Coupons & Store Deals
        </title>
        <meta
          name="description"
          content="Learn about Namma Ooru Offers — a trusted platform connecting users with verified local coupons and exclusive neighborhood store deals. See how it works."
        />
        <meta
          name="keywords"
          content="about local coupons, Tamil Nadu store deals, Namma Ooru Offers, how coupon platform works"
        />

        {/* Open Graph tags for Facebook/LinkedIn */}
        <meta property="og:title" content="About Namma Ooru Offers" />
        <meta
          property="og:description"
          content="Discover how our platform connects you with verified local store coupons and helps you save on nearby purchases."
        />
        <meta
          property="og:image"
          content="https://nammaooruoffers.com/assets/og-image.png"
        />
        <meta property="og:url" content="https://nammaooruoffers.com/about" />
        <meta property="og:type" content="website" />

        {/* Twitter preview */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="About Namma Ooru Offers" />
        <meta
          name="twitter:description"
          content="Explore what makes Namma Ooru Offers a unique platform for discovering and redeeming local store deals in your area."
        />
        <meta
          name="twitter:image"
          content="https://nammaooruoffers.com/assets/og-image.png"
        />
      </Helmet>
      <div className="about-container">
        {/* Features Section with detailed explanations */}
        <section className="features-section">
          <div className="section-header">
            <h2 className="section-title">What We Offer</h2>
            <p className="section-subtitle">
              Our platform connects you with the best local businesses while
              helping you save money
            </p>
          </div>

          <ul className="feature-list">
            <li className="feature-item">
              <span className="feature-icon">
                <FaStore />
              </span>
              <div className="feature-content">
                <h3>Exclusive Neighborhood Offers</h3>
                <p>
                  Access special discounts available only through our platform
                  from shops within walking distance of your location. We
                  partner directly with merchants to bring you deals you won't
                  find anywhere else.
                </p>
              </div>
            </li>

            <li className="feature-item">
              <span className="feature-icon">
                <FaCheckCircle />
              </span>
              <div className="feature-content">
                <h3>Verified Merchant Deals</h3>
                <p>
                  Every deal is confirmed directly with store owners to ensure
                  accuracy. We verify pricing, availability, and terms so you
                  never show up to find an expired promotion.
                </p>
              </div>
            </li>

            <li className="feature-item">
              <span className="feature-icon">
                <FaMapMarkerAlt />
              </span>
              <div className="feature-content">
                <h3>Nearby City Promotions</h3>
                <p>
                  Discover great deals just a short drive away in neighboring
                  towns. Our radius-based search helps you find worthwhile
                  destinations when you're willing to travel a bit further.
                </p>
              </div>
            </li>

            <li className="feature-item">
              <span className="feature-icon">
                <FaSearchLocation />
              </span>
              <div className="feature-content">
                <h3>Smart Location-Based Results</h3>
                <p>
                  Our intelligent algorithm prioritizes results based on your
                  location, preferences, and shopping habits to surface the most
                  relevant deals closest to you first.
                </p>
              </div>
            </li>
          </ul>
        </section>

        {/* How It Works Section with step details */}
        <section className="how-it-works">
          <div className="section-header">
            <h2 className="section-title">How It Works</h2>
            <p className="section-subtitle">
              Start saving money at local businesses in just a few simple steps
            </p>
          </div>

          <ul className="steps-list">
            <li className="step-item">
              <span className="step-number">1</span>
              <div className="step-content">
                <h3>Browse Stores & Categories</h3>
                <p>
                  Use our intuitive filters to narrow down offers by category
                  (food, retail, services), distance, discount percentage, or
                  special keywords. Save your favorite searches for quick access
                  later.
                </p>
                <span className="step-icon">
                  <FaFilter />
                </span>
              </div>
            </li>

            <li className="step-item">
              <span className="step-number">2</span>
              <div className="step-content">
                <h3>View Offer Details</h3>
                <p>
                  See complete deal information including discount amount,
                  applicable products/services, expiration date, any
                  restrictions, and store hours. We also display user ratings
                  and photos when available.
                </p>
                <span className="step-icon">
                  <FaInfoCircle />
                </span>
              </div>
            </li>

            <li className="step-item">
              <span className="step-number">3</span>
              <div className="step-content">
                <h3>Claim & Redeem</h3>
                <p>
                  For in-store offers, show the digital coupon on your phone or
                  mention our platform at checkout. For online purchases, we
                  provide direct links to discounted products with promo codes
                  automatically applied.
                </p>
                <span className="step-icon">
                  <FaShoppingBag />
                </span>
              </div>
            </li>

            <li className="step-item">
              <span className="step-number">4</span>
              <div className="step-content">
                <h3>Save More Over Time</h3>
                <p>
                  New deals are added daily. Create an account to get
                  personalized recommendations and notifications when your
                  favorite stores add promotions. The more you use our platform,
                  the better we get at finding deals you'll love.
                </p>
                <span className="step-icon">
                  <FaRedo />
                </span>
              </div>
            </li>
          </ul>
        </section>

        {/* Mission Statement Section */}
        <section className="mission-section">
          <h2 className="section-title">Our Mission</h2>
          <div className="mission-content">
            <p>
              We believe thriving local businesses create vibrant communities.
              Our platform bridges the gap between merchants who want to attract
              customers and shoppers looking for genuine value. By facilitating
              these connections, we help money stay in the local economy while
              giving you more purchasing power.
            </p>
            <p>
              Unlike national deal sites that take large commissions, we keep
              our fees low so merchants can offer better discounts. We're proud
              to be locally owned and operated, just like the businesses we
              feature.
            </p>
          </div>
        </section>
      </div>
    </>
  );
};

export default About;
