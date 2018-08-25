import React, { Component } from 'react';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import './styles/App.scss';

const theme = createMuiTheme();

class App extends Component {
  componentDidmount = () => {
    console.log('App mounted');
  }

  render = () => (
    <MuiThemeProvider theme={theme}>
      <p>it works!!</p>
    </MuiThemeProvider>
  )
}

export default App;
