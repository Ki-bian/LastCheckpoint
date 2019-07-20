import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  root: {
    display: 'flex',
    alignItems: 'center',
    width: '100%',
    height: 50,
    position: 'fixed',
    zIndex: 3,
    backgroundColor: 'grey',
  },
  a: {
    textDecoration: 'none',
    fontSize: '24px',
    color: 'white',
    fontWeight: 'bold',
    marginLeft: 10,
  },
}));

function TopNav() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <a href="./" className={classes.a}>Wild Circus</a>
    </div>
  );
}

export default TopNav;
