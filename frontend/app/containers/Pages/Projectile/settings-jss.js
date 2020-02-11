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
    top: 200,
    left: 410,
    fontSize: 50,
  },

  deleteButton: {
    position: 'relative',
    top: 340,
    left: 425,
    width: 170,
    height: 40,
  },
});

export default styles;
