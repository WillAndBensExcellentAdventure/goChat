import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles, MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { deepPurple, purple } from '@material-ui/core/colors';
import LoginPage from './components/containers/LoginPage';

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
    height: '100vh',
    width: '100vw',
    overflow: 'hidden'
  },
};

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      index: 0
    };
  }

  handleChangeIndex = (index) => {
    if (index > 1 || index < 0) {
      throw new Error(`Index ${index} of range`);
    }
    this.setState({ index });
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
              <p>chat dashboard</p>
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
