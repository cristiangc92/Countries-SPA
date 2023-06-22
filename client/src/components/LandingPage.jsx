import React from "react";
import { Link } from "react-router-dom";
import "./LandingPage.css";

export default function LandingPage() {
  return (
    <div className="fondoLanding">
      <h1 className="bg-success">Countries SPA</h1>
      <Link to="/home">
        <button type="button" className="btn btn-success btn-lg">
          INGRESAR
        </button>
      </Link>
    </div>
  );
}
