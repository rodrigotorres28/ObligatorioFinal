import { NativeStackScreenProps } from "@react-navigation/native-stack";
import * as React from "react";
import { Text, View, StyleSheet, Button, TouchableOpacity, Modal } from "react-native";
import { StackParamList } from "../types/MainStackTypes";
import ScoreTable from "../components/ScoreTable";
import MatchCard from "../components/MatchCard";
import MatchPrediction from "../components/MatchPrediction";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../state/store";
import { updateMatch } from "../state/GroupsSlice";
import { useState } from "react";

type GroupPageProps = NativeStackScreenProps<StackParamList, "GroupPage">;

const GroupPage = ({ navigation, route }: GroupPageProps) => {
  const dispatch = useDispatch();
  const { groupName } = route.params;
  const group = useSelector((state: RootState) => state.groups[groupName]);

  const standingsArray = Object.values(group.stats);
  const matchesArray = Object.values(group.matches);

  const [modalVisible, setModalVisible] = useState(false);

  const handleUpdateMatch = (matchName: string, team1Goals: number, team2Goals: number) => {
    dispatch(updateMatch({ groupName, matchName, team1Goals, team2Goals }));
  };

  const handleMatchPress = () => {
    setModalVisible(true);
  };

  return (
    <View style={styles.container}>
      <ScoreTable standings={standingsArray} />
      <View style={styles.matches}>
        <Text style={styles.title}>MATCHES</Text>
        {matchesArray.map((match, index) => (
          <TouchableOpacity key={index} onPress={() => handleUpdateMatch(match.matchName, 3, 1)}>
            <MatchCard key={index} match={match} />
          </TouchableOpacity>
        ))}
        <Button title="TEST" onPress={() => handleUpdateMatch("matchA", 3, 1)} />
      </View>
      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalView}>
          <MatchPrediction />
        </View>
      </Modal>
    </View>
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
});
