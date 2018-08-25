import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Login from './components/Login';

const styles = {
  App: {
    position: 'relative',
  },
  AppHeader: {
    position: 'absolute',
    bottom: 0,
    right: 0,
  }
};
const App = () => {
  return (
    <div className="App">
      <header className="AppHeader">
        <h1 className="App-title"><i>Popitize</i></h1>
      </header>
      <Login classes={
        {
          card: 'signUpCard',
          buttonContainer: 'buttonContainer',
        }
      }
      />
    </div>
    )
};

const AppStyled = withStyles(styles)(App);
export default AppStyled;
// export default App;
