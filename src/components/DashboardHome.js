import React from 'react';
//import {Link} from 'react-router-dom';
//import toKebabCase from '../../functions/toKebabCase'
//import "./Menu.css"

//import SocialMediaLinks from '../SocialMediaLinks'
import {reduxConnector} from '../redux'

//const config  = require('../../config.json');
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

import Leaderboard from './Leaderboard';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    boxShadow: "1px 1px 14px 0 rgba(50, 60, 70, 0.08)"
  },
}));

const dashboardHome = reduxConnector((props) => {
  const classes = useStyles();

  return (
    <div  className="dashboardMain">
      
      <div className={classes.root}>

        <Grid container spacing={3} >
          <Grid item container xs={12} lg={8} spacing={1} style={{margin: "0 auto"}} >
            <Grid item xs={12} sm={6}>
              <Paper className={classes.paper}> Information </Paper>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Paper className={classes.paper}> Information </Paper>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Paper className={classes.paper}> Information </Paper>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Paper className={classes.paper}> Information </Paper>
            </Grid>
          </Grid>

          <Grid item xs={12} lg={4}>
            <Paper className={classes.paper}>
              <Leaderboard listOfPeople={props.data.leaderboards.local} title="Local Leaderboard (m)"/>
            </Paper>
          </Grid>

          <Grid item xs={6} sm={3}>
            <Paper className={classes.paper}>xs=6 sm=3</Paper>
          </Grid>
          <Grid item xs={6} sm={3}>
            <Paper className={classes.paper}>xs=6 sm=3</Paper>
          </Grid>
          <Grid item xs={6} sm={3}>
            <Paper className={classes.paper}>xs=6 sm=3</Paper>
          </Grid>
          <Grid item xs={6} sm={3}>
            <Paper className={classes.paper}>xs=6 sm=3</Paper>
          </Grid>
        </Grid>
      </div>
    </div>
  )
});

export default dashboardHome