import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';


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
    submitButton: {
      bottom: 0,
      margin: 'auto',
      marginTop: '2%',
      display: 'block'
    },
    signUpContainer: {
      margin: 'auto',
    }

  };


const Login = (props) => {
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
      <CardActions>
        <ExpansionPanel className={classes.signUpContainer}>
          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
            <Typography className={classes.heading}>
              SIGN UP
            </Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <form
              className={classes.signUpForm}
              autoComplete="off"
              onSubmit={props.submitUserInfo}
            >
              <TextField
                id="username"
                label="Username"
                name="username"
                onChange={props.handleChange}
                className={classes.textField}
              />
              <TextField
                id="password"
                label="Password"
                name="password"
                onChange={props.handleChange}
                className={classes.textField}
              />
              <Button
                type="submit"
                className={classes.submitButton}
              >
                submit
              </Button>
            </form>
          </ExpansionPanelDetails>
        </ExpansionPanel>
      </CardActions>
    </Card>
  );
};

Login.propTypes = {
  classes: PropTypes.object.isRequired,
  handleChange: PropTypes.func.isRequired,
  submitUserInfo: PropTypes.func.isRequired
};

export default withStyles(styles)(Login);
