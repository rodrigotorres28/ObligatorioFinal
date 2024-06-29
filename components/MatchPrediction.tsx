import * as React from 'react';
import { Text, View, StyleSheet, Image, ImageSourcePropType } from 'react-native';
import AddMultipleButton from './AddMultipleButton';
import { useState } from 'react';
import LargeHorizontalButton from './LargeHorizontalButton';

interface MatchPredictionProps {
    onSubmit: (team1Goals: number, team2Goals: number) => void;
    team1Flag: ImageSourcePropType;
    team2Flag: ImageSourcePropType;
    team1goals: number;
    team2goals: number;
}

const MatchPrediction = ({ onSubmit, team1Flag, team2Flag, team1goals, team2goals }: MatchPredictionProps) => {
    const [goalsTeam1, setgoalsTeam1] = useState(team1goals !== -1 ? team1goals : 0)
    const [goalsTeam2, setgoalsTeam2] = useState(team2goals !== -1 ? team2goals : 0)

    const handleAddGoal1 = () => {
        if (goalsTeam1 < 99) {
            setgoalsTeam1(goalsTeam1 + 1);
        }
    };
    const handleRemoveGoal1 = () => {
        if (goalsTeam1 > 0){
            setgoalsTeam1(goalsTeam1 - 1);
        }
    };

    const handleAddGoal2 = () => {
        if (goalsTeam2 < 99){
            setgoalsTeam2(goalsTeam2 + 1);
        }
    };
    const handleRemoveGoal2 = () => {
        if (goalsTeam2 > 0){
            setgoalsTeam2(goalsTeam2 - 1);
        }
    };

  return (
    <View style={styles.container}>
        <Text style={styles.title}>MATCH SCORE</Text>
      <View style={styles.teamContainer}>
        <Image style={styles.flagImage} source={team1Flag} resizeMode='contain'/>
        <AddMultipleButton
          onAdd={handleAddGoal1}
          onRemove={handleRemoveGoal1}
          displayedAmount={goalsTeam1}
        />
      </View>
      <View style={styles.teamContainer}>
      <Image style={styles.flagImage} source={team2Flag} resizeMode='contain' />
        <AddMultipleButton
          onAdd={handleAddGoal2}
          onRemove={handleRemoveGoal2}
          displayedAmount={goalsTeam2}
        />
      </View>
      <View style={styles.buttonContainer}>
        <LargeHorizontalButton
          buttonColor="#044fc7"
          text="PREDICT"
          textColor={"white"}
          onPress={() => onSubmit(goalsTeam1, goalsTeam2)}
        />
      </View>
    </View>
  );
};

export default MatchPrediction;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    padding: 20,
    borderRadius: 10,
    alignItems: "center"
  },
  teamContainer: {
    marginBottom: 20,
    alignItems: "center",
    flexDirection: "row",
  },
  buttonContainer: {
    width: 200,
  },
  title: {
    fontSize: 22,
    marginBottom: 20,
  },
  flagImage: {
    height: 25,
    width: 30,
    marginHorizontal: 10,
  },
});
