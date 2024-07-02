import * as React from "react";
import { useState, useEffect, useRef } from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import * as ScreenOrientation from "expo-screen-orientation";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { StackParamList } from "../types/MainStackTypes";
import { SafeAreaView } from "react-native-safe-area-context";
import LargeHorizontalButton from "../components/LargeHorizontalButton";
import BracketMatch from "../components/BracketMatch";
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from "../state/store";
import { Group } from '../types/Group';
import { Standings } from "../types/Standings";
import { updateBracket } from "../state/BracketSlice";
import { TeamInBracket } from "../types/TeamInBracket";

type BracketPageProps = NativeStackScreenProps<StackParamList, "BracketPage">;

async function screenOrientationLandscape() {
  await ScreenOrientation.lockAsync(
    ScreenOrientation.OrientationLock.LANDSCAPE_RIGHT
  );
}
async function screenOrientationPortrait() {
  await ScreenOrientation.lockAsync(
    ScreenOrientation.OrientationLock.PORTRAIT_UP
  );
}

const calculateGroupStandings = (group: Group) => {
  const teamsStats = Object.values(group.stats);

  teamsStats.sort((a: Standings, b: Standings) => {
    if (a.points !== b.points) return b.points - a.points;
    if (a.goalDifference !== b.goalDifference) return b.goalDifference - a.goalDifference;
    return b.goalsFor - a.goalsFor;
  });

  return teamsStats;
};

