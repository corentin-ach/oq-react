import {
  Box, Typography, Grid,
} from '@mui/material';
import React from 'react';
import dayjs from 'dayjs';
import { useTranslation } from 'react-i18next';
import AlertIcon from '../../../../assets/alert';
import RainDropIcon from '../../../../assets/raindrop';
import styles from '../styles';
import { Spot } from '../../../../features/getSpotsSlice';
import computeStats from '../../../../functions/stats';
import BorderLinearProgress from '../../../../components/linearProgress.component';

interface Props {
  spots: Array<Spot>;
}

const Stats = (props: Props) => {
  const { t } = useTranslation(['translation']);
  const { spots } = props;
  const statData: any = [
    {
      id: 1,
      subtitle: t('translation:contentView.stats.spots'),
      data: computeStats(spots).numberSpot,
      size: 6,
      icon: <RainDropIcon size={50} />,
      margin: 2,
    },
    {
      id: 2,
      subtitle: t('translation:contentView.stats.reports'),
      data: computeStats(spots).numberWarningStatus,
      size: 6,
      icon: <AlertIcon size={50} />,
      margin: 2,
    },
    {
      id: 3,
      subtitle: t('translation:contentView.stats.ratio'),
      data: `${computeStats(spots).warningRate}%`,
      size: 12,
      icon: <BorderLinearProgress height={15} variant="determinate" value={100 - computeStats(spots).warningRate} />,
      margin: 5,
    },
  ];

  return (
    <Box>
      <Typography variant="h6">
        {t('translation:contentView.tab.stats')}
      </Typography>
      <Typography sx={styles.time}>
        {t('translation:contentView.stats.time', { day: dayjs().locale('fr').format('D MMMM YYYY') })}
      </Typography>
      <Grid container spacing={3}>
        {statData.map((stat: any) => (
          <Grid item sm={stat.size} key={stat.id}>
            <Box
              sx={{
                bgcolor: 'background.paper', borderRadius: 2, height: 150, paddingTop: 1.5,
              }}
            >
              <Box sx={{
                display: 'flex', justifyContent: 'center', marginTop: stat.margin,
              }}
              >
                {stat.icon}
              </Box>
              <Box sx={{
                display: 'flex', flexDirection: 'row', alignItems: 'end', justifyContent: 'center',
              }}
              >
                <Typography sx={styles.data}>
                  {stat.data}
                </Typography>
              </Box>
              <Typography sx={styles.subtitle}>
                {stat.subtitle}
              </Typography>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Stats;
