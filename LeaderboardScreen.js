import React from 'react';
import {StyleSheet, View, Text} from 'react-native';

const LeaderboardScreen = () => {
    return (
        <View style={styles.container}>
            <Text>This is the Leaderboard Screen </Text>
            <Text>The Table Goes Here</Text>
        </View>
    );
};

export default LeaderboardScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#EEEEEE',
        alignItems: 'center',
        justifyContent: 'center',
      },
})