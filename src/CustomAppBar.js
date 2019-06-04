import React from 'react';
import { AppBar, Responsive } from 'react-admin';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Logo from './Logo';

const styles = {
  title: {
    flex: 1,
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    marginTop: '6px',
    fontFamily: 'Avenir',
  },
  logo: {
    width: '130px',
    padding: '13px 26px',
  },
  login: {
    color: 'white',
    textDecoration: 'none',
    fontFamily: 'Avenir',
    fontWeight: '200',
    marginTop: '6px',
  },
  logout: {
    marginTop: '7px',
  },
};

const CustomAppBar = withStyles(styles)(({ classes }) => (
  <AppBar>
    <Logo />
    <Responsive
      medium={
        <Typography variant="title" color="inherit" className={classes.title}>
          Employee Directory
        </Typography>
      }
      small={null}
    />
    <span className={classes.spacer} />
    {localStorage.getItem('username') && (
      <a className={classes.login} href="/#/Login" onClick={() => localStorage.removeItem('username')}>
        Logout
      </a>
    )}
    {!localStorage.getItem('username') && (
      <a className={classes.login} href="/#/Login">
        Login
      </a>
    )}
  </AppBar>
));

export default CustomAppBar;
