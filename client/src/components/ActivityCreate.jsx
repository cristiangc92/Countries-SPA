import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getCountries, postActivity } from "../actions";
import "./ActivityCreate.css";

export default function ActivityCreate() {
  const dispatch = useDispatch();
  const allCountries = useSelector((state) => state.countries);
  const [input, setInput] = useState({
    name: "",
    difficulty: "",
    duration: "",
    season: "",
    countries: [],
  });

  useEffect(() => {
    dispatch(getCountries());
  }, [dispatch]);

  function handleChange(e) {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  }

  function handleSelect(e) {
    setInput({
      ...input,
      difficulty: parseInt(e.target.value),
    });
  }

  function handleChange2(e) {
    setInput({
      ...input,
      duration: e.target.value,
    });
  }

  function handleSelect2(e) {
    setInput({
      ...input,
      season: e.target.value,
    });
  }

  function handleSelect3(e) {
    setInput({
      ...input,
      countries: input.countries.includes(e.target.value)
        ? input.countries
        : [...input.countries, e.target.value],
    });
  }

  function handleDelete(c) {
    setInput({
      ...input,
      countries: input.countries.filter((e) => e !== c),
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log(input);
    if (input.name.trim() === "") {
      return alert("Debe ingresar el nombre de la actividad.");
    } else if (
      input.duration.trim() === "" ||
      input.duration < 1 ||
      input.duration > 90
    ) {
      return alert("Ingresa una duracion entre 1 y 90 dias.");
    } else if (input.season.trim() === "") {
      return alert("Debes seleccionar una estacion del año.");
    } else if (input.countries.length === 0) {
      return alert("Debes seleccionar por lo menos un pais.");
    } else {
      dispatch(postActivity(input));
      alert("Actividad/es creada/s con exito!!");
      setInput({
        name: "",
        difficulty: "",
        duration: "",
        season: "",
        countries: [],
      });
      document.getElementById("formulario").reset();
    }
  }

  return (
    <div className="fondoCreate">
      <div className="formCreate">
        <h1 className="tituloDetail bg-success">CREATE ACTIVITY</h1>
        <form id="formulario" onSubmit={(e) => handleSubmit(e)}>
          <div className="mb-3">
            <label className="form-label">Name: </label>
            <input
              className="form-control"
              type="text"
              value={input.name}
              name="name"
              placeholder="Enter a name"
              onChange={(e) => handleChange(e)}
            />
            <div className="form-text">Name of the activity.</div>
          </div>
          <div className="mb-3">
            <label className="form-label">Difficulty: </label>
            <select
              className="form-select"
              aria-label="Default select example"
              defaultValue="Open this select menu"
              onChange={(e) => handleSelect(e)}
            >
              <option disabled>Open this select menu</option>
              <option value="1">1 - Very Easy</option>
              <option value="2">2 - Easy</option>
              <option value="3">3 - Normal</option>
              <option value="4">4 - Hard</option>
              <option value="5">5 - Very Hard</option>
            </select>
            <div className="form-text">Difficulty of the activity.</div>
          </div>
          <div className="mb-3">
            <label className="form-label">Duration: </label>
            <input
              className="form-control"
              type="number"
              value={input.duration}
              name="duration"
              placeholder="Range from 1 to 90"
              onChange={(e) => handleChange2(e)}
            />
            <div className="form-text">Duration in days of the activity.</div>
          </div>
          <div className="mb-3">
            <label className="form-label">Season: </label>
            <select
              className="form-select"
              aria-label="Default select example"
              defaultValue="Open this select menu"
              onChange={(e) => handleSelect2(e)}
            >
              <option disabled>Open this select menu</option>
              <option value="summer">Summer</option>
              <option value="autumn">Autumn</option>
              <option value="winter">Winter</option>
              <option value="spring">Spring</option>
            </select>
            <div className="form-text">Difficulty of the activity.</div>
          </div>
          <div className="mb-3">
            <label className="form-label">Countries: </label>
            <select
              className="form-select"
              aria-label="Default select example"
              defaultValue="Open this select menu"
              onChange={(e) => handleSelect3(e)}
            >
              <option disabled>Open this select menu</option>
              {allCountries.map((c) => (
                <option value={c.name} key={c.id}>
                  {c.name}
                </option>
              ))}
            </select>
            <div className="form-text">
              Select one or more countries where you will carry out the
              activity.
            </div>
            <ul className="list-group">
              {input.countries.map((c) => (
                <li className="list bg-success" key={c}>
                  <div key={c}>
                    {c + " "}
                    <button
                      className="btn btn-danger"
                      type="button"
                      onClick={() => handleDelete(c)}
                    >
                      X
                    </button>
                  </div>
                </li>
              ))}
            </ul>
            <div className="btnDetail">
              <button className="btn btn-success" type="submit">
                Create ✓
              </button>
              <Link to={"/home"}>
                <button type="button" className="btn btn-success">
                  ◁ Volver
                </button>
              </Link>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
