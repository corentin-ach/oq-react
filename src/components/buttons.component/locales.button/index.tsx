import React, { ReactElement, useState } from 'react';
import {
  Box, IconButton, Typography,
} from '@mui/material';
import CheckIcon from '@mui/icons-material/Check';
import { MdLanguage } from 'react-icons/md';
import i18next from 'i18next';
import { colors } from '../../../styles/theme';
import styles from '../styles';
import CustomModal from '../../modal.component';
import CustomList from '../../list.component';
import FrenchIcon from '../../../assets/french';
import EnglishIcon from '../../../assets/english';

const LocalesButton = (): ReactElement => {
  const [modal, setModal] = useState(false);
  const [language, setLanguage] = useState({ fr: false, en: true });
  const setLocale = (l: any) => {
    i18next
      .changeLanguage(l);
  };

  const locales = [
    {
      id: 1,
      icon: <EnglishIcon size={24} />,
      name: 'English',
      onClick: () => {
        setLanguage({ fr: false, en: true });
        setLocale('en');
        setModal(false);
      },
      check: language.en ? <CheckIcon sx={{ color: colors.goodQuality }} /> : null,
    },
    {
      id: 2,
      icon: <FrenchIcon size={24} />,
      name: 'Français',
      onClick: () => {
        setLanguage({ fr: true, en: false });
        setLocale('fr');
        setModal(false);
      },
      check: language.fr ? <CheckIcon sx={{ color: colors.goodQuality }} /> : null,
    },
  ];
  return (
    <div>
      <Box sx={{ ...styles.button, marginLeft: 1 }}>
        <IconButton onClick={() => setModal(!modal)} sx={{ bgcolor: 'background.default' }}>
          <MdLanguage size={32} color="text.default" />
        </IconButton>
      </Box>
      <CustomModal
        size="xs"
        showActions="none"
        isOpen={modal}
        header={<Typography variant="h6">Choix de la langue</Typography>}
        onCancelClick={() => setModal(false)}
        content={<CustomList allData={locales} />}
        customActions={null}
      />
    </div>
  );
};

export default LocalesButton;
