
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import BottomNav from '../BottomNav';
import TopNav from '../TopNav';


const useStyles = makeStyles(theme => ({
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

export default function Tickets() {
  const classes = useStyles();

  return (
    <>
      <TopNav />
      <div style={{ paddingTop: 50, paddingLeft: 4, paddingBottom: 60 }}>
        <Card className={classes.card}>
          <img src="https://image.noelshack.com/fichiers/2019/29/7/1563663950-ticket.jpg" className={classes.cover} />

          <div className={classes.details}>
            <CardContent className={classes.content}>
              <Typography component="h6" variant="h6">
                12/08/2020
              </Typography>
              <Button variant="contained" color="primary" className={classes.button} style={{ color: 'white', fontWeight: 'bold', marginTop: 7 }}>
                BUY TICKET
              </Button>
            </CardContent>
            <div style={{
              borderRadius: 100, backgroundColor: 'red', width: 25, height: 25, marginTop: 4, textAlign: 'center', color: 'white', fontWeight: 'bold',
            }}
            >
              4
            </div>
          </div>
        </Card>
        <Card className={classes.card}>
          <img src="https://image.noelshack.com/fichiers/2019/29/7/1563663950-ticket.jpg" className={classes.cover} />

          <div className={classes.details}>
            <CardContent className={classes.content}>
              <Typography component="h6" variant="h6">
                13/01/2020
              </Typography>
              <Button variant="contained" color="primary" className={classes.button} style={{ color: 'white', fontWeight: 'bold', marginTop: 7 }}>
                BUY TICKET
              </Button>
            </CardContent>
            <div style={{
              borderRadius: 100, backgroundColor: 'red', width: 25, height: 25, marginTop: 4, textAlign: 'center', color: 'white', fontWeight: 'bold',
            }}
            >
              4
            </div>
          </div>
        </Card>
        <Card className={classes.card}>
          <img src="https://image.noelshack.com/fichiers/2019/29/7/1563663950-ticket.jpg" className={classes.cover} />

          <div className={classes.details}>
            <CardContent className={classes.content}>
              <Typography component="h6" variant="h6">
                12/08/2020
              </Typography>
              <Button variant="contained" color="primary" className={classes.button} style={{ color: 'white', fontWeight: 'bold', marginTop: 7 }}>
                BUY TICKET
              </Button>
            </CardContent>
            <div style={{
              borderRadius: 100, backgroundColor: 'red', width: 25, height: 25, marginTop: 4, textAlign: 'center', color: 'white', fontWeight: 'bold',
            }}
            >
              4
            </div>
          </div>
        </Card>
        <Card className={classes.card}>
          <img src="https://image.noelshack.com/fichiers/2019/29/7/1563663950-ticket.jpg" className={classes.cover} />

          <div className={classes.details}>
            <CardContent className={classes.content}>
              <Typography component="h6" variant="h6">
                12/08/2020
              </Typography>
              <Button variant="contained" color="primary" className={classes.button} style={{ color: 'white', fontWeight: 'bold', marginTop: 7 }}>
                BUY TICKET
              </Button>
            </CardContent>
            <div style={{
              borderRadius: 100, backgroundColor: 'red', width: 25, height: 25, marginTop: 4, textAlign: 'center', color: 'white', fontWeight: 'bold',
            }}
            >
              4
            </div>
          </div>
        </Card>
        <Card className={classes.card}>
          <img src="https://image.noelshack.com/fichiers/2019/29/7/1563663950-ticket.jpg" className={classes.cover} />

          <div className={classes.details}>
            <CardContent className={classes.content}>
              <Typography component="h6" variant="h6">
                12/08/2020
              </Typography>
              <Button variant="contained" color="primary" className={classes.button} style={{ color: 'white', fontWeight: 'bold', marginTop: 7 }}>
                BUY TICKET
              </Button>
            </CardContent>
            <div style={{
              borderRadius: 100, backgroundColor: 'red', width: 25, height: 25, marginTop: 4, textAlign: 'center', color: 'white', fontWeight: 'bold',
            }}
            >
              4
            </div>
          </div>
        </Card>
        <Card className={classes.card}>
          <img src="https://image.noelshack.com/fichiers/2019/29/7/1563663950-ticket.jpg" className={classes.cover} />

          <div className={classes.details}>
            <CardContent className={classes.content}>
              <Typography component="h6" variant="h6">
                12/08/2020
              </Typography>
              <Button variant="contained" color="primary" className={classes.button} style={{ color: 'white', fontWeight: 'bold', marginTop: 7 }}>
                BUY TICKET
              </Button>
            </CardContent>
            <div style={{
              borderRadius: 100, backgroundColor: 'red', width: 25, height: 25, marginTop: 4, textAlign: 'center', color: 'white', fontWeight: 'bold',
            }}
            >
              4
            </div>
          </div>
        </Card>
      </div>
      <BottomNav />
    </>
  );
}
