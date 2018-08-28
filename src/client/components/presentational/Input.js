import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';

const styles = {
  submitButton: {
    margin: 'auto',
    position: 'relative',
    float: 'right',
    color: 'white',
  },
  message: {
    bottom: 0,
    maxWidth: '90%',
    display: 'inline-block',
    color: 'white'

  },
  messageForm: {
    bottom: 0,
    width: 'calc(100% - 240px)',
    position: 'fixed',
    padding: '1%',
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
  }
};


const Input = (props) => {
  const { classes } = props;
  console.log(props.value);
  return (
    <form
      autoComplete="off"
      className={classes.messageForm}
      onSubmit={props.onSubmit}
    >
      <TextField
        id="message"
        label="message"
        name="currentMessage"
        onChange={props.handleChange}
        value={props.value}
        fullWidth
        className={classes.message}
      />
      <Button
        type="submit"
        className={classes.submitButton}
      >
          Send
      </Button>
    </form>
  );
};

Input.propTypes = {
  classes: PropTypes.object.isRequired,
  handleChange: PropTypes.func.isRequired,

};

export default withStyles(styles)(Input);
