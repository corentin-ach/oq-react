import { Box, Typography } from '@mui/material';
import dayjs from 'dayjs';
import React from 'react';
import { useTranslation } from 'react-i18next';
import HelloIcon from '../../assets/hello';
import computeStats from '../../functions/stats';
import { Spot } from '../../types';
import BorderLinearProgress from '../linearProgress.component';

interface Props {
    spots: Array<Spot>,
    style?: any
}

export default function RateCard(props: Props) {
  const { spots, style } = props;
  const { t } = useTranslation();
  const currentDate = new Date();
  return (
    <Box
      width="100%"
      sx={{
        ...style,
        bgcolor: 'background.paper',
        border: 0,
        borderRadius: 1,
        marginTop: 2,
        paddingTop: 0.1,
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'row',
      }}
    >
      <Box sx={{
        marginLeft: 1,
      }}
      >
        <HelloIcon size={40} month={dayjs(currentDate).format('MMM')} day={dayjs(currentDate).format('DD')} />
      </Box>
      <Box sx={{
        marginLeft: 2,
        marginRight: 2,
      }}
      >
        <Typography sx={{
          color: 'text.primary',
          fontSize: 13,
          fontWeight: 'bold',
          textAlign: 'left',
          marginBottom: 1,
        }}
        >
          {computeStats(spots).warningRate}
          %
          {t('translation:mapView.welcomeCard.rate')}
          {dayjs(currentDate).format('HH:mm')}
        </Typography>
        <BorderLinearProgress height={6} variant="determinate" value={100 - computeStats(spots).warningRate} />
      </Box>
    </Box>
  );
}
