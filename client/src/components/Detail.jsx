import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, Link } from "react-router-dom";
import { getDetail } from "../actions";
import "./Detail.css";

export default function Detail() {
  const dispatch = useDispatch();
  const { id } = useParams();

  useEffect(() => {
    dispatch(getDetail(id));
  }, [dispatch, id]);

  const myCountry = useSelector((state) => state.detail);

  return (
    <div className="fondoDetail">
      {myCountry ? (
        <div className="containerDetail">
          <div className="titulDetail">
            <h1>
              <strong className="strongTitulo bg-success">
                {myCountry.name}
              </strong>
            </h1>
          </div>
          <div className="subContainerDetail">
            <div className="imgDetail">
              <img className="bg-success p-3" src={myCountry.image} alt="" />
            </div>
            <div className="infoDetail bg-success">
              <h3>
                <strong>Continent:</strong> {myCountry.continents}
              </h3>
              <h3>
                <strong>Capital:</strong> {myCountry.capital}
              </h3>
              <h3>
                <strong>Subregion:</strong> {myCountry.subregion}
              </h3>
              <h3>
                <strong>Area:</strong> {myCountry.area} mt2
              </h3>
              <h3>
                <strong>Population:</strong> {myCountry.population}
              </h3>
            </div>
            <div className="activityDetail bg-success">
              <h2>
                <strong>Activities:</strong>
              </h2>
              {myCountry.activities?.length > 0 ? (
                myCountry.activities.map((a) => (
                  <>
                    <p className="pActivity">{a.id}</p>
                    <ul>
                      <li className="box">Name: {a.name}.</li>
                      <li className="box">Diff: {a.difficulty}.</li>
                      <li className="box">Durat: {a.duration}.</li>
                      <li className="box">Season: {a.season}.</li>
                    </ul>
                  </>
                ))
              ) : (
                <h3>No activities</h3>
              )}
            </div>
          </div>
          <div className="buttonDetail">
            <Link to="/home">
              <button type="button" className="btn btn-success">
                ◁ Back
              </button>
            </Link>
          </div>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
}
