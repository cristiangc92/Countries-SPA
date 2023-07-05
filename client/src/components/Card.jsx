import React from "react";
import "./Card.css";

export default function Card({ image, name, continents, population }) {
  return (
    <div className="card">
      <img src={image} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title text-center">
          <strong>{name}</strong>
        </h5>
        <p className="card-text">
          <strong>Continent:</strong> {continents}
        </p>
        <p className="card-text">
          <strong>Population:</strong> {population}
        </p>
      </div>
    </div>
  );
}
