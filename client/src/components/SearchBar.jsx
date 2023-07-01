import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { getNameCountries } from "../actions";

export default function SearchBar() {
  const dispatch = useDispatch();
  const [name, setName] = useState("");

  function handleInputChange(e) {
    e.preventDefault();
    setName(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (!name) {
      return alert("Debe ingresar el nombre de un pais.");
    } else {
      dispatch(getNameCountries(name));
      setName("");
      document.getElementById("search").value = "";
    }
  }

  return (
    <form className="d-flex" role="search">
      <input
        id="search"
        className="form-control me-2"
        type="search"
        placeholder="Search"
        aria-label="Search"
        onChange={(e) => handleInputChange(e)}
      />
      <button
        className="btn btn-outline-light"
        type="submit"
        onClick={(e) => handleSubmit(e)}
      >
        Search
      </button>
    </form>
  );
}
