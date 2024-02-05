const wdiApiProcessor = async (indicators, countries, year) => {
    console.log("Inside wdiProcessor:", indicators, countries, year);
  
    let countryString = "";
    let indicatorArray=[];
  
    const countryKey = {
      Seychelles: "SYC",
      Maldives: "MDV",
      "Cote d'Ivoire": "CI",
      Kenya: "KEN",
      "Sri Lanka": "LK",
      India: "IND",
      Singapore: "SG",
      Australia: "AUS",
      Denmark: "DNK",
      Finland: "FIN",
    };
  
    const IndicatorsKey = {
        "fisheries_production": "ER.FSH.PROD.MT",
        "agricultural_land": "AG.LND.AGRI.K2",
        "time_to_start_business": "IC.REG.DURS",
        "new business registered": "IC.BUS.NREG",
        "employment in agriculture": "SL.AGR.EMPL.ZS",
        "self employed": "SL.EMP.SELF.ZS",
    };
  
    countries.forEach((country, index) => {
      countryString += countryKey[country];
      if (index < countries.length - 1) {
        countryString += ";";
      }
    });

    indicators.forEach((indicator, index) => {
        if(indicator!=="cpi")
            indicatorArray.push(IndicatorsKey[indicator])
      });
    
    return {countryString,indicatorArray};
  };
  
  export default wdiApiProcessor;
  