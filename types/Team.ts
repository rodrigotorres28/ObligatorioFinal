import { ImageSourcePropType } from 'react-native';

export interface Team {
  teamId: number;
  name: string;
  flag: ImageSourcePropType;
  goalsFor: number;
  goalsAgainst: number;
  goalDifference: number;
  wins: number;
  ties: number;
  points: number;
}
