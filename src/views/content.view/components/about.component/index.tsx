/* eslint-disable react/no-children-prop */
import {
  Avatar, Box, Grid, Typography,
} from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import ReactMarkdown from 'react-markdown';
import ActionButton from '../../../../components/buttons.component/actionButton.button';
import README from '../../../../locales/fr/oavel.md';
import { colors } from '../../../../styles/theme';

const About = () => {
  const [content, setContent] = useState('');
  const { t } = useTranslation();
  useEffect(() => {
    fetch(README)
      .then((res) => res.text())
      .then((text) => setContent(text));
  }, []);

  const links = {
    avatar: 'https://avatars.githubusercontent.com/u/34914748?v=4',
    href: 'https://www.linkedin.com/in/corentin-ach-0948b71b1/?locale=en_US',
  };

  return (
    <Grid container>
      <Typography variant="h6">Auteur</Typography>
      <Grid
        container
        sx={{
          bgcolor: 'background.paper', borderRadius: 2, p: 2, display: 'flex', alignItems: 'center', marginBottom: 1,
        }}
      >
        <Grid item sm={3} sx={{ display: 'flex', justifyContent: 'center' }}>
          <Avatar
            src={links.avatar}
            sx={{ width: 60, height: 60 }}
          />
        </Grid>
        <Grid item sm={9} sx={{ display: 'flex', justifyContent: 'center' }}>
          <Typography variant="body2">{t('translation:contentView.about.me')}</Typography>
        </Grid>
      </Grid>
      <ActionButton
        sx={{ bgcolor: colors.primary, color: 'white' }}
        href={links.href}
        fullWidth
        title="Linkedin"
        isDisabled={false}
      />
      <Typography variant="h6">Oavel</Typography>
      <Box sx={{ bgcolor: 'background.paper', borderRadius: 2, p: 2 }}>
        <ReactMarkdown children={content} />
      </Box>
    </Grid>
  );
};

export default About;
