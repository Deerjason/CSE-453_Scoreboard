import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Button from '@material-ui/core/Button';
import InputAdornment from '@material-ui/core/InputAdornment';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';

// eslint-disable-next-line import/no-unresolved
import { createProjectile } from 'my-actions/projectileActions';
// eslint-disable-next-line import/no-unresolved
import Loading from 'my-components/Loading';
// eslint-disable-next-line import/no-unresolved
import Navbar from 'my-components/Navbar/Navbar';
import styles from './create_projectile-jss';

function isNumberValid(num) {
  const s = num.split('.');
  if (s[0].length > 5) {
    return false;
  }
  if (s.length > 1 && s[1].length > 5) {
    return false;
  }
  return true;
}

class CreateProjectile extends Component {
  state = {
    acceleration: '',
    hang_time: '',
    bounce_height: '',
    accelerationError: false,
    hangTimeError: false,
    bounceHeightError: false,
    created: false,
  };

  handleAccelerationChange = event => {
    this.setState({
      acceleration: event.target.value,
    });
  };

  handleHangTimeChange = event => {
    this.setState({
      hang_time: event.target.value,
    });
  };

  handleBounceHeightChange = event => {
    this.setState({
      bounce_height: event.target.value,
    });
  };

  handleCreateProjectile = () => {
    if (!isNumberValid(this.state.acceleration)) {
      this.setState({
        accelerationError: true,
      });
    }
    if (!isNumberValid(this.state.hang_time)) {
      this.setState({
        hangTimeError: true,
      });
    }
    if (!isNumberValid(this.state.bounce_height)) {
      this.setState({
        bounceHeightError: true,
      });
    }
    if (
      !this.state.accelerationError &&
      !this.state.hangTimeError &&
      !this.state.bounceHeightError
    ) {
      const { onCreateProjectile } = this.props;
      const payload = {
        acceleration: this.state.acceleration,
        hang_time: this.state.hang_time,
        bounce_height: this.state.bounce_height,
      };
      onCreateProjectile(payload);
      this.setState({
        created: true,
      });
    }
  };

  render() {
    if (this.state.created) {
      return <Loading />;
    }
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <Navbar />
        <Grid container spacing={2}>
          <Grid item md={3} sm={10} xs={12}>
            <b className={classes.title}> Create Projectile </b>
            <TextField
              label="Acceleration"
              className={classes.acceleration}
              value={this.state.acceleration}
              onChange={this.handleAccelerationChange}
              required
              type="number"
              error={this.state.accelerationError}
              helperText="Up to 5 numbers before and 5 numbers after the decimal point"
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <sup>m</sup>&frasl;
                    <sub>
                      s<sup>2</sup>
                    </sub>
                  </InputAdornment>
                ),
              }}
            />
            <TextField
              label="Hang Time"
              className={classes.hang_time}
              value={this.state.hang_time}
              onChange={this.handleHangTimeChange}
              required
              type="number"
              error={this.state.hangTimeError}
              helperText="Up to 5 numbers before and 5 numbers after the decimal point"
              InputProps={{
                endAdornment: <InputAdornment position="end">s</InputAdornment>,
              }}
            />
            <TextField
              label="Bounce Height"
              className={classes.bounce_height}
              value={this.state.bounce_height}
              onChange={this.handleBounceHeightChange}
              required
              type="number"
              error={this.state.bounceHeightError}
              helperText="Up to 5 numbers before and 5 numbers after the decimal point"
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">cm</InputAdornment>
                ),
              }}
            />
            <div className={classes.submitButton}>
              <Button
                variant="contained"
                color="primary"
                type="button"
                onClick={this.handleCreateProjectile}
                disabled={
                  this.state.created ||
                  this.state.acceleration === '' ||
                  this.state.hang_time === '' ||
                  this.state.bounce_height === ''
                }
              >
                Submit
              </Button>
            </div>
          </Grid>
        </Grid>
      </div>
    );
  }
}

CreateProjectile.propTypes = {
  classes: PropTypes.object.isRequired,
  onCreateProjectile: PropTypes.func.isRequired,
};

const mapDispatchToProps = dispatch => ({
  onCreateProjectile: payload => dispatch(createProjectile(payload)),
});

const CreateProjectileMapped = connect(
  null,
  mapDispatchToProps,
)(CreateProjectile);

export default withStyles(styles)(CreateProjectileMapped);
