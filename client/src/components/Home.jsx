import React, { useEffect } from "react";
import "./Home.css";
import Card from "./Card";
import { useDispatch, useSelector } from "react-redux";
import { getCountries } from "../actions";
import Navbar from "./Navbar";

export default function Home() {
  const dispatch = useDispatch();
  const allCountries = useSelector((state) => state.countries);

  useEffect(() => {
    dispatch(getCountries());
  }, [dispatch]);

  return (
    <div className="fondoHome">
      <div>
        <Navbar />
      </div>
      <div className="containerCards">
        {allCountries.map((c) => {
          return (
            <div key={c.id}>
              <Card
                image={c.image}
                name={c.name}
                continents={c.continents}
                population={c.population}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}
