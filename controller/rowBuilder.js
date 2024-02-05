// import cpiJson from '../public/cpi.json'

var cpiJson = require('../public/cpi.json')
const util = require('util')
const rowBuilder = (ArrayData, isFromDB) => {
  const rowArray = [];

  if (!isFromDB) {
    // Assuming your data structure is correct for non-DB case
    ArrayData.forEach((element) => {
      const rowObject = {
        indicator:'cpi',
        country: element.country,
        country_code: element.country_code,
        region: element.region,
        score: element.indicators.cpi[0].score,
        previous_score: element.indicators.cpi[1].score,
        changes_in_score: element.indicators.cpi[0].score - element.indicators.cpi[1].score,
        rank: element.indicators.cpi[0].rank,
        previous_rank: element.indicators.cpi[1].rank,
        changes_in_rank: element.indicators.cpi[0].rank - element.indicators.cpi[1].rank,
      };

      rowArray.push(rowObject);
      console.log("rowArray",rowArray)
    });
  } else {
    // Check if wb:data is present and is an object
    if (ArrayData["wb:data"] && ArrayData["wb:data"]["wb:data"]) {
      // Get an array of data objects
      const dataObjects = Object.values(ArrayData["wb:data"]["wb:data"]);
      const countryDataMap = new Map(); // Use a map to store data for each country

      // Loop through each data object
      dataObjects.forEach(data => {
        const country = data["wb:country"]["_"];
        const countryIso3Code = data["wb:countryiso3code"];
        const date = data["wb:date"];
        const value = data["wb:value"];

        if (!countryDataMap.has(country)) {
          // If country is not in the map, add it
          countryDataMap.set(country, {
            indicator: data["wb:indicator"]["_"],
            country,
            country_Code: countryIso3Code,
            value,
            previous_value: undefined,
            changes_in_value: undefined,
          });
        } else {
          // If country is in the map, update previous value and calculate changes
          const countryData = countryDataMap.get(country);
          countryData.previous_value = countryData.value;
          countryData.value = value;
          countryData.changes_in_value = value - countryData.previous_value;
        }
      });

      // Convert map values to an array
      rowArray.push(...countryDataMap.values());
    } else {
      console.error("Invalid data structure");
    }
  }

  return rowArray;
};

//   console.log(result);

export default rowBuilder;
