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
  spacer: {
    flex: 1,
  },
  logo: {
    width: '130px',
    padding: '13px 26px',
  },
};

const CustomAppBar = withStyles(styles)(({ classes, logout }) => (
  <AppBar>
    <Logo />
    <Typography variant="title" color="inherit" className={classes.title}>
      Employee Directory
    </Typography>
    <span className={classes.spacer} />
    {localStorage.getItem('username') && <Responsive small={logout} medium={logout} />}
    {!localStorage.getItem('username') && <a href="/#/Login">Login</a>}
  </AppBar>
));

export default CustomAppBar;
