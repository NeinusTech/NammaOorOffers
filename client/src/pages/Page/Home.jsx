import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import "../../styles/Home.css";

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Namma Ooru Offers | Discover Local Deals Near You</title>
        <meta
          name="description"
          content="Explore exclusive coupons and store offers from your favorite local shops, restaurants, fashion outlets, and more on Namma Ooru Offers."
        />
        <meta
          name="keywords"
          content="local offers, coupons, Namma Ooru, store deals, discounts Tamil Nadu"
        />
        <meta property="og:title" content="Namma Ooru Offers | Local Deals" />
        <meta
          property="og:description"
          content="Your destination for local coupons and store discounts."
        />
        <meta
          property="og:image"
          content="https://nammaooruoffers.com/assets/og-image.png"
        />
        <meta property="og:url" content="https://nammaooruoffers.com/" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>
      <div className="home-container">
        <header className="hero-banner">
          <div className="hero-content">
            <h1 className="hero-title">
              Discover the Best Local Deals Around You
            </h1>
            <p className="hero-text">
              Your go-to destination for exclusive offers from stores in your
              city and nearby towns.
            </p>
            <Link to="/offers" className="hero-button">
              Start Exploring Offers
            </Link>
          </div>
        </header>

        <section className="value-proposition">
          <div className="section-container">
            <h2 className="section-heading">
              Support Local. Save Big. Shop Smart.
            </h2>
            <p className="section-text">
              From daily essentials to lifestyle deals — explore the hottest
              discounts from trusted local businesses, all in one place.
            </p>
          </div>
        </section>

        <section className="category-showcase">
          <div className="section-container">
            <h2 className="section-heading">Popular Categories</h2>
            <div className="category-grid">
              {[
                { emoji: "🥘", name: "Food & Restaurants" },
                { emoji: "👗", name: "Fashion & Lifestyle" },
                { emoji: "🛒", name: "Grocery & Essentials" },
                { emoji: "📱", name: "Mobile & Electronics" },
                { emoji: "🧴", name: "Health & Beauty" },
                { emoji: "🏠", name: "Home & Living" },
              ].map((category, index) => (
                <div key={index} className="category-card">
                  <span className="category-emoji">{category.emoji}</span>
                  <span className="category-name">{category.name}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Home;
