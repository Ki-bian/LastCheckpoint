import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import Remove from '@material-ui/icons/Remove';
import Button from '@material-ui/core/Button';
import { connect } from 'react-redux';
import TopNav from '../TopNav';
import BottomNav from '../BottomNav';

import { mapDispatchToProps } from '../../redux/action';


function Shop(props) {
  const useStyles = makeStyles(theme => ({
    root: {
      marginTop: '10vh',
      padding: theme.spacing(4, 2),
      display: 'flex',
      justifyContent: 'center',
      flexDirection: 'row',
    },
    margin: {
      margin: theme.spacing(0.5),
      color: 'white',
    },
    button: {
      width: 200,
      height: 50,
    },
  }));

  const classes = useStyles();
  const handleChange = (event, newValue) => {
    // eslint-disable-next-line no-shadow
    const { mapDispatchToProps } = props;
    mapDispatchToProps(newValue, 'remove');
  };

  const handleChange2 = (event, newValue) => {
    // eslint-disable-next-line no-shadow
    const { mapDispatchToProps } = props;
    mapDispatchToProps(newValue, 'add');
  };
  const { numberTicket } = props;
  return (
    <>
      <TopNav />
      <Paper className={classes.root}>
        <Typography variant="h5" component="h3" style={{ lineHeight: 2.2, marginRight: 30 }}>
          Ticket : x
          {' '}
          {numberTicket}
        </Typography>
        <Fab size="medium" color="primary" aria-label="Remove" className={classes.margin} onClick={() => handleChange()}>
          <Remove />
        </Fab>
        <Fab size="medium" color="primary" aria-label="Add" className={classes.margin} onClick={() => handleChange2()}>
          <AddIcon />
        </Fab>
      </Paper>
      <div style={{ display: 'flex', justifyContent: 'center', marginTop: 20 }}>
        <Button variant="contained" color="secondary" className={classes.button}>
          BUY WITH PAYPAL
        </Button>
      </div>
      <BottomNav />
    </>
  );
}

const mapStateToProps = ({ numberTicket }) => ({ numberTicket });
export default connect(mapStateToProps, { mapDispatchToProps })(Shop);
