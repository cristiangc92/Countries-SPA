// const { Router } = require("express");
const { Country, Activity } = require("../db");
const axios = require("axios");

// const router = Router();

const getApiInfo = async () => {
  const apiUrl = await axios.get("https://restcountries.com/v3/all");
  apiUrl.data.forEach((e) => {
    Country.findOrCreate({
      where: {
        id: e.cca3,
        name: e.name.common,
        image: e.flags[0],
        continents: e.continents[0],
        capital: e.capital,
        subregion: e.subregion,
        area: e.area,
        population: e.population,
      },
    });
  });
};

const getDbInfo = async () => {
  const dbInfo = await Country.findAll({
    include: {
      model: Activity,
      attributes: ["name", "difficulty", "duration", "season"],
      through: {
        attributes: [],
      },
    },
  });
  return dbInfo;
};

module.exports = { getApiInfo, getDbInfo };
