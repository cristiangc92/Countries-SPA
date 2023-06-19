const { Router } = require("express");
const { getDbInfo } = require("../controllers/countriesControllers");
const { Country, Activity } = require("../db");

const router = Router();

router.get("/", async (req, res) => {
  const { name } = req.query;
  try {
    const countriesTotal = await getDbInfo();
    if (name) {
      const countriesName = countriesTotal.filter((c) =>
        c.name.toLowerCase().includes(name.toLowerCase())
      );
      console.log(countriesName.lenght);
      countriesName.length
        ? res.status(200).send(countriesName)
        : res.status(404).send("No se encuentra el pais buscado por nombre.");
    } else {
      res.status(200).send(countriesTotal);
    }
  } catch (error) {
    console.log("Error en la ruta get /countries: ", error);
  }
});

router.get("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const countryId = await Country.findByPk(id, {
      include: Activity,
    });
    countryId
      ? res.status(200).send(countryId)
      : res.status(404).send("No existe el ID ingresado.");
  } catch (error) {
    console.log("Error en la ruta get /countries/:id: ", error);
  }
});

module.exports = router;
