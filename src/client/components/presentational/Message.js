import React from 'react';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import Paper from '@material-ui/core/Paper';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

const styles = {
  messageContainer: {
    margin: '2%'
  }
};

const Message = (props) => {
  const { classes } = props;

  return (
    <Paper
      elevation={2}
      className={classes.messageContainer}
    >
      <Typography
        varient="headline"
        className={classes.sender}
      >
        {props.messageSender}
      </Typography>
      <Typography
        varient="caption"
        className={classes.time}
      >
        {props.messageTime}
      </Typography>
      <Divider />
      <Typography
        className={classes.messageContent}
      >
        {props.messageContent}
      </Typography>
    </Paper>
  );
};


export default withStyles(styles)(Message);
