const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

class CountryModel {
  async getAllCountryInfo() {
    try {
      const allInfo =
        await prisma.$queryRaw`SELECT SUM(infected) as infected, SUM(dead) as dead, SUM(recovered) as recovered, countryId, name FROM countryinfo, countrylist where countryInfo.countryId=countrylist.id GROUP BY countryId`;

      const maxInfected =
        await prisma.$queryRaw`SELECT infected, month, countryId, name FROM countryinfo, countrylist WHERE countryinfo.countryId=countrylist.id ORDER BY (DATE_FORMAT(SYSDATE(), '%M') - month) DESC, infected DESC LIMIT 1`;

      return { allInfo, maxInfected };
    } catch (err) {
      throw err;
    }
  }

  async getInfoByCountryId(countryId) {
    const info = await prisma.countryInfo.findMany({
      select: {
        id: true,
        countryId: true,
        month: true,
        infected: true,
        dead: true,
        recovered: true,
        countryName: {
          select: {
            name: true,
          },
        },
      },
      where: {
        countryId: countryId,
      },
    });

    return info;
  }
}

module.exports = new CountryModel();
