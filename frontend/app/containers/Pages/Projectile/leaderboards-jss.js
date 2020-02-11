const styles = theme => ({
  root: {
    margin: '0 auto',
    maxWidth: '65%',
    [theme.breakpoints.down('sm')]: {
      maxWidth: '100%',
    },
  },

  title: {
    position: 'relative',
    top: 100,
    left: 220,
    fontSize: 50,
  },

  projectileList: {
    position: 'relative',
    top: 120,
    left: 240,
    display: 'flex',
    flexWrap: 'wrap',
    flexDirection: 'column',
    '& li': {
      fontSize: 20,
    },
  },

  projectile: {
    width: 234,
    fontSize: 20,
    cursor: 'pointer',
    overflow: 'auto',
    transition: '0.8s cubic-bezier(0.2, 0.8, 0.2, 1)',
    '&:hover': {
      color: '#0000ff',
    },
  },
});

export default styles;
