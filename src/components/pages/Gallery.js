import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardMedia from '@material-ui/core/CardMedia';
import './SCSS/Gallery.scss';
import axios from 'axios';
import TopNav from '../TopNav';
import BottomNav from '../BottomNav';

const API_URL = 'http://localhost:5000';

export const mapStateToProps = state => ({
  state,
});

const useStyles = makeStyles({
  card: {
    width: 200,
    height: 200,
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
  const [url, setUrl] = useState({ name: '', img: '' });

  useEffect(() => {
    axios.get(`${API_URL}/Gallery`)
      .then((res) => {
        const urls = res.data;
        setUrl(urls);
      });
  }, [url.length]);
  return (
    <>
      <TopNav />
      {url.length > 1
        ? (
          <div className="GalleryBody">
            {url.map(() => (
              <ul className={classes.ul}>
                <div style={{ width: '405px', display: 'flex' }}>
                  {url.map(img => (
                    <li className={classes.cardParent}>
                      <Card className={classes.card}>
                        <CardActionArea>
                          <CardMedia
                            className={classes.media}
                            image={img.url}
                            title=""
                          >
                            <div className="black" />
                          </CardMedia>
                        </CardActionArea>
                        <CardActions />
                      </Card>
                    </li>
                  ))}
                </div>
              </ul>
            ))}
          </div>
        ) : <p> loading ...</p>}
      <BottomNav />
    </>
  );
}
