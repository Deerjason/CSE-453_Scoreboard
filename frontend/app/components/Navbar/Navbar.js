import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

import styles from './Navbar-jss';

const Navbar = props => {
  const { classes } = props;
  return (
    <header className={classes.navbar}>
      <nav className={classes.navbar_nav}>
        <div className={classes.navbar_buttons}>
          <ul>
            <li>
              <a href="/">Create Projectile</a>
            </li>
            <li>
              <a href="/leaderboards">Leaderboards</a>
            </li>
            <li>
              <a href="/settings">Settings</a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

Navbar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Navbar);
