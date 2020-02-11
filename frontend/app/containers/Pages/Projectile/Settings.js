import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';

import {
  deleteProjectiles,
  // eslint-disable-next-line import/no-unresolved
} from 'my-actions/projectileActions';
// eslint-disable-next-line import/no-unresolved
import Navbar from 'my-components/Navbar/Navbar';
import styles from './settings-jss';

class Settings extends Component {
  state = {
    allProjectilesDeleted: false,
  };

  handleDeleteProjectiles = () => {
    const { onDeleteProjectiles } = this.props;
    onDeleteProjectiles();
    this.setState({
      allProjectilesDeleted: true,
    });
  };

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <Navbar />
        <Grid container spacing={2}>
          <Grid item md={3} sm={10} xs={12}>
            <b className={classes.title}> Settings </b>
            <div className={classes.deleteButton}>
              <Button
                variant="contained"
                color="primary"
                type="button"
                onClick={this.handleDeleteProjectiles}
                disabled={this.state.allProjectilesDeleted}
              >
                Delete All Projectiles
              </Button>
            </div>
          </Grid>
        </Grid>
      </div>
    );
  }
}

Settings.propTypes = {
  classes: PropTypes.object.isRequired,
  onDeleteProjectiles: PropTypes.func.isRequired,
};

const mapDispatchToProps = dispatch => ({
  onDeleteProjectiles: () => dispatch(deleteProjectiles()),
});

const SettingsMapped = connect(
  null,
  mapDispatchToProps,
)(Settings);

export default withStyles(styles)(SettingsMapped);
