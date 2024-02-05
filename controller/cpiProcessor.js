// import cpiJson from '../public/cpi.json'
var cpiJson = require('../public/cpi.json')
const util = require('util')

const  cpiProcessor =(selectedCountries,selectedYear)=> {
    // Find the header index for the specified selectedYearsel
    selectedYear= Number(selectedYear);
    const data=cpiJson
    const yearIndex = Object.entries(data[0]).find(([key, val]) => val == [`CPI score ${selectedYear}`]);
      console.log("selectedYEar",typeof selectedYear,selectedYear)
    if (!yearIndex) {
      return `CPI data not available for the year ${selectedYear}`;
    }
  
    // Filter the data based on the specified countries and year
    const result = data
      .filter(countryData => selectedCountries.includes(countryData.Country))
      .map(countryData => ({
        "country": countryData.Country,
        "country_code": countryData.ISO3,
        "region": countryData.Region,
        "indicators":{cpi:[
        {year:selectedYear, score:countryData[`CPI score ${selectedYear}`], rank: countryData[`Rank ${selectedYear}`]},
        {year:selectedYear-1, score:countryData[`CPI score ${selectedYear-1}`],  rank:countryData[`Rank ${selectedYear-1}`]},
        ]}
      }));
  
    return result;
}

//   console.log(result);  
//console.log(util.inspect(result, {showHidden: false, depth: null, colors: true}))
export default cpiProcessor;
