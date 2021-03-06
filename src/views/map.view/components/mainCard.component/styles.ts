const styles = {
  mainCard: {
    bgcolor: 'background.default',
    borderRadius: 2,
    padding: 2,
    alignContent: 'flex-start',
    display: 'flex',
    flexDirection: 'column',
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
    fontSize: 15,
    fontWeight: 'bold',
    textAlign: 'left',
    marginLeft: 2,
    marginRight: 2,
  },
  description: {
    color: 'text.primary',
    fontSize: 12,
    fontWeight: 'normal',
    textAlign: 'left',
    marginLeft: 2,
    marginRight: 2,
  },
  helloIcon: {
    marginLeft: 2,
  },

} as const;

export default styles;
