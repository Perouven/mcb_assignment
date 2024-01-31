'use client'
import React, { useEffect, useState } from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

interface DataRow {
  country: string;
  country_code: string;
  region: string;
  score: number;
  rank:number;
  difference: number;
}

const getIndicator = async (id: string): Promise<any> => {
  try {
    const response = await fetch(`http://localhost:3000/api/indicators/${id}`);

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

const createData = async (countryCode: string, indicator: string, year: number): Promise<DataRow> => {
    try {
      const result = await getIndicator(countryCode);
      const item = result.indicators; // Assuming you are dealing with the first item in the array
      const country = item.country;
      const country_code = item.country_code;
      const region = item.region;
      const previousYear = (year - 1);
      
      const indicatorDetails = item.indicators[indicator].find((entry: { year: number }) => entry.year === year);
      const indicatorDetails2 = item.indicators[indicator].find((entry: { previousYear: number }) => entry.previousYear === previousYear);
      const difference = indicatorDetails - indicatorDetails2;
      console.log("Indicator",difference);
      const score = indicatorDetails?.score || 0;
      const rank = indicatorDetails?.rank || 0;
  
      return { country, country_code, region, score, rank, difference };
    } catch (error) {
      console.error('Error creating data:', error);
      throw error;
    }
  };
  
    

const Report = () => {
  const fetchData = async () => {
    const data = await createData("DNK", "cpi", 2020);
    console.log(data);
    return [data]; // Wrap the data in an array
  };

  const [rows, setRows] = useState<DataRow[]>([]);
  const [headers, setHeaders] = useState<string[]>([]);

  useEffect(() => {
    fetchData().then((data) => {
      setRows(data);
    });
  }, []);

  useEffect(() => {
    // When rows change, update the headers based on the first row's keys
    if (rows.length > 0) {
      const firstRow = rows[0];
      const rowHeaders = Object.keys(firstRow);
      setHeaders(rowHeaders);
    }
  }, [rows]);

  return (
    <TableContainer component={Paper}  sx={{
        width: 800,
        color: 'success.main',
        margin: 'auto',
      }} >
      <Table sx={{ maxWidth: 800 }} size="small" aria-label="a dense table">
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
              <TableCell component="th" scope="row">{data.country}</TableCell>
              <TableCell>{data.country_code}</TableCell>
              <TableCell>{data.region}</TableCell>
              <TableCell>{data.score}</TableCell>
              <TableCell>{data.rank}</TableCell>
              <TableCell>{data.difference}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default Report;
