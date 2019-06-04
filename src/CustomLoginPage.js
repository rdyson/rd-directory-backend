import React from 'react';
import { Login, LoginForm } from 'react-admin';
import { withStyles } from '@material-ui/core/styles';

const styles = {
  link: {
    fontFamily: 'Avenir',
    textAlign: 'center',
  },
};

const BackLink = withStyles(styles)(({ classes }) => (
  <div className={classes.link}>
    <a href="/#/Employee">Back to Employee Directory</a>
  </div>
));

const CustomLoginPage = props => (
  <Login
    loginForm={
      <div>
        <BackLink />
        <LoginForm />
      </div>
    }
    backgroundImage="/background.png"
    {...props}
  />
);

export default withStyles(styles)(CustomLoginPage);
