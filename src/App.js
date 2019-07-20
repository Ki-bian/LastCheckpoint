import React from 'react';
import './App.css';
import { HashRouter, Switch, Route } from 'react-router-dom';
import { ThemeProvider } from '@material-ui/styles';
import { createMuiTheme } from '@material-ui/core/styles';
import Welcome from './components/pages/Welcome';
import Home from './components/pages/Home';
import Gallery from './components/pages/Gallery';
import Tickets from './components/pages/Tickets';

const theme = createMuiTheme({
  palette: {
    primary: { main: '#29A7C4' },
    secondary: { main: '#572E82' },
  },
});

const App = () => (
  <div className="App">
    <ThemeProvider theme={theme}>
      <HashRouter>
        <Switch>
          <Route exact path="/" component={Welcome} />
          <Route exact path="/Home" component={Home} />
          <Route exact path="/Gallery" component={Gallery} />
          <Route exact path="/Tickets" component={Tickets} />
        </Switch>
      </HashRouter>
    </ThemeProvider>
  </div>
);


export default App;
