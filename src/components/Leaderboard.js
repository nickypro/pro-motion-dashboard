import React from 'react';

import {reduxConnector} from '../redux'

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

const Leaderboard = reduxConnector(({listOfPeople, title}) => {
  return( 
  <div>
  <header>
    {title}
  </header>
  <List
    component="ol"
    style={{display: "flex", flexDirection: "column", width: "100%", padding: "0.3rem 1rem", boxSizing: "border-box"}}
  >
    {listOfPeople.slice(0, 10).map(person => (

      <ListItem key={person.name} style={{padding: 0}}>
        <ListItemIcon>
          {person.pos}
        </ListItemIcon>
        <ListItemText primary={person.name} />
        <ListItemText secondary={person.dist} style={{textAlign: "right"}}/>
      </ListItem>
    
    ))}      
  </List>
  </div>
  )
});

export default Leaderboard