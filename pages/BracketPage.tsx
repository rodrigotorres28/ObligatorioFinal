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

const BracketPage = ({ navigation }: BracketPageProps) => {
  const [centers, setCenters] = useState<{ [key: string]: { x: number, y: number } }>({});
  const matchRefs = useRef<{ [key: string]: View | null }>({});
  const insets = useSafeAreaInsets();

  const horizontalLineWidth = 245;
  const verticalLineHeightSemifinals = 132;
  const verticalLineHeightFinal = 263.75;
  const lineThickness = 2

  const handleLayout = (key: string) => {
    const matchRef = matchRefs.current[key];
    if (matchRef) {
      matchRef.measure((x, y, width, height, pageX, pageY) => {
        const center = { x: pageX + (width / 2) - lineThickness, y: pageY + (height / 2) - insets.top - lineThickness};
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
  
  const testTeam1 : TeamInBracket = {flag: require("../assets/flags/uy.png"), name: "Uruguay", goals: 5, toBeDecidedText: "Group A 1st"}
  const testTeam2 : TeamInBracket = {toBeDecidedText: "Group B 2nd"}

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.bracket}>
          <View>
            <View ref={ref => matchRefs.current["match1"] = ref} onLayout={() => handleLayout("match1")}>
              <BracketMatch bracketTeam1={testTeam1} bracketTeam2={testTeam2}/>
            </View>
            <View ref={ref => matchRefs.current["match2"] = ref} onLayout={() => handleLayout("match2")}>
              <BracketMatch bracketTeam1={testTeam1} bracketTeam2={testTeam2}/>
            </View>
            <View ref={ref => matchRefs.current["match3"] = ref} onLayout={() => handleLayout("match3")}>
              <BracketMatch bracketTeam1={testTeam1} bracketTeam2={testTeam2}/>
            </View>
            <View ref={ref => matchRefs.current["match4"] = ref} onLayout={() => handleLayout("match4")}>
              <BracketMatch bracketTeam1={testTeam1} bracketTeam2={testTeam2}/>
            </View>
          </View>
          <View style={styles.semiFinal}>
            <View ref={ref => matchRefs.current["semifinal1"] = ref} onLayout={() => handleLayout("semifinal1")}>
              <BracketMatch bracketTeam1={testTeam1} bracketTeam2={testTeam2}/>
            </View>
            <View ref={ref => matchRefs.current["semifinal2"] = ref} onLayout={() => handleLayout("semifinal2")}>
              <BracketMatch bracketTeam1={testTeam1} bracketTeam2={testTeam2}/>
            </View>
          </View>
          <View style={styles.final}>
            <View ref={ref => matchRefs.current["final"] = ref} onLayout={() => handleLayout("final")}>
              <BracketMatch bracketTeam1={testTeam1} bracketTeam2={testTeam2}/>
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