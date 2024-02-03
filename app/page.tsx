'use client'
import Image from "next/image";
import FilterIndicators from '../components/filter_indicators';
import FilterCountry from '../components/filter_country';
import Report from '../components/report';
import Tables from '../components/table';
import { useState } from "react";
import styles from '../app/index.module.css';
import { useSearchParams } from "next/navigation";
interface ChosenIndicators {
  [indicatorKey: string]: number;
  [countryKey: string]: boolean;
}

interface ChosenCountry {
  [key: string]: boolean;
}

export default function Home({
  searchParams,
}: {
  searchParams?: { [key: string]: string | string[] | undefined };
}){


  const [indicators, setIndicators] = useState<string[]>([]);
  const [countries, setCountries] = useState<string[]>([]);
  const [year, setYear] = useState<number>(2020);
  

  const handleIndicators = (chosen_indicators: ChosenIndicators) => {
    console.log("In page", chosen_indicators)
     const year1=chosen_indicators.year
    const indicators_applied = Object.keys(chosen_indicators.indicators).filter(k => chosen_indicators.indicators[k]);
    setIndicators(indicators_applied);
    setYear(year1)
    
  }

  const handleCountry = (chosen_country: ChosenCountry) => {
    const country_applied = Object.keys(chosen_country).filter(k => chosen_country[k]);
    setCountries(country_applied);
  }

  return (
    <div >
      <h2>WDI report</h2>
      <div className={styles.filterButtons}>
          <FilterCountry onSave={(filteredCountries: ChosenCountry) => { handleCountry(filteredCountries) }} />
          <FilterIndicators onClose={(filteredIndicators: ChosenIndicators) => { handleIndicators(filteredIndicators) }} open={true} />

      </div>
      <Tables indicators={indicators} year={year} countries={countries} />
    </div>
  );
}



