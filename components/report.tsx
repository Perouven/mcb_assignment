'use client'
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import React from 'react';
import { useEffect,useState } from 'react'

interface DataRow {
    country: string;
    country_code: string;
    region: string;
  }

const getIndicator = async (id:string): Promise<any> => {
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

const createData = async (id: string): Promise<DataRow> => {
  try {
    const result = await getIndicator(id);
    const item = result.indicators;
    const country = item.country;
    const country_code = item.country_code;
    const region = item.region;

    return { country, country_code, region };
  } catch (error) {
    console.error('Error creating data:', error);
    throw error;
  }
};

const Report = () => {
  const fetchData = async () => {
    const data = await createData("DNK");
    return [data]; // Wrap the data in an array
  };

  const [rows, setRows] = useState<DataRow[]>([]);


  useEffect(() => {
    fetchData().then((data) => {
      setRows(data);
    });
  }, []);

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell>Country</TableCell>
            <TableCell align="right">Country Code</TableCell>
            <TableCell align="right">Region</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((data, index) => (
            <TableRow key={index}>
              <TableCell component="th" scope="row">
                {data.country}
              </TableCell>
              <TableCell align="right">{data.country_code}</TableCell>
              <TableCell align="right">{data.region}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default Report;