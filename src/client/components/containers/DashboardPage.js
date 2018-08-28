import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Input from '../presentational/Input';
import Message from '../presentational/Message';


const drawerWidth = 240;

const styles = theme => ({
  dashboard: {
    flexGrow: 1,
    height: '100vh',
        zIndex: 1,
        overflow: 'hidden',
        position: 'relative',
        display: 'flex',
      },
  appFrame: {
    // height: 440,
    zIndex: 1,
    // overflow: 'hidden',
    position: 'relative',
    display: 'flex',
    width: '100%',
  },
  appBar: {
    // width: `calc(100% - ${drawerWidth}px)`,
    // float: 'left'
  },
  appBarLeft: {
    marginLeft: drawerWidth,
  },
  drawerPaper: {
    position: 'relative',
    width: drawerWidth,
    height: '100%',
  },
  list: {
    width: drawerWidth,
    textAlign: 'center',
    padding: '6%'
  },
  toolbar: theme.mixins.toolbar,
  content: {
    top: 0,
    flexGrow: 1,
    float: 'left',
    width: `calc(100vw - ${drawerWidth}px)`,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing.unit * 3,
  },
});

 class Dashboard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      chatRoom: '',
      user: {
        username: '',
        password: ''
      },
      messages: [
        'My dog said....',
         'Jeff has aassda',
         'Heeeelllooooo?'
       ],
      usersInRoom: [
       'Ben',
       'Will',
       'Steve',
       'Jacob'
     ]
    };
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    });
    console.log(this.state);
  }


  render = () => {
    const { classes } = this.props;

    const users = (
      this.state.usersInRoom.map(user =>
        (
          <Typography
            variant="display2"
            gutterbottom
            className={classes.list}
          >
            {user}
          </Typography>
      )
    )
  );


    return (

      <div className={classes.dashboard}>
        <AppBar position="absolute" className={classes.appBarLeft}>
          <Toolbar>
            <Typography variant="title" color="inherit" noWrap>
            Chat Room
            </Typography>
          </Toolbar>
        </AppBar>
        <main className={classes.content}>
          <div className={classes.toolbar} />

        </main>
        <Drawer
          variant="permanent"
          anchor="right"
          className={classes.drawerPaper}
        >
          <List>
            {users}
          </List>
        </Drawer>
        <div className={classes.toolbar} />
        <Input handleChange={this.handleChange} />
      </div>
    );
  }
}

Dashboard.propTypes = {
  classes: PropTypes.object.isRequired
};
export default withStyles(styles)(Dashboard);
