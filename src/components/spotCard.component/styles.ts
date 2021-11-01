const styles = {
  mainCard: {
    bgcolor: 'background.default',
    border: 0,
    borderRadius: 2,
    padding: 2,
    alignContent: 'flex-start',
    display: 'flex',
    flexDirection: 'column',
    marginTop: 5,
  },
  spotTitle: {
    color: 'text.primary',
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'left',
  },
  signalTitle: {
    fontSize: 15,
    color: 'red',
  },
} as const;

export default styles;
