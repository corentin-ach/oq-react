const styles = {
  mainCard: {
    borderRadius: 2,
    padding: 2,
    alignContent: 'flex-start',
    display: 'flex',
    flexDirection: 'column',
    marginBottom: 3,
  },
  welcomeTitle: {
    color: 'text.primary',
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'left',
  },
  infoCard: {
    bgcolor: 'background.paper',
    border: 0,
    borderRadius: 1,
    marginTop: 2,
    paddingTop: 0.1,
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'row',
  },
  name: {
    color: 'text.primary',
    fontSize: 13,
    fontWeight: 'bold',
    textAlign: 'left',
    marginBottom: 1,
  },
  description: {
    color: 'text.primary',
    fontSize: 12,
    fontWeight: 'normal',
    textAlign: 'left',
    marginRight: 2,
  },
  helloIcon: {
    marginLeft: 1,
  },
  rate: {
    marginLeft: 2,
    marginRight: 2,
  },
} as const;

export default styles;
