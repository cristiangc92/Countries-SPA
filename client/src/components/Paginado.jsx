import React from "react";
import "./Paginado.css";

export default function Paginado({ countriesPerPage, allCountries, paginado }) {
  const pageNumbers = [];
  for (let i = 0; i < Math.ceil(allCountries / countriesPerPage); i++) {
    pageNumbers.push(i + 1);
  }

  return (
    <nav className="paginado" aria-label="Page navigation example">
      <ul className="pagination justify-content-center">
        {pageNumbers?.map((number) => (
          <li className="page-item" key={number}>
            <a
              className="page-link bg-success text-white fw-bold"
              onClick={() => paginado(number)}
            >
              {number}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
