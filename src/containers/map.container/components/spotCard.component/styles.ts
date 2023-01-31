import { colors } from '../../../../styles/theme';

const styles = {
  mainCard: {
    border: 0,
    borderRadius: 2,
    alignContent: 'flex-start',
    display: 'flex',
    flexDirection: 'column',
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
  timeText: {
    color: 'text.primary',
    fontSize: 12,
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
    alignItems: 'center',
  },
  cleanTitle: {
    fontSize: 15,
    color: colors.goodQuality,
  },
  cleanButton: {
    bgcolor: 'rgba(0,0,0,0)',
    textTransform: 'none',
    height: '50px',
    borderRadius: 2,
    marginTop: 2,
  },
  afterCleanTitle: {
    fontSize: 15,
    color: 'text.primary',
  },
} as const;

export default styles;
