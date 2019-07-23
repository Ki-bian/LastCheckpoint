import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import ShoppingCart from '@material-ui/icons/ShoppingCart';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

const useStyles = makeStyles(() => ({
  root: {
    display: 'flex',
    alignItems: 'center',
    width: '100%',
    height: 50,
    top: 0,
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

function TopNav(props) {
  const classes = useStyles();
  const { numberTicket } = props;

  return (
    <div className={classes.root}>
      <a href="./" className={classes.a}>Wild Circus</a>
      <Link
        to="./Shop"
        className="link"
        style={{
          position: 'absolute', right: 0, color: 'white', textDecoration: 'none',
        }}
      >
        <IconButton aria-label="Delete" className={classes.margin} style={{ color: 'white', fontSize: 11 }}>
          {numberTicket}
          <ShoppingCart />
        </IconButton>
      </Link>
    </div>
  );
}

const mapStateToProps = ({ numberTicket }) => ({ numberTicket });
export default connect(mapStateToProps)(TopNav);
