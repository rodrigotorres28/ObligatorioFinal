import { NativeStackScreenProps } from "@react-navigation/native-stack";
import * as React from "react";
import { Text, View, StyleSheet, TouchableOpacity, Modal } from "react-native";
import { StackParamList } from "../types/MainStackTypes";
import ScoreTable from "../components/ScoreTable";
import MatchCard from "../components/MatchCard";
import MatchPrediction from "../components/MatchPrediction";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../state/store";
import { updateMatch } from "../state/GroupsSlice";
import { useState } from "react";
import { Match } from "../types/Match";
import LargeHorizontalButton from "../components/LargeHorizontalButton";
import { SafeAreaView } from "react-native-safe-area-context";

type GroupPageProps = NativeStackScreenProps<StackParamList, "GroupPage">;

const GroupPage = ({ navigation, route }: GroupPageProps) => {
  const dispatch = useDispatch();
  const { groupName } = route.params;
  const group = useSelector((state: RootState) => state.groups[groupName]);
  const teams = useSelector((state: RootState) => state.teams);

  const standingsArray = Object.values(group.stats);
  const matchesArray = Object.values(group.matches);

  const [modalVisible, setModalVisible] = useState(false);
  const [selectedMatch, setSelectedMatchName] = useState<Match | null>(null);

  const handleUpdateMatch = (
    matchName: string,
    team1Goals: number,
    team2Goals: number
  ) => {
    dispatch(updateMatch({ groupName, matchName, team1Goals, team2Goals }));
  };

  const handleMatchPress = (match: Match) => {
    setSelectedMatchName(match);
    setModalVisible(true);
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScoreTable standings={standingsArray} />
      <View style={styles.matches}>
        <Text style={styles.title}>MATCHES</Text>
        {matchesArray.map((match, index) => (
          <TouchableOpacity key={index} onPress={() => handleMatchPress(match)}>
            <MatchCard key={index} match={match} />
          </TouchableOpacity>
        ))}
      </View>
      <View style={styles.goBackButton}>
        <LargeHorizontalButton
          buttonColor="#13c2cf"
          text="Go Back"
          textColor="white"
          onPress={navigation.goBack}
        />
      </View>
      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalView}>
          {selectedMatch && (
            <MatchPrediction
              team1Flag={teams[selectedMatch.team1Id].flag}
              team2Flag={teams[selectedMatch.team2Id].flag}
              team1goals={selectedMatch.team1Goals}
              team2goals={selectedMatch.team2Goals}
              onSubmit={(team1Goals, team2Goals) => {
                handleUpdateMatch(
                  selectedMatch.matchName,
                  team1Goals,
                  team2Goals
                );
                setModalVisible(false);
              }}
            />
          )}
        </View>
      </Modal>
    </SafeAreaView>
  );
};

export default GroupPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 36,
    fontWeight: "600",
    marginBottom: 10,
  },
  matches: {
    flex: 1,
    alignItems: "center",
  },
  modalView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  goBackButton: {
    width: 200,
    alignSelf: "center",
    marginBottom: 35,
  },
});
