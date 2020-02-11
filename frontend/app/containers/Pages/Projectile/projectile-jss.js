const styles = theme => ({
  root: {
    margin: '0 auto',
    maxWidth: '65%',
    [theme.breakpoints.down('sm')]: {
      maxWidth: '100%',
    },
    maxHeight: '100%',
  },

  identity: {
    position: 'relative',
    top: 150,
    left: 390,
    whiteSpace: 'nowrap',
    fontSize: 50,
  },

  acceleration: {
    position: 'relative',
    top: 200,
    left: 420,
  },

  hang_time: {
    position: 'relative',
    top: 250,
    left: 420,
  },

  bounce_height: {
    position: 'relative',
    top: 300,
    left: 420,
  },

  score: {
    position: 'relative',
    top: 350,
    left: 420,
  },
});

export default styles;
