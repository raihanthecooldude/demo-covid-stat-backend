const CountryController = require("../controllers/country");

const express = require("express");
const Router = express.Router();

Router.get("/api", CountryController.getAllCountryInfo);
Router.get("/api/country/:id", CountryController.getInfoByCountryId);

module.exports = Router;
