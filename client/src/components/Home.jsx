import React, { useEffect, useState } from "react";
import "./Home.css";
import Card from "./Card";
import { useDispatch, useSelector } from "react-redux";
import { getCountries } from "../actions";
import Navbar from "./Navbar";
import Paginado from "./Paginado";
import Footer from "./Footer";
import { Link } from "react-router-dom";

export default function Home() {
  const dispatch = useDispatch();
  const allCountries = useSelector((state) => state.countries);
  const [currentPage, setCurrentPage] = useState(1);
  const [countriesPerPage, setCountriesPerPage] = useState(30);
  const indexOfLastCountry = currentPage * countriesPerPage;
  const indexOfFirstCountry = indexOfLastCountry - countriesPerPage;
  const currentCountries = allCountries?.slice(
    indexOfFirstCountry,
    indexOfLastCountry
  );

  const paginado = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  useEffect(() => {
    dispatch(getCountries());
  }, [dispatch]);

  return (
    <div className="fondoHome">
      <div>
        <Navbar />
      </div>
      <div>
        <Paginado
          countriesPerPage={countriesPerPage}
          allCountries={allCountries.length}
          paginado={paginado}
        />
      </div>
      <div className="containerCards">
        {currentCountries.map((c) => {
          return (
            <Link to={"/home/" + c.id} key={c.id} className="link">
              <Card
                image={c.image}
                name={c.name}
                continents={c.continents}
                population={c.population}
              />
            </Link>
          );
        })}
      </div>
      {/* <div className="containerFooter">
        <Footer />
      </div> */}
    </div>
  );
}
