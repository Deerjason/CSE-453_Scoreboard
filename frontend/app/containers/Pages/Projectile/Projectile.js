import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';

import NotFoundPage from 'containers/NotFoundPage/Loadable';
import {
  getProjectile /* , editProjectile */,
  // eslint-disable-next-line import/no-unresolved
} from 'my-actions/projectileActions';
// eslint-disable-next-line import/no-unresolved
import Loading from 'my-components/Loading';
// eslint-disable-next-line import/no-unresolved
import Navbar from 'my-components/Navbar/Navbar';
// eslint-disable-next-line import/no-unresolved
import { makeSelectProjectile } from 'my-selectors/projectileSelectors';
import styles from './projectile-jss';

class Projectile extends Component {
  state = {
    identity: null,
    acceleration: null,
    hang_time: null,
    bounce_height: null,
    score: null,
    error: false,
    // edit_error: false,
    loading: false,
  };

  static getDerivedStateFromProps(props) {
    if (props.projectile.error === true) {
      return {
        error: true,
      };
    }
    if (props.projectile.identity === null) {
      return {
        loading: true,
      };
    }
    /* if (props.projectile.edit_error === true) {
      return {
        edit_error: true,
      };
    } */
    return {
      identity: props.projectile.identity,
      acceleration: props.projectile.acceleration,
      hang_time: props.projectile.hang_time,
      bounce_height: props.projectile.bounce_height,
      score: props.projectile.score,
      loading: false,
    };
  }

  componentDidMount() {
    const { onGetProjectile } = this.props;
    const payload = { identity: this.props.match.params.identity };
    onGetProjectile(payload);
  }

  render() {
    if (this.state.loading) {
      return <Loading />;
    }
    if (this.state.error) {
      return <NotFoundPage />;
    }
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <Navbar />
        <Grid container spacing={2}>
          <Grid item md={3} sm={10} xs={12}>
            <div className={classes.identity}>{this.state.identity}</div>
            <div className={classes.acceleration}>
              Acceleration: {this.state.acceleration} <sup>m</sup>&frasl;
              <sub>
                s<sup>2</sup>
              </sub>
            </div>
            <div className={classes.hang_time}>
              Hang Time: {this.state.hang_time} s
            </div>
            <div className={classes.bounce_height}>
              Bounce Height: {this.state.bounce_height} cm
            </div>
            <div className={classes.score}>Score: {this.state.score}</div>
          </Grid>
        </Grid>
      </div>
    );
  }
}

Projectile.propTypes = {
  classes: PropTypes.object.isRequired,
  onGetProjectile: PropTypes.func.isRequired,
  // onEditProjectile: PropTypes.func.isRequired,
  match: PropTypes.shape({
    params: PropTypes.shape({
      identity: PropTypes.string.isRequired,
    }),
  }),
};

const mapStateToProps = createStructuredSelector({
  projectile: makeSelectProjectile(),
});

const mapDispatchToProps = dispatch => ({
  onGetProjectile: payload => dispatch(getProjectile(payload)),
  // onEditProjectile: payload => dispatch(editProjectile(payload)),
});

const ProjectileMapped = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Projectile);

export default withStyles(styles)(ProjectileMapped);
