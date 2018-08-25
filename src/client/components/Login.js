import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
  // const { theme } = props;
  // const primaryColor = theme.palette.primary;

  const styles = {
    card: {
      minWidth: 275,
      maxWidth: '30%',
      margin: 'auto',
      textAlign: 'center',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%,-50%)',
      position: 'absolute'
    },
    bullet: {
      display: 'inline-block',
      margin: '0 2px',
      transform: 'scale(0.8)',
    },
    title: {
      marginBottom: 16,
      fontSize: 14,
    },
    pos: {
      marginBottom: 12,
    },
    buttonContainer: {
      justifyContent: 'space-around',
    }
  };


function Login(props) {
  const { classes } = props;

  return (
    <Card className={classes.card}>
      <CardContent>
        <Typography variant="display2" component="h2">
          Welcome
        </Typography>
        <Divider />
        <Typography variant="headline" color="textSecondary">
          <strong>What can be said with words is better left on read</strong>
        </Typography>
        <Typography component="i">
          Instant messaging for your friends to ignore!
        </Typography>
      </CardContent>
      <CardActions className={classes.buttonContainer}>
        <Button
          className={classes.button}
          variant="contained"
          color="primary"
          size="small"
        >
            SIGN UP
        </Button>
      </CardActions>
    </Card>
  );
}

Login.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Login);
