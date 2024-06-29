import * as React from "react";
import { View, Text, Image, StyleSheet, FlatList } from "react-native";
import { useSelector } from "react-redux";
import { RootState } from "../state/store";
import { Standings } from "../types/Standings";

interface ScoreTableProps {
  standings: Standings[];
}

const ScoreTable: React.FC<ScoreTableProps> = ({ standings }) => {
  const teams = useSelector((state: RootState) => state.teams);

  const renderItem = ({ item }: { item: Standings }) => {
    const team = teams[item.teamId];

    if (!team) {
      return null;
    }

    return (
      <View style={styles.row}>
        <Image source={team.flag} style={styles.flag} resizeMode="contain" />
        <Text style={styles.cellName}>{team.name}</Text>
        <Text style={styles.cell}>{item.wins}</Text>
        <Text style={styles.cell}>{item.ties}</Text>
        <Text style={styles.cell}>{item.goalsFor}</Text>
        <Text style={styles.cell}>{item.goalsAgainst}</Text>
        <Text style={styles.cell}>{item.goalDifference}</Text>
        <Text style={styles.cell}>{item.points}</Text>
      </View>
    );
  };

  const sortedStandings = standings.sort((a, b) => {
    if (b.points !== a.points) {
      return b.points - a.points;
    } else if (b.goalDifference !== a.goalDifference) {
      return b.goalDifference - a.goalDifference;
    } else {
      return b.goalsFor - a.goalsFor;
    }
  });

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerCell}>FLAG</Text>
        <Text style={styles.headerCellName}>NAME</Text>
        <Text style={styles.headerCell}>W</Text>
        <Text style={styles.headerCell}>T</Text>
        <Text style={styles.headerCell}>GF</Text>
        <Text style={styles.headerCell}>GA</Text>
        <Text style={styles.headerCell}>GD</Text>
        <Text style={styles.headerCell}>PTS</Text>
      </View>
      <FlatList
        data={sortedStandings}
        renderItem={renderItem}
        keyExtractor={(item) => item.teamId.toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 10,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    paddingHorizontal: 5,
  },
  header: {
    flexDirection: "row",
    paddingVertical: 10,
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
  },
  row: {
    flexDirection: "row",
    borderTopWidth: 1,
    borderTopColor: "#ccc",
    paddingVertical: 10,
  },
  headerCell: {
    flex: 1,
    fontWeight: "bold",
    textAlign: "center",
  },
  cell: {
    flex: 1,
    textAlign: "center",
  },
  headerCellName: {
    flex: 2.8,
    fontWeight: "bold",
    textAlign: "center",
  },
  cellName: {
    flex: 2.8,
    textAlign: "center",
  },
  flag: {
    width: 32,
    height: 24,
  },
});

export default ScoreTable;
