
import Title from './Title';
import './style.css'
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles({
    table: {
      minWidth: 270,
    },
  });
  
  function createData(name,province, cases) {
    return { name,province, cases };
  }

  const rows = [
    createData('Western Province', 889),
    createData('Eastern  Province', 237),
    createData('Central Province', 262),
    createData('Northern Province', 305),
    createData('Southern Province', 356),
    createData('North Western Province', 159),
    createData('North Central Province', 237),
    createData('Uva Province', 262),
    createData('Sabaragamuwa Province', 305),
  ];
  
export default function Province() {
    const classes = useStyles();
  return (
   <div>
      <Title>NewCases-Provincewise</Title>
      <React.Fragment>
      
      <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Province</TableCell>
            <TableCell align="center" >No.of New Cases</TableCell>
           
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.name}>
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.province}</TableCell>
              <TableCell align="right">{row.cases}</TableCell>
              
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
     
   </React.Fragment>
   </div>
      
    
   
  );
}