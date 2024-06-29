import { NativeStackScreenProps } from "@react-navigation/native-stack";
import * as React from "react";
import {
  Text,
  View,
  StyleSheet,
  Button,
  TouchableOpacity,
  Modal,
} from "react-native";
import { StackParamList } from "../types/MainStackTypes";
import ScoreTable from "../components/ScoreTable";
import MatchCard from "../components/MatchCard";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../state/store";
import { updateMatch } from "../state/GroupsSlice";
import { useState } from "react";
import MatchPrediction from "../components/MatchPrediction";

type GroupPageProps = NativeStackScreenProps<StackParamList, "GroupPage">;

const GroupPage = ({ navigation, route }: GroupPageProps) => {
  const dispatch = useDispatch();
  const { groupName } = route.params;
  const group = useSelector((state: RootState) => state.groups[groupName]);

  const teamsArray = Object.values(group.teams);
  const matchesArray = Object.values(group.matches);

  const [modalVisible, setModalVisible] = useState(false);

  const handleTest = () => {
    dispatch(
      updateMatch({
        groupName: groupName,
        matchName: "matchA",
        team1Goals: 3,
        team2Goals: 1,
      })
    );
  };

  const handleMatchPress = () => {
    setModalVisible(true);
  };

  return (
    <View style={styles.container}>
      <ScoreTable teams={teamsArray} />
      <View style={styles.matches}>
        <Text style={styles.title}>MATCHES</Text>
        {matchesArray.map((match, index) => (
          <TouchableOpacity key={index} onPress={handleMatchPress}>
            <MatchCard key={index} groupTeams={teamsArray} match={match} />
          </TouchableOpacity>
        ))}
        <Button title="TEST" onPress={handleTest} />
      </View>
      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}>
        <View style={styles.modalView}>
          <MatchPrediction />
        </View>
      </Modal>
    </View>
  );
};

export default GroupPage;

const styles = StyleSheet.create({
  container: {},
  title: {
    fontSize: 36,
    fontWeight: "600",
  },
  matches: {
    alignItems: "center",
  },
  modalView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalText: {
    fontSize: 24,
    backgroundColor: "white",
    padding: 20,
    borderRadius: 10,
  },
});
