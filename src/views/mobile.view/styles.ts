const styles = {
  button: {
    bgcolor: '#5DADEC',
    color: 'white',
    textTransform: 'none',
    height: '50px',
    width: '80%',
    borderRadius: 2,
    marginTop: 2,
  },
  introText: {
    color: 'text.primary',
    textAlign: 'center',
    paddingLeft: 3,
    paddingRight: 3,
  },
  title: {
    color: 'text.primary',
    textAlign: 'center',
    paddingLeft: 3,
    paddingRight: 3,
  },
  mainView: {
    width: '100%',
    bgcolor: 'background.default',
    opacity: 0.8,
    display: 'flex',
    justifyContent: 'left',
    flexDirection: 'column',
    alignItems: 'center',
    paddingTop: 10,
  },
} as const;

export default styles;
