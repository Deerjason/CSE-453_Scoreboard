import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';

// eslint-disable-next-line import/no-unresolved
import { getProjectiles } from 'my-actions/projectileActions';
// eslint-disable-next-line import/no-unresolved
import Loading from 'my-components/Loading';
// eslint-disable-next-line import/no-unresolved
import Navbar from 'my-components/Navbar/Navbar';
// eslint-disable-next-line import/no-unresolved
import { makeSelectProjectiles } from 'my-selectors/projectileSelectors';
import styles from './leaderboards-jss';

class Leaderboards extends Component {
  state = {
    projectiles: [],
    loading: false,
  };

  static getDerivedStateFromProps(props) {
    if (props.projectiles.projectiles === null) {
      return {
        loading: true,
      };
    }
    return {
      projectiles: props.projectiles,
      loading: false,
    };
  }

  componentDidMount() {
    const { onGetProjectiles } = this.props;
    onGetProjectiles();
  }

  handleProjectileClick = id => {
    window.location.href = `/projectile/${id}`;
  };

  render() {
    if (this.state.loading) {
      return <Loading />;
    }
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <Navbar />
        <Grid container spacing={2} justify="center">
          <Grid item md={9} sm={12} xs={12}>
            <b className={classes.title}>
              {' '}
              <u>Leaderboards</u>{' '}
            </b>
            <ol className={classes.projectileList}>
              {this.state.projectiles.map(projectile => (
                <Grid
                  item
                  lg={4}
                  md={5}
                  sm={4}
                  xs={5}
                  key={projectile.identity}
                >
                  <li>
                    <p
                      className={classes.projectile}
                      onClick={() =>
                        this.handleProjectileClick(projectile.identity)
                      }
                      role="presentation"
                    >
                      {projectile.identity}: {projectile.score}
                    </p>
                  </li>
                </Grid>
              ))}
            </ol>
          </Grid>
        </Grid>
      </div>
    );
  }
}

Leaderboards.propTypes = {
  classes: PropTypes.object.isRequired,
  onGetProjectiles: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  projectiles: makeSelectProjectiles(),
});

const mapDispatchToProps = dispatch => ({
  onGetProjectiles: () => dispatch(getProjectiles()),
});

const LeaderboardsMapped = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Leaderboards);

export default withStyles(styles)(LeaderboardsMapped);
