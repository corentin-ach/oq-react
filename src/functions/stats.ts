import { Spot } from '../features/getSpotsSlice';

type Stats = {
    numberSpot: number;
    numberWarningStatus: number;
    warningRate: number;
}

export const computeStats = (spots: Array<Spot>) => {
  const warning: Array<Spot> = [];
  spots.map((spot) => {
    if (spot.status) {
      warning.push(spot);
    } return warning;
  });
  const stat: Stats = {
    numberSpot: spots.length,
    numberWarningStatus: warning.length,
    warningRate: Number((warning.length / spots.length).toFixed(2)) * 100,
  };
  return stat;
};

export default computeStats;
