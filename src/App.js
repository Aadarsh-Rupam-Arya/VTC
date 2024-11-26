import React, { useState } from 'react';
import Products from './pages/Products';
import Cart from './pages/Cart';
import Welcome from './pages/Welcome';
import { CartProvider } from './contexts/CartContext'; 
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Contact from './pages/Contact';
import Checkout from './pages/Checkout';
import PaymentPage from './components/PaymentPage';
import LoginSignup from './components/LoginSignup';
import Tracking from './components/Tracking';
import Owner from './components/Owner';




import 'bootstrap/dist/css/bootstrap.min.css'; 

const App = () => {
    const [searchQuery, setSearchQuery] = useState(''); // State to store the search query

    return (
        <CartProvider>
            <Router>
                <Navbar onSearch={setSearchQuery} /> {/* Pass search query handler */}
                <Routes>
                <Route path="/" element={<Welcome />} /> {/* Set Welcome page as default */}
                    <Route path="/products" element={<Products searchQuery={searchQuery} />} /> {/* Home page */}
                    <Route path="/cart" element={<Cart />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/payment" element={<PaymentPage />} />
                    <Route path="/checkout" element={<Checkout />} />
                    <Route path="/LoginSignup" element={<LoginSignup />} />
                    <Route path="/tracking/:orderId" element={<Tracking />} />
                    <Route path="/Owner" element={<Owner />} />
                   
                </Routes>
                <Footer />
            </Router>
        </CartProvider>
        
    );
};

export default App;