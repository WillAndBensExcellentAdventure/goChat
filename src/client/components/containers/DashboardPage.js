import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';

import Input from '../presentational/Input';
import { myDrawer } from '../presentational/Drawer';

const styles = {
  dashboard: {

  }
};
 class Dashboard extends Component {
  constructor(props) {
    super(props);

    this.state = {

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

    return (

      <div className={classes.dashboard}>
        <Input handleChange={this.handleChange} />
        <myDrawer />
      </div>

    );
  }
}

export default withStyles(styles)(Dashboard);
