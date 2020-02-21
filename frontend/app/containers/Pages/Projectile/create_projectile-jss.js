const styles = theme => ({
  root: {
    margin: '0 auto',
    maxWidth: '65%',
    [theme.breakpoints.down('sm')]: {
      maxWidth: '100%',
    },
    maxHeight: '100%',
  },

  title: {
    position: 'relative',
    top: 250,
    left: 300,
    whiteSpace: 'nowrap',
    fontSize: 50,
  },

  acceleration: {
    position: 'relative',
    top: 300,
    left: 245,
    width: 150,
    overflow: 'auto',
  },

  hang_time: {
    position: 'relative',
    top: 192,
    left: 425,
    width: 150,
    overflow: 'auto',
  },

  bounce_height: {
    position: 'relative',
    top: 84,
    left: 605,
    width: 150,
    overflow: 'auto',
  },

  submitButton: {
    position: 'relative',
    top: 150,
    left: 455,
    width: 170,
    height: 40,
  },
});

export default styles;
