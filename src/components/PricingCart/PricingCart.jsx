import "./PricingCartStyle.css";
import { Link } from "react-router-dom";

import React from 'react'

const PricingCart = () => {
  return (
    <div className="pricing">
        <div className="card-container">
            <div className="card">
                <h3>-Basic-</h3>
                <span className="bar"></span>
                <p className="btc">$ 100</p>
                <p>-3 Days-</p>
                <p>-3 Pages-</p>
                <p>-Featured-</p>
                <p>-Responsive Design</p>
                <Link to="/contact" className="btn">PURCHASE NOW</Link>
            </div>
            <div className="card">
                <h3>-Premium-</h3>
                <span className="bar"></span>
                <p className="btc">$ 200</p>
                <p>-5 Days-</p>
                <p>-8 Pages-</p>
                <p>-Featured-</p>
                <p>-Responsive Design</p>
                <Link to="/contact" className="btn">PURCHASE NOW</Link>
            </div>
            <div className="card">
                <h3>-Business-</h3>
                <span className="bar"></span>
                <p className="btc">$ 500</p>
                <p>-9 Days-</p>
                <p>-12 Pages-</p>
                <p>-Featured-</p>
                <p>-Responsive Design</p>
                <Link to="/contact" className="btn">PURCHASE NOW</Link>
            </div>
        </div>
    </div>
  )
}

export default PricingCart