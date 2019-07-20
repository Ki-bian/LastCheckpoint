import React, { Component } from 'react';
import { withRouter } from 'react-router';
import BottomNav from '../BottomNav';
import TopNav from '../TopNav';


export const mapStateToProps = state => ({
  state,
});

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }


  render() {
    return (
      <>
        <TopNav />
        <BottomNav />
      </>
    );
  }
}

export default withRouter(Home);
