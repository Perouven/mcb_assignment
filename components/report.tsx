'use client'
import React, { useEffect, useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import FilterIndicators from './filter_indicators';
import FilterCountry from './filter_country';

interface ReportProps {
  reportArray: []
}

interface DataRow {
  indicator: null;
  country: string;
  country_code: string;
  region: string;
  score: number;
  previous_score: number;
  changes_in_score: number;
  rank: number;
  previous_rank: number;
  changes_in_rank: number;
}

const getIndicator = async (countries: string[], indicators: string[], year: number): Promise<any> => {
  try {
    // Implement your logic to fetch data based on countries, indicators, and year
    // Example: const response = await fetch(`http://localhost:3000/api/indicators?countries=${countries.join(',')}&indicators=${indicators.join(',')}&year=${year}`);
    // Adjust the API endpoint based on your backend implementation

    // Placeholder data for demonstration purposes
    const response = await fetch(`http://localhost:3000/api/indicators/Denmark/cpi`);
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Fetch error:', error);
    throw error;
  }
};

const createData = (item: any): DataRow => {
  const currentYear = 2020; // Replace with the actual current year
  const previousYear = currentYear - 1;

  const indicatorDetails = item.indicators.find((entry: { year: number }) => entry.year === currentYear);
  const previousIndicatorDetails = item.indicators.find((entry: { year: number }) => entry.year === previousYear);

  const changes_in_score = indicatorDetails?.score - previousIndicatorDetails?.score;
  const changes_in_rank = indicatorDetails?.rank - previousIndicatorDetails?.rank;

  return {
    country: item.country,
    country_code: item.country_code,
    region: item.region,
    score: indicatorDetails?.score || 0,
    previous_score: previousIndicatorDetails?.score || 0,
    changes_in_score: changes_in_score || 0,
    rank: indicatorDetails?.rank || 0,
    previous_rank: previousIndicatorDetails?.rank || 0,
    changes_in_rank: changes_in_rank || 0,
  };
};

const displayTable=(chosen_indicators:any)=>{
    const indicators1 = Object.keys(chosen_indicators).filter(k=>chosen_indicators[k]);
    

}
const Report: React.FC<ReportProps> = ({ reportArray }) => {
  const [rows, setRows] = useState<DataRow[]>([]);
  const [headers, setHeaders] = useState<string[]>([]);
  console.log("inside report", reportArray);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const processedData = reportArray?.flat() || [];
        setRows(processedData);
      } catch (error) {
        console.error('Error processing data:', error);
      }
    };

    fetchData();
  }, [reportArray]);

  useEffect(() => {
    if (rows.length > 0) {
      const firstRow = rows[0];
      const rowHeaders = Object.keys(firstRow);
      setHeaders(rowHeaders);
    }
  }, [rows]);

  const renderTable = () => {
    if (rows.length > 0 && rows[0].indicator!==null) {
      // Render the table for 'use client' indicator
      return (
        <TableContainer component={Paper} sx={{ width: 1000, color: 'success.main', margin: 'auto' }}>
          {/* Add your custom table content here for 'use client' */}
          <Table sx={{ maxWidth: 1000 }} size="small" aria-label="a dense table">
            <TableHead>
               <TableRow>
                {headers.map((header) => (
                  <TableCell key={header}>{header}</TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((data, index) => (
                // Add your custom table row content here for 'use client'
                <TableRow key={index}>
                  <TableCell>{data.country}</TableCell>
                  {/* Add other cells as needed */}
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      );
    } else {
      // Render the regular table
      return (
        <TableContainer component={Paper} sx={{ width: 1000, color: 'success.main', margin: 'auto' }}>
          <Table sx={{ maxWidth: 1000 }} size="small" aria-label="a dense table">
            <TableHead>
              <TableRow>
                {headers.map((header) => (
                  <TableCell key={header}>{header}</TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((data, index) => (
                <TableRow key={index}>
                  <TableCell component="th" scope="row">
                    {data.country}
                  </TableCell>
                  <TableCell>{data.country_code}</TableCell>
                  <TableCell>{data.region}</TableCell>
                  <TableCell>{data.score}</TableCell>
                  <TableCell>{data.previous_score}</TableCell>
                  <TableCell>{data.changes_in_score}</TableCell>
                  <TableCell>{data.rank}</TableCell>
                  <TableCell>{data.previous_rank}</TableCell>
                  <TableCell>{data.changes_in_rank}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      );
    }
  };

  return <div>{renderTable()}</div>;
};



export default Report;
