const styles = {
  mainCard: {
    bgcolor: 'background.default',
    border: 0,
    borderRadius: 5,
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
    bgcolor: '#F4F4F4',
    border: 0,
    borderRadius: 3,
    marginTop: 2,
  },
  name: {
    color: 'text.primary',
    fontSize: 15,
    fontWeight: 'bold',
    textAlign: 'left',
    marginTop: 2,
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

} as const;

export default styles;
