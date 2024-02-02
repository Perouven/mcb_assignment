'use client'
import Image from "next/image";
import FilterIndicators from '../components/filter_indicators';
import FilterCountry from '../components/filter_country';
import Report from '../components/report';
import Tables from '../components/table';
import { useState } from "react";

interface ChosenIndicators {
  [key: string]: boolean;
}

interface ChosenCountry {
  [key: string]: boolean;
}

export default function Home() {
  const [indicators, setIndicators] = useState<string[]>([]);
  const [countries, setCountries] = useState<string[]>([]);

  const handleIndicators = (chosen_indicators: ChosenIndicators) => {
    const indicators_applied = Object.keys(chosen_indicators).filter(k => chosen_indicators[k]);
    setIndicators(indicators_applied);
  }

  const handleCountry = (chosen_country: ChosenCountry) => {
    const country_applied = Object.keys(chosen_country).filter(k => chosen_country[k]);
    setCountries(country_applied);
  }

  return (
    <div>
      <h2>WDI report</h2>
      <FilterCountry onSave={(filteredCountries: ChosenCountry) => { handleCountry(filteredCountries) }} />
      <FilterIndicators onClose={(filteredIndicators: ChosenIndicators) => { handleIndicators(filteredIndicators) }} open={true} />
      <Tables indicators={indicators} countries={countries} />
    </div>
  );
}
