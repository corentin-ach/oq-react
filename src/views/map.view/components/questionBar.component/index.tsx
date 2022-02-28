import {
  Box,
  Grid, IconButton, Typography,
} from '@mui/material';
import React from 'react';
import { useTranslation } from 'react-i18next';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbDownIcon from '@mui/icons-material/ThumbDown';
import { Spot } from '../../../../features/setSpotSlice';
import styles from './styles';
import { colors } from '../../../../styles/theme';

interface Props {
    isDark: boolean;
    selectedSpot: Spot;
}

const QuestionBar = (props: Props) => {
  const { isDark, selectedSpot } = props;
  const { t } = useTranslation(['translation']);
  return (
    <Box
      sx={{
        bgcolor: !isDark ? 'rgba(255, 255, 255, .70)' : 'rgba(59, 59, 59, .70)', backdropFilter: 'blur(10px)', borderRadius: 2, height: 100, marginTop: 1,
      }}
    >
      <Grid
        container
        sx={{
          display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center',
        }}
      >
        <Grid item md={8} sm={8}>
          <Typography sx={styles.question}>{t('translation:mapView.spotCard.question')}</Typography>
        </Grid>
        <Grid item md={2} sm={2}>
          <IconButton
            color="inherit"
            onClick={() => console.log(selectedSpot)}
          >
            <ThumbUpIcon sx={{ color: colors.badQuality }} />
          </IconButton>
        </Grid>
        <Grid item md={2} sm={2}>
          <IconButton
            color="inherit"
            onClick={() => console.log('test')}
          >
            <ThumbDownIcon sx={{ color: 'text.primary' }} />
          </IconButton>
        </Grid>
      </Grid>
    </Box>
  );
};

export default QuestionBar;
