import React from 'react';
import BottomNav from '../BottomNav';
import TopNav from '../TopNav';

export const mapStateToProps = state => ({
  state,
});

export default function Gallery() {
  return (
    <>
      <TopNav />
      <div style={{
        backgroundImage: 'url("https://www.cirquedusoleil.com/-/media/cds/images/shows/corteo/featured_hero/corteo-hero-mobile.jpg?db=web&h=600&la=fr&vs=1&w=640&hash=8304364719A4F2EA2E1DDD7E24150439EDF71AB1")', width: '100%', height: '83.5%', backgroundSize: 'cover', backgroundRepeat: 'no-repeat', display: 'flex', flexDirection: 'column', justifyContent: 'space-evenly',
      }}
      >
        <h1 style={{ color: '#004152', margin: 20, marginTop: '-100px' }}>Le plus grand cirque de France</h1>
        <p style={{
          color: 'grey', margin: 20, marginTop: '-60px', fontSize: 19,
        }}
        >
Avec la Wild Code School, le wild Circus nous offre le plus bel écrin de son histoire.

        </p>
      </div>
      <BottomNav />
    </>
  );
}
