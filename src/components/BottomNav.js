import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import Category from '@material-ui/icons/Category';
import Payment from '@material-ui/icons/Payment';
import InsertPhoto from '@material-ui/icons/InsertPhoto';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';

import { mapDispatchToProps } from '../redux/action';

const mapStateToProps = state => ({
  state,
});

const useStyles = makeStyles({
  root: {
    position: 'fixed',
    bottom: '0',
    width: '100%',
    boxShadow: '0 2px 20px grey',
  },
  bottomNav: {
    position: 'fixed',
    bottom: 0,
    width: '100%',
    boxShadow: '0 2px 10px grey',
    zIndex: 2,
  },
});

function BottomNav(props) {
  function redirect(choice) {
    const { history } = props;
    switch (choice) {
      case 'dashboard':
        history.push('/Home');
        break;
      case 'Gallery':
        history.push('/Gallery');
        break;
      case 'Tickets':
        history.push('/Tickets');
        break;
      default:
        history.push('/Home');
    }
  }
  const classes = useStyles();
  const [value] = React.useState(1);
  const handleChange = (event, newValue) => {
    // eslint-disable-next-line no-shadow
    const { mapDispatchToProps } = props;
    mapDispatchToProps(newValue, 'bottomNav');
  };

  const { state } = props;
  return (
    <BottomNavigation
      value={state ? state.bottomNav : value}
      showLabels
      onChange={handleChange}
      className={classes.bottomNav}
    >
      <BottomNavigationAction className={classes.selected} onClick={() => redirect('Home')} label="Home" icon={<Category />} />
      <BottomNavigationAction className={classes.selected} onClick={() => redirect('Gallery')} label="Gallery" icon={<InsertPhoto />} />
      <BottomNavigationAction className={classes.selected} onClick={() => redirect('Tickets')} label="Tickets" icon={<Payment />} />

    </BottomNavigation>
  );
}
export default connect(mapStateToProps, { mapDispatchToProps })(withRouter(BottomNav));
