import React from "react";
import { Helmet } from "react-helmet";
import { FaWallet, FaHandHoldingHeart, FaShieldAlt, FaMapMarkedAlt } from "react-icons/fa";
import "../../styles/WhyUs.css";

const WhyUs = () => {
  return (
    <>
      <Helmet>
        <title>Why Choose Us | Namma Ooru Offers</title>
        <meta
          name="description"
          content="Discover why thousands trust Namma Ooru Offers to find verified local deals and support small businesses in their neighborhoods."
        />
      </Helmet>

      <div className="whyus-container">
        <header className="whyus-header">
          <h1>Why Choose Namma Ooru Offers?</h1>
          <p>Your trusted source for authentic local deals, verified discounts, and community savings.</p>
        </header>

        <section className="whyus-grid">
          <div className="whyus-card">
            <FaWallet className="whyus-icon" />
            <h3>Save More Every Day</h3>
            <p>Access exclusive discounts from local businesses and save on everything from food to fashion, daily essentials, and services.</p>
          </div>

          <div className="whyus-card">
            <FaHandHoldingHeart className="whyus-icon" />
            <h3>Support Local Economy</h3>
            <p>We help local shops grow by connecting them to nearby customers. Every redemption supports your neighborhood’s economy.</p>
          </div>

          <div className="whyus-card">
            <FaShieldAlt className="whyus-icon" />
            <h3>Verified & Trusted Offers</h3>
            <p>All deals are manually approved and updated by store owners. No expired links or fake discounts — just real savings.</p>
          </div>

          <div className="whyus-card">
            <FaMapMarkedAlt className="whyus-icon" />
            <h3>Smart Location-Based Results</h3>
            <p>Our platform shows you deals nearby using your location and preferences. Perfect for last-minute shopping plans.</p>
          </div>
        </section>
      </div>
    </>
  );
};

export default WhyUs;
