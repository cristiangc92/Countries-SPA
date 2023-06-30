import React from "react";
import "./Card.css";

export default function Card({ image, name, continents, population }) {
  return (
    <div className="card">
      <img src={image} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <p className="card-text">{continents}</p>
        <p className="card-text">{population}</p>
      </div>
    </div>
  );
}
