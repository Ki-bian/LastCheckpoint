import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardMedia from '@material-ui/core/CardMedia';
import './Gallery.css';
import TopNav from '../TopNav';
import BottomNav from '../BottomNav';

const useStyles = makeStyles({
  card: {
    width: 220,
    height: 220,
    borderRadius: 0,
  },
  media: {
    height: 220,
  },
  ul: {
    overflowX: 'scroll',
    listStyle: 'none',
  },
  cardParent: {
    margin: '1px 0 0 1px',
  },
});

export default function Gallery() {
  const classes = useStyles();
  return (
    <>
      <TopNav />
      <div style={{ paddingTop: '50px', paddingBottom: '60px' }} className="GalleryBody">
        <ul className={classes.ul}>
          <div style={{ width: '405px', display: 'flex' }}>
            <li className={classes.cardParent}>
              <Card className={classes.card}>
                <CardActionArea>
                  <CardMedia
                    className={classes.media}
                    image="https://image.noelshack.com/fichiers/2019/29/6/1563651120-57547.jpg"
                    title=""
                  >
                    <div className="black" />
                  </CardMedia>
                </CardActionArea>
                <CardActions />
              </Card>
            </li>
            <li className={classes.cardParent}>
              <Card className={classes.card}>
                <CardActionArea>
                  <CardMedia
                    className={classes.media}
                    image="https://image.noelshack.com/fichiers/2019/29/6/1563651120-57547.jpg"
                    title=""
                  >
                    <div className="black" />
                  </CardMedia>
                </CardActionArea>
                <CardActions />
              </Card>
            </li>
            <li className={classes.cardParent}>
              <Card className={classes.card}>
                <CardActionArea>
                  <CardMedia
                    className={classes.media}
                    image="https://image.noelshack.com/fichiers/2019/29/6/1563651120-57547.jpg"
                    title=""
                  >
                    <div className="black" />
                  </CardMedia>
                </CardActionArea>
                <CardActions />
              </Card>
            </li>
          </div>
        </ul>
        <ul className={classes.ul}>
          <div style={{ width: '405px', display: 'flex' }}>
            <li className={classes.cardParent}>
              <Card className={classes.card}>
                <CardActionArea>
                  <CardMedia
                    className={classes.media}
                    image="https://image.noelshack.com/fichiers/2019/29/6/1563651120-57547.jpg"
                    title=""
                  >
                    <div className="black" />
                  </CardMedia>
                </CardActionArea>
                <CardActions />
              </Card>
            </li>
            <li className={classes.cardParent}>
              <Card className={classes.card}>
                <CardActionArea>
                  <CardMedia
                    className={classes.media}
                    image="https://image.noelshack.com/fichiers/2019/29/6/1563651120-57547.jpg"
                    title=""
                  >
                    <div className="black" />
                  </CardMedia>
                </CardActionArea>
                <CardActions />
              </Card>
            </li>
            <li className={classes.cardParent}>
              <Card className={classes.card}>
                <CardActionArea>
                  <CardMedia
                    className={classes.media}
                    image="https://image.noelshack.com/fichiers/2019/29/6/1563651120-57547.jpg"
                    title=""
                  >
                    <div className="black" />
                  </CardMedia>
                </CardActionArea>
                <CardActions />
              </Card>
            </li>
          </div>
        </ul>
        <ul className={classes.ul}>
          <div style={{ width: '405px', display: 'flex' }}>
            <li className={classes.cardParent}>
              <Card className={classes.card}>
                <CardActionArea>
                  <CardMedia
                    className={classes.media}
                    image="https://image.noelshack.com/fichiers/2019/29/6/1563651120-57547.jpg"
                    title=""
                  >
                    <div className="black" />
                  </CardMedia>
                </CardActionArea>
                <CardActions />
              </Card>
            </li>
            <li className={classes.cardParent}>
              <Card className={classes.card}>
                <CardActionArea>
                  <CardMedia
                    className={classes.media}
                    image="https://image.noelshack.com/fichiers/2019/29/6/1563651120-57547.jpg"
                    title=""
                  >
                    <div className="black" />
                  </CardMedia>
                </CardActionArea>
                <CardActions />
              </Card>
            </li>
            <li className={classes.cardParent}>
              <Card className={classes.card}>
                <CardActionArea>
                  <CardMedia
                    className={classes.media}
                    image="https://image.noelshack.com/fichiers/2019/29/6/1563651120-57547.jpg"
                    title=""
                  >
                    <div className="black" />
                  </CardMedia>
                </CardActionArea>
                <CardActions />
              </Card>
            </li>
          </div>
        </ul>
        <ul className={classes.ul}>
          <div style={{ width: '405px', display: 'flex' }}>
            <li className={classes.cardParent}>
              <Card className={classes.card}>
                <CardActionArea>
                  <CardMedia
                    className={classes.media}
                    image="https://image.noelshack.com/fichiers/2019/29/6/1563651120-57547.jpg"
                    title=""
                  >
                    <div className="black" />
                  </CardMedia>
                </CardActionArea>
                <CardActions />
              </Card>
            </li>
            <li className={classes.cardParent}>
              <Card className={classes.card}>
                <CardActionArea>
                  <CardMedia
                    className={classes.media}
                    image="https://image.noelshack.com/fichiers/2019/29/6/1563651120-57547.jpg"
                    title=""
                  >
                    <div className="black" />
                  </CardMedia>
                </CardActionArea>
                <CardActions />
              </Card>
            </li>
            <li className={classes.cardParent}>
              <Card className={classes.card}>
                <CardActionArea>
                  <CardMedia
                    className={classes.media}
                    image="https://image.noelshack.com/fichiers/2019/29/6/1563651120-57547.jpg"
                    title=""
                  >
                    <div className="black" />
                  </CardMedia>
                </CardActionArea>
                <CardActions />
              </Card>
            </li>
          </div>
        </ul>
      </div>
      <BottomNav />
    </>
  );
}
