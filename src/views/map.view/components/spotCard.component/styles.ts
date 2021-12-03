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
    marginLeft: 2,
  },
  signalTitle: {
    fontSize: 15,
    color: '#F60C0C',
  },
  dataContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  dataText: {
    color: 'text.primary',
    fontSize: 12,
    marginLeft: 0.4,
  },
  button: {
    bgcolor: 'background.paper',
    textTransform: 'none',
    height: '50px',
    borderRadius: 2,
    marginTop: 2,
  },
  qualityContainer: {
    justifyContent: 'space-between',
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    paddingTop: 2,
  },
  headerCard: {
    display: 'flex',
    justifyContent: 'space-between',
  },
} as const;

export default styles;
