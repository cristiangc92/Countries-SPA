import axios from "axios";

export function getCountries() {
  return async function (dispatch) {
    const json = await axios.get("http://localhost:3001/countries");
    return dispatch({
      type: "GET_COUNTRIES",
      payload: json.data,
    });
  };
}

export function getActivities() {
  return async function (dispatch) {
    const json = await axios.get("http://localhost:3001/activity");
    return dispatch({
      type: "GET_ACTIVITIES",
      payload: json.data,
    });
  };
}

export function filterContinents(payload) {
  return {
    type: "FILTER_CONTINENTS",
    payload,
  };
}

export function filterActivities(payload) {
  return {
    type: "FILTER_ACTIVITIES",
    payload,
  };
}

export function orderByName(payload) {
  return {
    type: "ORDER_BY_NAME",
    payload,
  };
}

export function orderByPopulation(payload) {
  return {
    type: "ORDER_BY_POPULATION",
    payload,
  };
}
