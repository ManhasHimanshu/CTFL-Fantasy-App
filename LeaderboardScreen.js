import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import { Col, Row, Grid } from 'react-native-easy-grid';

const LeaderboardScreen = () => {
    return (
        <View style={styles.container}>
            <Text>This is the Leaderboard Screen </Text>
            <Text>The Table Goes Here</Text>
            
        </View>
    );
};

export default function LeaderboardScreen() {
    return (
        <View style={styles.container}>
        <Grid>
            <Col size={50}>
            <Row style={styles.cell}>
                <Text>A</Text>
            </Row>
            <Row style={styles.cell}>
                <Text>B</Text>
            </Row>
            <Row style={styles.cell}>
                <Text>C</Text>
            </Row>
            <Row style={styles.cell}>
                <Text>D</Text>
            </Row>
            </Col>
            <Col size={25}>
            <Row style={styles.cell}>
                <Text>E</Text>
            </Row>
            <Row style={styles.cell}>
                <Text>F</Text>
            </Row>
            <Row style={styles.cell}>
                <Text>G</Text>
            </Row>
            <Row style={styles.cell}>
                <Text>H</Text>
            </Row>
            </Col>
            <Col size={25}>
            <Row style={styles.cell}>
                <Text>1</Text>
            </Row>
            <Row style={styles.cell}>
                <Text>2</Text>
            </Row>
            <Row style={styles.cell}>
                <Text>3</Text>
            </Row>
            <Row style={styles.cell}>
                <Text>4</Text>
            </Row>
            </Col>
        </Grid>
        </View>
    );
    }
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#EEEEEE',
        alignItems: 'center',
        justifyContent: 'center',
      },
})