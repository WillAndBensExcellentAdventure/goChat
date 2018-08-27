import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles, MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { deepPurple, purple } from '@material-ui/core/colors';
import LoginPage from './components/containers/LoginPage';
import DashboardPage from './components/containers/DashboardPage';

// example theme, please change
// you can use hex colors too
// you can also color theme components ie: primary, dard, contrastText ...
const theme = createMuiTheme({
  palette: {
    primary: deepPurple,
    secondary: purple
  }
});

const styles = {
  app: {
  },

};

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      index: 1
    };
  }

  handleChangeIndex = (index) => {
    if (index > 1 || index < 0) {
      throw new Error(`Index ${index} of range`);
    }
    this.setState({ index });
    console.log('changed index to');
  }

  render = () => {
    const { classes } = this.props;
    const { index } = this.state;
    return (
      <MuiThemeProvider theme={theme}>
        <div className={classes.app}>
          {
            index === 0 ?
              <LoginPage handleChangeIndex={this.handleChangeIndex} />
            :
              <DashboardPage />
          }
        </div>
      </MuiThemeProvider>
    );
  }
}

App.propTypes = {
  classes: PropTypes.object.isRequired
};


export default withStyles(styles)(App);
