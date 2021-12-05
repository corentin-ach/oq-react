import { Box, Typography, Grid } from '@mui/material';
import React from 'react';
import dayjs from 'dayjs';
import { useTranslation } from 'react-i18next';
import AlertIcon from '../../../../assets/alert';
import RainDropIcon from '../../../../assets/raindrop';
import styles from './styles';

const Stats = () => {
  const { t } = useTranslation(['translation']);
  const statData: any = [
    {
      id: 1,
      subtitle: 'référencés',
      data: 45,
      dataSubtitle: 'spots',
      size: 6,
      icon: <RainDropIcon size={50} />,
    },
    {
      id: 2,
      subtitle: 'en cours',
      data: 3,
      dataSubtitle: 'problèmes',
      size: 6,
      icon: <AlertIcon size={50} />,
    },
  ];
  return (
    <Box>
      <Typography sx={styles.statsTitle}>
        Statistiques
      </Typography>
      <Typography sx={styles.time}>
        {t('translation:contentView.stats.time', { day: dayjs().locale('fr').format('D MMMM YYYY') })}
      </Typography>
      <Grid container sx={{ justifyContent: 'space-around' }} spacing={3}>
        {statData.map((stat: any) => (
          <Grid item sm={stat.size} key={stat.id}>
            <Box
              sx={{
                bgcolor: 'background.paper', borderRadius: 2, height: 150, paddingTop: 1.5, justifyContent: 'center',
              }}
            >
              <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: 2 }}>
                {stat.icon}
              </Box>
              <Box sx={{
                display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center',
              }}
              >
                <Typography sx={styles.data}>
                  {stat.data}
                </Typography>
                <Typography sx={styles.dataSubtitle}>
                  {stat.dataSubtitle}
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
