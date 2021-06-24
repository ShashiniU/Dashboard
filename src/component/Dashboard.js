import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Box from '@material-ui/core/Box';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Link from '@material-ui/core/Link';
import Chart from './Chart';
import TotalCases from './TotalCases';
import CollapsibleTable from './CollapsibleTable'
import Chatbots from './Chatbots'


function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}{' | '}
    {'Shashini Uwanshika'}  {'.'} 
    </Typography>
  );
}



const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  toolbar: {
    paddingRight: 24, // keep right padding when drawer closed
  },
  toolbarIcon: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: '0 8px',
    ...theme.mixins.toolbar,
    
  },
  
  
  title: {
    flexGrow: 1,
  },
 
 
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    height: '100vh',
    overflow: 'auto',
  },
  container: {
    paddingTop: theme.spacing(7),
    paddingBottom: theme.spacing(4),
    paddingLeft: theme.spacing(0),
    paddingRight: theme.spacing(0)
  },
  paper: {
    padding: theme.spacing(2),
    display: 'flex',
    overflow: 'auto',
    flexDirection: 'column',
  },
  fixedHeight: {
    height: 500,
  },
  fixedHeightR: {
    height: 500,
  },
}));

export default function Dashboard() {
  const classes = useStyles();
 
  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);
  const fixedHeighRecords = clsx(classes.paper, classes.fixedHeightR);

  return (
    
    <div className={classes.root}>
     
     
     <Chatbots/>
      <CssBaseline />
      <AppBar  className="Appbar" >
        <Toolbar className={classes.toolbar}>
         
          <Typography component="h1" variant="h5" color="inhersit" noWrap className={classes.title} align="left">
            Dashboard
          </Typography>
          
          
        </Toolbar>
      </AppBar>
     

     

      <main className={classes.content}>
        <div className={classes.appBarSpacer} />
       <div  className="mainHeading"> <p>Corona (Covid-19) Situational Analysis Dashboard of Sri Lanka</p></div>
        <Container maxWidth="lg" className={classes.container}>
          <Grid container spacing={5}>
             {/* Total confirmed cases */}
             <Grid item xs={10} md={4} lg={3}>
          
          <Paper className={fixedHeighRecords}>
          <TotalCases />
          </Paper>
        </Grid>

            {/* Chart */}
            <Grid item xs={12} md={7} lg={6} >
              <Paper className={fixedHeightPaper}>
                <Chart />
              </Paper>
            </Grid>

            {/* Total confirmed cases */}
            <Grid item xs={10} md={4} lg={3}>
          
              <Paper className={fixedHeighRecords}>
              <TotalCases />
              </Paper>
            </Grid>
            {/* Province an District table */}
            <Grid item xs={120} className="Table" md={12}   lg={20}>
              <Paper className={classes.paper}>
              <CollapsibleTable/>
              </Paper>
            </Grid>
          </Grid>
          <Box pt={10}>
            <Copyright />
          </Box>
        </Container>
      </main>
    </div>
  );
}