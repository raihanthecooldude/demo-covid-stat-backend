const countryService = require("../services/country");

class CountryController {
  async getAllCountryInfo(req, res, next) {
    const info = await countryService.getAllCountryInfo();
    res.json(info);
  }

  async getInfoByCountryId(req, res, next) {
    const info = await countryService.getInfoByCountryId(
      parseInt(req.params.id)
    );
    res.json(info);
  }
}

module.exports = new CountryController();
