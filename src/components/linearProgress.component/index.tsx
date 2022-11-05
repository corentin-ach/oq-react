import { LinearProgress, linearProgressClasses } from '@mui/material';
import { styled } from '@mui/material/styles';

interface Props {
    height: number;
}

const BorderLinearProgress = styled(LinearProgress)((props: Props) => {
  const { height } = props;
  return ({
    height,
    width: '80%',
    borderRadius: 10,
    [`&.${linearProgressClasses.colorPrimary}`]: {
      backgroundColor: '#F38732',
    },
    [`& .${linearProgressClasses.bar}`]: {
      borderRadius: 5,
      backgroundColor: '#65DEAB',
    },
  });
});

export default BorderLinearProgress;
