
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { AppBar, Typography } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import Login from '../presentational/Login';

const styles = {
  page: {
    display: 'inline-block',
    height: '100vh',
    width: '100vw',
    overflow: 'auto'
  },
  title: {
    color: 'white',
    padding: '.5rem'
  }
};

class LoginPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // placeholder for login
      username: '',
      password: ''
    };
  }

  render = () => {
    // classes provides the generated classnames on an object
    const { classes } = this.props;
    console.log('secrets for dev ', this.state);
    return (
      <div className={classes.page}>
        <AppBar
          position="static"
          color="primary"
        >
          <Typography
            variant="headline"
            className={classes.title}
            align="center"
          >
            TITLE HERE
          </Typography>
        </AppBar>
        <Login />
      </div>
    );
  }
}

LoginPage.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(LoginPage);
// export default App;
