import React from "react";
import "./Footer.css";

import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container container">
        <div className="support-section footer-section">
          <h5 className="footer-section-heading">Support</h5>
          <ul className="support-list footer-list">
            <Link className="footer-section-link">
              <li className="footer-section-list-item">Help Center</li>
            </Link>
            <Link className="footer-section-link">
              <li className="footer-section-list-item">Air Cover</li>
            </Link>
            <Link className="footer-section-link">
              <li className="footer-section-list-item">Supporting people with disabilities</li>
            </Link>
            <Link className="footer-section-link">
              <li className="footer-section-list-item">Cancelation Options</li>
            </Link>
            <Link className="footer-section-link">
              <li className="footer-section-list-item">Our Covid-19 Response</li>
            </Link>
            <Link className="footer-section-link">
              <li className="footer-section-list-item">Report a neighbourhood concern</li>
            </Link>
          </ul>
        </div>
        <div className="community-sector footer-section">
          <h5 className="footer-section-heading">Community</h5>
          <ul className="community-list footer-list">
            <Link className="footer-section-link">
              <li className="footer-section-list-item">Travel Journal disaster relief Housing</li>
            </Link>
            <Link className="footer-section-link">
              <li className="footer-section-list-item">Combating discrimination</li>
            </Link>
          </ul>
        </div>
        <div className="hosting-section footer-section">
          <h5 className="footer-section-heading">Hosting</h5>
          <ul className="hosting-list footer-list">
            <Link className="footer-section-link">
              <li className="footer-section-list-item">Airbnb your home</li>
            </Link>
            <Link className="footer-section-link">
              <li className="footer-section-list-item">Cover for hosts</li>
            </Link>
            <Link className="footer-section-link">
              <li className="footer-section-list-item">Explore hosting resources</li>
            </Link>
            <Link className="footer-section-link">
              <li className="footer-section-list-item">Visit our community forum</li>
            </Link>
            <Link className="footer-section-link">
              <li className="footer-section-list-item">Host responsibly</li>
            </Link>
          </ul>
        </div>
        <div className="travel-section footer-section">
          <h5 className="footer-section-heading">Travel</h5>
          <ul className="travel-list footer-list">
            <Link className="footer-section-link">
              <li className="footer-section-list-item">Newsroom</li>
            </Link>
            <Link className="footer-section-link">
              <li className="footer-section-list-item">Learn about new features</li>
            </Link>
            <Link className="footer-section-link">
              <li className="footer-section-list-item">Letter from our founders</li>
            </Link>
            <Link className="footer-section-link">
              <li className="footer-section-list-item">Investors</li>
            </Link>
            <Link className="footer-section-link">
              <li className="footer-section-list-item">Gift cards</li>
            </Link>
            <Link className="footer-section-link">
              <li className="footer-section-list-item">Careers</li>
            </Link>
          </ul>
        </div>
      </div>
    </footer>
  );
}
