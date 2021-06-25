import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';

const useRowStyles = makeStyles({
  root: {
    '& > *': {
      borderBottom: 'unset',
    },
  },
});

function createData(name, newCases, deaths, recovery) {
  return {
    name,
    newCases,
    deaths,
    recovery,    
    
    historywest: [
      { districtName: 'Colombo', newCases: 300, deaths: 15 ,recovery:100 },
      { districtName: 'Gampaha', newCases: 350, deaths: 5,recovery: 200},
      { districtName: 'Kaluthara', newCases: 189, deaths: 1,recovery:300 },
    ],
   
    
  };
}

function Row(props) {
  const { row } = props;
  const [open, setOpen] = React.useState(false);
  const classes = useRowStyles();

  return (
    <React.Fragment>
      <TableRow className={classes.root}>
        <TableCell>
          <IconButton aria-label="expand row" size="small" onClick={() => setOpen(!open)}>
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell component="th" scope="row">
          {row.name}
        </TableCell>
        <TableCell align="right">{row.newCases}</TableCell>
        <TableCell align="right">{row.deaths}</TableCell>
        <TableCell align="right">{row.recovery}</TableCell>
      
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box margin={1}>
              
              <Table size="small" aria-label="purchases">
                <TableHead>
                  <TableRow>
                    <TableCell  align="right">District</TableCell>
                    <TableCell  align="right">New Cases</TableCell>
                    <TableCell align="right">Deaths</TableCell>
                    <TableCell align="right">Recovery</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {row.historywest.map((historyRow) => (
                    <TableRow key={historyRow.districtName}>
                      <TableCell component="th" scope="row" align="left">
                        {historyRow.districtName}
                      </TableCell>
                      <TableCell align="right">{historyRow.newCases}</TableCell>
                      <TableCell align="right">{historyRow.deaths}</TableCell>
                      <TableCell align="right">{historyRow.recovery}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}

Row.propTypes = {
  row: PropTypes.shape({
    newCases: PropTypes.number.isRequired,
    recovery: PropTypes.number.isRequired,
    deaths: PropTypes.number.isRequired,
    historywest: PropTypes.arrayOf(
      PropTypes.shape({
        deaths: PropTypes.number.isRequired,
        recovery: PropTypes.number.isRequired,
        newCases: PropTypes.number.isRequired,
        districtName: PropTypes.string.isRequired,
      }),
    ).isRequired,
    name: PropTypes.string.isRequired,
    
  
  }).isRequired,
};

const rows = [
  createData('Western Province', 889, 21, 600),
  createData('Eastern  Province', 237, 9, 37),
  createData('Central Province', 262, 16, 24),
  createData('Northern Province', 305, 3, 67),
  createData('Southern Province', 356, 16, 49),
  createData('North Western Province', 159, 6, 24),
  createData('North Central Province', 237, 9, 37),
  createData('Uva Province', 262, 16, 24),
  createData('Sabaragamuwa Province', 305, 3, 67),
];

export default function CollapsibleTable() {
  return (

    <TableContainer component={Paper}>
      <p className="Tableheading">Corona (Covid-19) Situational Analysis Dashboard of Sri Lanka</p>
      <br></br>
      <br></br>
      <Table aria-label="collapsible table">
        <TableHead>
          <TableRow>
            <TableCell />
            <TableCell >Province</TableCell>
            <TableCell align="right" >New Cases</TableCell>
            <TableCell align="right">Deaths</TableCell>
            <TableCell align="right">Recovery</TableCell>
          
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <Row key={row.name} row={row} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
