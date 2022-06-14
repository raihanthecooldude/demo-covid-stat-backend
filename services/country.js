const countryModel = require("../models/country");

class CountryService {
  async getAllCountryInfo() {
    const info = await countryModel.getAllCountryInfo();
    return info;
  }

  async getInfoByCountryId(countryId) {
    const info = await countryModel.getInfoByCountryId(countryId);
    return info;
  }
}

module.exports = new CountryService();
