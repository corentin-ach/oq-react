const styles = {
  optionTitle: {
    color: 'text.primary',
    fontSize: 14,
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
  centerFlex: {
    display: 'flex', justifyContent: 'center',
  },
} as const;

export default styles;
