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

export function getDetail(id) {
  return async function (dispatch) {
    const json = await axios.get("http://localhost:3001/countries/" + id);
    return dispatch({
      type: "GET_DETAIL",
      payload: json.data,
    });
  };
}

export function getNameCountries(name) {
  return async function (dispatch) {
    const json = await axios.get(
      "http://localhost:3001/countries?name=" + name
    );
    return dispatch({
      type: "GET_NAME_COUNTRIES",
      payload: json.data,
    });
  };
}

export function postActivity(payload) {
  return async function (dispatch) {
    const json = await axios.post("http://localhost:3001/activity", payload);
    return dispatch({
      type: "POST_ACTIVITY",
      payload: json,
    });
  };
}
