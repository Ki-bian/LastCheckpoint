import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';


const useStyles = makeStyles(() => ({
  parentWelcome: {
    display: 'flex',
    flexDirection: 'column',
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
  },
  logoSize: {
    width: '50vh',
    height: '50vh',
  },
}));


export default function Welcome() {
  const classes = useStyles();
  React.useEffect(() => {
    setTimeout(() => { window.location = './#/Home'; }, 2000);
  }, []);
  return (
    <div className={classes.parentWelcome}>
      <Link to="./Home" style={{ textDecoration: 'none' }}>
        <img src="https://image.noelshack.com/fichiers/2019/29/6/1563643457-logowildcircus.png" alt="logo" className={classes.logoSize} />
      </Link>
    </div>
  );
}
