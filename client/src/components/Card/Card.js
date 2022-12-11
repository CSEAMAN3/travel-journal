import React from "react";
import "./Card.css";

import { IoLocationSharp } from "react-icons/io5";

export default function Card({ title, location, googleMapsUrl, startDate, endDate, description, imageUrl }) {
  return (
    <div className="card-container">
      <div className="card-content">
        <h2 className="card-heading">{title}</h2>
        <h3 className="card-subheading">
          <span className="location-pin">
            <IoLocationSharp />
          </span>
          <span className="country">{location}</span>
          <a className="google-link" href={googleMapsUrl} target="_blank" rel="noreferrer">
            View on google maps
          </a>
        </h3>
        <span className="travel-dates">
          {startDate} - {endDate}
        </span>
        <p className="description">{description}</p>
      </div>
      <div className="card-img-container">
        <img className="card-img" src={require(`../../images/${imageUrl}`)} alt="Alesund, Norway" />
      </div>
    </div>
  );
}
