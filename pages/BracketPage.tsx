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

  //console.log(centers);

  const renderLines = () => {
    return Object.entries(centers).map(([key, center]) => {
      if (key.includes("match")) {
        return (
          <View
            key={`horizontalLine-${key}`} // Unique key for horizontal lines
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
              <BracketMatch />
            </View>
            <View ref={ref => matchRefs.current["match2"] = ref} onLayout={() => handleLayout("match2")}>
              <BracketMatch />
            </View>
            <View ref={ref => matchRefs.current["match3"] = ref} onLayout={() => handleLayout("match3")}>
              <BracketMatch />
            </View>
            <View ref={ref => matchRefs.current["match4"] = ref} onLayout={() => handleLayout("match4")}>
              <BracketMatch />
            </View>
          </View>
          <View style={styles.semiFinal}>
            <View ref={ref => matchRefs.current["semifinal1"] = ref} onLayout={() => handleLayout("semifinal1")}>
              <BracketMatch />
            </View>
            <View ref={ref => matchRefs.current["semifinal2"] = ref} onLayout={() => handleLayout("semifinal2")}>
              <BracketMatch />
            </View>
          </View>
          <View style={styles.final}>
            <View ref={ref => matchRefs.current["final"] = ref} onLayout={() => handleLayout("final")}>
              <BracketMatch />
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
  },
  bracket: {
    flexDirection: "row",
  },
  bestOf8: {},
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
