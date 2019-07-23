
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { connect } from 'react-redux';
import BottomNav from '../BottomNav';
import TopNav from '../TopNav';

import { mapDispatchToProps } from '../../redux/action';

const API_URL = 'http://localhost:5000';

const useStyles = makeStyles(() => ({
  card: {
    display: 'flex',
    marginTop: 5,
    height: 100,
    width: 350,
  },
  details: {
    display: 'flex',
    flexDirection: 'row',
    textAlign: 'center',
  },
  content: {
    display: 'flex',
    flexDirection: 'column',
    padding: 10,
    paddingLeft: 20,
  },
  cover: {
    width: 170,
  },
}));

function Tickets(props) {
  const classes = useStyles();
  const [datas, setUrl] = useState({
    name: '',
    date: '',
  });

  useEffect(() => {
    axios.get(`${API_URL}/Tickets`)
      .then((res) => {
        const { data } = res;
        setUrl(data);
      });
  }, [datas.length]);

  const handleChange = (event, newValue) => {
    // eslint-disable-next-line no-shadow
    const { mapDispatchToProps } = props;
    mapDispatchToProps(newValue, 'add');
  };
  return (
    <>
      <TopNav />
      {datas.length > 1
        ? (
          <div style={{ paddingLeft: 4 }}>
            {datas.map(index => (
              <Card className={classes.card}>
                <img alt="ticket" src="https://image.noelshack.com/fichiers/2019/29/7/1563663950-ticket.jpg" className={classes.cover} />

                <div className={classes.details}>
                  <CardContent className={classes.content}>
                    <Typography component="h6" variant="h6">
                      {index.date}
                    </Typography>
                    <Button variant="contained" color="primary" className={classes.button} style={{ color: 'white', fontWeight: 'bold', marginTop: 7 }} onClick={() => handleChange()}>
                      <a href=".#/Shop" style={{ textDecoration: 'none', color: 'white', fontSize: 12 }}>
                      Add to cart
                      </a>
                    </Button>
                  </CardContent>
                  <div style={{
                    borderRadius: 100, backgroundColor: 'red', width: 25, height: 25, color: 'white', fontWeight: 'bold', fontSize: 12, marginTop: 5, display: 'flex', alignItems: 'center', justifyContent: 'center',
                  }}
                  >
                    {index.places}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        ) : <p> loading ...</p>}
      <BottomNav />
    </>
  );
}

const mapStateToProps = ({ numberTicket }) => ({ numberTicket });
export default connect(mapStateToProps, { mapDispatchToProps })(Tickets);
