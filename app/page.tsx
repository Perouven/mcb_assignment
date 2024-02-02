import Image from "next/image";
import FilterIndicators from '../components/filter_indicators';
import Report from '../components/report';

export default function Home() {
  return (
   <h2>WDI report
    <FilterIndicators onClose={(filteredIndicators) => console.log(filteredIndicators)} open={true} />
    <Report />
   </h2>  );
}
