import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';





export default function Report(){

    
    return(

        

        <div>
                <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell>Country</TableCell>
            <TableCell align="right">Country Code</TableCell>
            <TableCell align="right">Region</TableCell>
            <TableCell align="right">Indicator Name</TableCell>
            <TableCell align="right">Indicator Name-1</TableCell>
            <TableCell align="right">Changes in Scores</TableCell>
            <TableCell align="right">Indicator name Rank</TableCell>
            <TableCell align="right">Indicator Name Rank-1</TableCell>
            <TableCell align="right">Changes in Rank</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
         
            <TableRow
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
              </TableCell>
              <TableCell align="right"></TableCell>
              <TableCell align="right"></TableCell>
              <TableCell align="right"></TableCell>
              <TableCell align="right"></TableCell>
            </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
             </div>
    );
}