import * as React from "react";
import { Text, View, StyleSheet, Image } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useSelector } from "react-redux";
import { RootState } from "../state/store";
import { Match } from "../types/Match";

interface MatchCardProps {
    match: Match;
}

const MatchCard = ({ match }: MatchCardProps) => {
    const goalsLeft = match.team1Goals;
    const goalsRight = match.team2Goals;

    const teams = useSelector((state: RootState) => state.teams);

    const team1 = teams[match.team1Id];
    const team2 = teams[match.team2Id];

    if (!team1 || !team2) {
        console.error("Team id from a match not found in the Redux state");
        return null;
    }

    const verifyMatch = () => {
        const team1Valid = match.team1Goals >= 0 && match.team1Goals <= 99;
        const team2Valid = match.team2Goals >= 0 && match.team2Goals <= 99;
        return team1Valid && team2Valid;
        // Also -1 is the goals value for an unplayed match
    };

    const isMatchValid = verifyMatch();

    return (
        <View style={styles.container}>
            <View style={styles.teamLeft}>
                <Image style={styles.flags} source={team1.flag} />
                <Text style={styles.names}>{team1.name}</Text>
            </View>
            <View style={styles.middle}>
                <Text style={styles.goals}>{isMatchValid ? goalsLeft : "- "}</Text>
                <MaterialCommunityIcons name="soccer" size={20} color={"white"} />
                <Text style={styles.goals}>{isMatchValid ? goalsRight : " -"}</Text>
            </View>
            <View style={styles.teamRight}>
                <Text style={styles.names}>{team2.name}</Text>
                <Image style={styles.flags} source={team2.flag} />
            </View>
        </View>
    );
};

export default MatchCard;

const styles = StyleSheet.create({
    container: {
        height: 50,
        flexDirection: "row",
        alignItems: "center",
        borderWidth: 2,
        borderRadius: 12,
        borderColor: "black",
        backgroundColor: "#0565e3",
        marginVertical: 5,
    },
    flags: {
        width: 28,
        height: 21,
        marginHorizontal: 8,
    },
    names: {
        fontSize: 18,
        color: "white",
    },
    teamLeft: {
        flexDirection: "row",
        marginRight: 5,
        alignItems: "center",
        width: 135,
    },
    teamRight: {
        flexDirection: "row",
        marginLeft: 5,
        alignItems: "center",
        width: 135,
        justifyContent: "flex-end",
    },
    middle: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        width: 90,
    },
    goals: {
        fontSize: 28,
        lineHeight: 31,
        color: "white",
        marginHorizontal: 5,
    },
});
