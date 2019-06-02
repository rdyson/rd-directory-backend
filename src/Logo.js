import React from 'react';
import { withStyles } from '@material-ui/core/styles';

const styles = {
  logo: {
    width: '130px',
    padding: '13px 26px',
  },
};

const Logo = withStyles(styles)(({ classes }) => (
  <a href="/">
    <img src="/logo.png" alt="Postlight Logo" className={classes.logo} />
  </a>
));

export default Logo;