const BracketPage = ({ navigation }: BracketPageProps) => {
  const [centers, setCenters] = useState<{ [key: string]: { x: number, y: number } }>({});
  const matchRefs = useRef<{ [key: string]: View | null }>({});
  const insets = useSafeAreaInsets();
  const bracketState = useSelector((state: RootState) => state.bracket);
  const groups = useSelector((state: RootState) => state.groups);
  const teams = useSelector((state: RootState) => state.teams)
  const dispatch = useDispatch();

  const horizontalLineWidth = 245;
  const verticalLineHeightSemifinals = 132;
  const verticalLineHeightFinal = 263.75;
  const lineThickness = 2;

  const handleLayout = (key: string) => {
    const matchRef = matchRefs.current[key];
    if (matchRef) {
      matchRef.measure((x, y, width, height, pageX, pageY) => {
        const center = { x: pageX + (width / 2) - lineThickness, y: pageY + (height / 2) - insets.top - lineThickness };
        setCenters(prevCenters => ({ ...prevCenters, [key]: center }));
      });
    }
  };

  useEffect(() => {
    screenOrientationLandscape();
    return () => {
      screenOrientationPortrait();
    };
  }, []);

  useEffect(() => {
    const updateBracketData = () => {

      const A1stId: number = calculateGroupStandings(groups.groupA)[0].teamId
      const A2ndId: number = calculateGroupStandings(groups.groupA)[1].teamId
      const B1stId: number = calculateGroupStandings(groups.groupB)[0].teamId
      const B2ndId: number = calculateGroupStandings(groups.groupB)[1].teamId
      const C1stId: number = calculateGroupStandings(groups.groupC)[0].teamId
      const C2ndId: number = calculateGroupStandings(groups.groupC)[1].teamId
      const D1stId: number = calculateGroupStandings(groups.groupD)[0].teamId
      const D2ndId: number = calculateGroupStandings(groups.groupD)[1].teamId

      const A1st: TeamInBracket = {name: teams[A1stId].name, goals: -1, flag: teams[A1stId].flag, toBeDecidedText: "Group A 1st (TBD)"}
      const A2nd: TeamInBracket = {name: teams[A2ndId].name, goals: -1, flag: teams[A2ndId].flag, toBeDecidedText: "Group A 2nd (TBD)"}
      const B1st: TeamInBracket = {name: teams[B1stId].name, goals: -1, flag: teams[B1stId].flag, toBeDecidedText: "Group B 1st (TBD)"}
      const B2nd: TeamInBracket = {name: teams[B2ndId].name, goals: -1, flag: teams[B2ndId].flag, toBeDecidedText: "Group B 2nd (TBD)"}
      const C1st: TeamInBracket = {name: teams[C1stId].name, goals: -1, flag: teams[C1stId].flag, toBeDecidedText: "Group C 1st (TBD)"}
      const C2nd: TeamInBracket = {name: teams[C2ndId].name, goals: -1, flag: teams[C2ndId].flag, toBeDecidedText: "Group C 2nd (TBD)"}
      const D1st: TeamInBracket = {name: teams[D1stId].name, goals: -1, flag: teams[D1stId].flag, toBeDecidedText: "Group D 1st (TBD)"}
      const D2nd: TeamInBracket = {name: teams[D2ndId].name, goals: -1, flag: teams[D2ndId].flag, toBeDecidedText: "Group D 2nd (TBD)"}

      const newBracketState = {
        quarterFinals: {
          match1: {
            matchName: 'match1',
            team1: A1st,
            team2: B2nd,
          },
          match2: {
            matchName: 'match2',
            team1: B1st,
            team2: A2nd,
          },
          match3: {
            matchName: 'match3',
            team1: C1st,
            team2: D2nd,
          },
          match4: {
            matchName: 'match4',
            team1: D1st,
            team2: C2nd,
          },
        },
        semiFinals: bracketState.semiFinals,
        final: bracketState.final
      };

      dispatch(updateBracket(newBracketState));
    };

    updateBracketData();
  }, [bracketState.final, bracketState.semiFinals, dispatch, groups, teams]);

  const renderLines = () => {
    return Object.entries(centers).map(([key, center]) => {
      if (key.includes("match")) {
        return (
          <View
            key={`horizontalLine-${key}`}
            style={[
              styles.line,
              {
                borderWidth: lineThickness,
                width: horizontalLineWidth + 2 * lineThickness,
                top: center.y,
                left: center.x,
              },
            ]}
          />
        );
      }
      if (key.includes("semifinal")) {
        return (
          <React.Fragment key={`lines-${key}`}>
            <View
              key={`horizontalLine-${key}`}
              style={[
                styles.line,
                {
                  borderWidth: lineThickness,
                  width: horizontalLineWidth,
                  top: center.y,
                  left: center.x,
                },
              ]}
            />
            <View
              key={`verticalLine-${key}`}
              style={[
                styles.line,
                {
                  borderWidth: lineThickness,
                  height: verticalLineHeightSemifinals + (2 * lineThickness),
                  top: center.y - verticalLineHeightSemifinals / 2,
                  left: center.x,
                },
              ]}
            />
          </React.Fragment>
        );
      }
      if (key === "final") {
        return (
          <View
            key={`verticalLine-${key}`}
            style={[
              styles.line,
              {
                borderWidth: lineThickness,
                height: verticalLineHeightFinal + (2 * lineThickness),
                top: center.y - verticalLineHeightFinal / 2,
                left: center.x,
              },
            ]}
          />
        );
      }
      return null;
    });
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.bracket}>
          <View>
            <View ref={ref => matchRefs.current["match1"] = ref} onLayout={() => handleLayout("match1")}>
              <BracketMatch bracketTeam1={bracketState.quarterFinals.match1.team1} bracketTeam2={bracketState.quarterFinals.match1.team2}/>
            </View>
            <View ref={ref => matchRefs.current["match2"] = ref} onLayout={() => handleLayout("match2")}>
              <BracketMatch bracketTeam1={bracketState.quarterFinals.match2.team1} bracketTeam2={bracketState.quarterFinals.match2.team2}/>
            </View>
            <View ref={ref => matchRefs.current["match3"] = ref} onLayout={() => handleLayout("match3")}>
              <BracketMatch bracketTeam1={bracketState.quarterFinals.match3.team1} bracketTeam2={bracketState.quarterFinals.match3.team2}/>
            </View>
            <View ref={ref => matchRefs.current["match4"] = ref} onLayout={() => handleLayout("match4")}>
              <BracketMatch bracketTeam1={bracketState.quarterFinals.match4.team1} bracketTeam2={bracketState.quarterFinals.match4.team2}/>
            </View>
          </View>
          <View style={styles.semiFinal}>
            <View ref={ref => matchRefs.current["semifinal1"] = ref} onLayout={() => handleLayout("semifinal1")}>
              <BracketMatch bracketTeam1={bracketState.semiFinals.semifinal1.team1} bracketTeam2={bracketState.semiFinals.semifinal1.team2}/>
            </View>
            <View ref={ref => matchRefs.current["semifinal2"] = ref} onLayout={() => handleLayout("semifinal2")}>
              <BracketMatch bracketTeam1={bracketState.semiFinals.semifinal2.team1} bracketTeam2={bracketState.semiFinals.semifinal2.team2}/>
            </View>
          </View>
          <View style={styles.final}>
            <View ref={ref => matchRefs.current["final"] = ref} onLayout={() => handleLayout("final")}>
              <BracketMatch bracketTeam1={bracketState.final.team1} bracketTeam2={bracketState.final.team2}/>
            </View>
          </View>
        </View>
        {renderLines()}
        <View style={styles.goBackButton}>
          <LargeHorizontalButton
            buttonColor="#13c2cf"
            text="Go Back"
            textColor="white"
            onPress={navigation.goBack}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default BracketPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  goBackButton: {
    width: 200,
    alignSelf: "center",
    marginBottom: 18,
  },
  bracket: {
    flexDirection: "row",
  },
  semiFinal: {
    justifyContent: "space-around",
  },
  final: {
    justifyContent: "center",
  },
  line: {
    backgroundColor: "black",
    borderColor: "black",
    position: "absolute",
    zIndex: -1,
  },
});
