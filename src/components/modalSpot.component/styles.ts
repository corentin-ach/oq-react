const styles = {
  title: {
    color: 'text.primary',
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'left',
    marginBottom: 2,
  },
  container: {
    bgcolor: 'background.default',
    padding: 2,
    alignContent: 'flex-start',
    display: 'flex',
    flexDirection: 'column',
  },
  optionCard: {
    bgcolor: 'background.paper',
    display: 'flex',
    flexDirection: 'row',
    borderRadius: 2,
    height: 50,
    alignItems: 'center',
    '&:hover': {
      border: '1px solid #5DADEC',
      backgroundColor: 'rgb(93, 173, 236, 0.3)',
    },
    margin: 0.7,
  },
  cancelButton: {
    fontSize: 15,
    color: 'text.primary',
  },
  sendButton: {
    fontSize: 15,
    color: '#F60C0C',
  },
  buttonsArea: {
    marginTop: 2,
  },
  centerFlex: {
    display: 'flex', justifyContent: 'center',
  },
} as const;

export default styles;
