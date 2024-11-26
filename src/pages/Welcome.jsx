import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Welcome.css'; // Import CSS file for styling

const Welcome = () => {
    return (
        <div className="welcome-container">
            {/* Welcome Section with Fixed Background Image */}
            <div className="image-section">
                <div className="welcome-content">
                    <h1>Welcome to Vaishnavi Traders</h1>
                    <p>Your trusted partner for hardware and agricultural solutions.</p>
                    <p>From high-quality tools to top-notch agricultural products, we have everything you need.</p>

                    {/* Call-to-action buttons */}
                    <div className="cta-buttons">
                        <Link to="/products">
                            <button className="btn btn-primary mt-3">Enter Shop</button>
                        </Link>
                        <Link to="/Owner">
                            <button className="btn btn-secondary mt-3">Learn More About Us</button>
                        </Link>
                    </div>
                </div>
            </div>


            {/* Products Preview Section */}
            
            <section className="products-preview">
                <h2>Our Top Products</h2>
                <div className="product-grid">
                    <div className="product-card">
                        <div className="product-img product1"></div>
                        <h3>High-Quality Fertilizers</h3>
                        <p>Nourish your crops with our premium fertilizers.</p>
                    </div>
                    <div className="product-card">
                        <div className="product-img product2"></div>
                        <h3>Advanced Tools</h3>
                        <p>Get the best tools for efficient farming and construction.</p>
                    </div>
                    <div className="product-card">
                        <div className="product-img product3"></div>
                        <h3>Insecticides & Pesticides</h3>
                        <p>Keep your crops healthy with certified products.</p>
                    </div>
                </div>
            </section>

            {/* Services Section */}
            <section className="services-section">
                <h2>Our Services</h2>
                <div className="services-grid">
                    <div className="service-card">
                        <h3>Consultation</h3>
                        <p>Expert advice for all your agricultural needs.</p>
                    </div>
                    <div className="service-card">
                        <h3>Delivery Services</h3>
                        <p>Get products delivered straight to your farm or doorstep.</p>
                    </div>
                    <div className="service-card">
                        <h3>Special Offers</h3>
                        <p>Check out our amazing deals and discounts!</p>
                    </div>
                </div>
            </section>

            

            {/* Photo collage */}
            <section className="photo-collage-section">
                <h2>Our Gallery</h2>
                    <div className="photo-collage">
                        <div className="photo-item">
                            <div className="product-img g1"></div>
                            <div className="photo-overlay">
                                <p>Shop</p>
                            </div>
                        </div>
                        <div className="photo-item">
                            <div className="product-img g2"></div>    
                            <div className="photo-overlay">
                                <p>Loyalty</p>
                            </div>
                        </div>
                        <div className="photo-item">
                            <div className="product-img g3"></div>   
                            <div className="photo-overlay">
                                <p>Quality</p>
                            </div>
                        </div>
                        <div className="photo-item">
                            <div className="product-img g4"></div>
                            <div className="photo-overlay">
                                <p>Bond</p>
                            </div>
                        </div>
                        <div className="photo-item">
                            <div className="product-img g5"></div>    
                            <div className="photo-overlay">
                                <p>Durability</p>
                            </div>
                        </div>
                        <div className="photo-item">
                            <div className="product-img g6"></div>
                            <div className="photo-overlay">
                                <p>Legacy</p>
                            </div>
                        </div>
                        <div className="photo-item">
                            <div className="product-img g7"></div>    
                            <div className="photo-overlay">
                                <p>Prosperity</p>
                            </div>
                        </div>
                        <div className="photo-item">
                            <div className="product-img g8"></div>   
                            <div className="photo-overlay">
                                <p>Sollutions</p>
                            </div>
                        </div>
                        <div className="photo-item">
                            <div className="product-img g9"></div>
                            <div className="photo-overlay">
                                <p>Fertility</p>
                            </div>
                        </div>
                        <div className="photo-item">
                            <div className="product-img g10"></div>    
                            <div className="photo-overlay">
                                <p>Commitment</p>
                            </div>
                        </div>
                        <div className="photo-item">
                            <div className="product-img g11"></div>
                            <div className="photo-overlay">
                                <p>Satisfaction</p>
                            </div>
                        </div>
                        <div className="photo-item">
                            <div className="product-img g12"></div>    
                            <div className="photo-overlay">
                                <p>Excellence</p>
                            </div>
                        </div>
                        <div className="photo-item">
                            <div className="product-img g13"></div>   
                            <div className="photo-overlay">
                                <p>Partnership</p>
                            </div>
                        </div>
                        <div className="photo-item">
                            <div className="product-img g14"></div>
                            <div className="photo-overlay">
                                <p>Integrity</p>
                            </div>
                        </div>
                        <div className="photo-item">
                            <div className="product-img g15"></div>    
                            <div className="photo-overlay">
                                <p>Respect</p>
                            </div>
                        </div>
                        {/* Add more rows for other photos */}
                    </div>
                </section>



            {/* Testimonials Section */}
            <section className="testimonials-section">
                <h2>What Our Customers Say</h2>
                <div className="testimonial-card">
                    <p>"Vaishnavi Traders has been my go-to store for years. Their products are top-notch!"</p>
                    <span>Ramsingh Uikey- A Happy Farmer</span>
                </div>
                <div className="testimonial-card">
                    <p>"Their customer service and product variety are unbeatable!"</p>
                    <span>Arpit Bansal - Construction Professional</span>
                </div>
            </section>



            {/* Newsletter Section */}
            <section className="newsletter-section">
                <h2>Stay Updated!</h2>
                <p>Sign up for our newsletter to get the latest updates and offers.</p>
                <form className="newsletter-form">
                    <input type="email" placeholder="Enter your email" />
                    <button type="submit" className="btn btn-primary"   >Subscribe</button>
                </form>
            </section>

            {/* Footer Section */}
            <footer className="welcome-footer">
                <p>Visit our stores or shop online for convenience and quality. Call us at <strong>1800-123-456</strong> for any inquiries.</p>
            </footer>
        </div>
    );
};

export default Welcome;
