import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Typography } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import Login from '../presentational/Login';

const styles = {
  page: {
    display: 'inline-block',
    height: '100vh',
    width: '100vw',
    overflow: 'hidden'
  },
  title: {
    color: 'white',
    padding: '.5rem',
    // position: 'absolute',
    maxWidth: '100%'
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
  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    });
  }
  submitUserInfo = (e) => {
    e.preventDefault();
    console.log(this.state);
    this.props.handleChangeIndex(1);
  }
  render = () => {
    // classes provides the generated classnames on an object
    const { classes } = this.props;
    // console.log('secrets for dev ', this.state);
    return (
      <div className={classes.page}>

        <Typography
          variant="headline"
          className={classes.title}
          align="center"
        >
            TITLE HERE
        </Typography>

        <Login submitUserInfo={this.submitUserInfo} handleChange={this.handleChange} />
      </div>
    );
  }
}

LoginPage.propTypes = {
  classes: PropTypes.object.isRequired,
  handleChangeIndex: PropTypes.number.isRequired
};

export default withStyles(styles)(LoginPage);
