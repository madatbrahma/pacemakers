import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import EachDayWorkoutSummary from '../component/EachDayWorkoutSummary';
import moment from "moment";

class UserHomePageScreen extends Component {

    loadDetails() {
      
        var startOfWeek = moment().startOf('week').toDate();
        var endOfWeek   = moment().endOf('week').toDate();
        console.log(startOfWeek);

        this.props.navigation.navigate(
            'RunnerDailyActivityDetailsScreen', {
            runnerData: {
                'Name': 'Tilak',
                'desc': '8000 m'
            }
        }
        )
    }
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.userSummary}>
                    <Text>User Summary</Text>
                </View>
                <View style={styles.weeklySection}>

                    <View style={styles.eachDay}>
                        <EachDayWorkoutSummary day='Tuesday'
                            date='04 Feb 2020'
                            woSummary='400 repeats 20 times'
                            loadDetails={() => this.loadDetails()} />
                    </View>


                    <View style={styles.eachDay}>
                        <EachDayWorkoutSummary day='Thursday'
                            date='06 Feb 2020'
                            woSummary='8 Km Tempo' 
                            loadDetails={() => this.loadDetails()} />
                    </View>

                    <View style={styles.eachDay}>
                        <EachDayWorkoutSummary day='Saturday'
                            date='08 Feb 2020'
                            woSummary='25 Km Easy run' 
                            loadDetails={() => this.loadDetails()} />
                    </View>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,

    },
    userSummary: {
        flex: 1,
        backgroundColor: '#1C8BA6',
        marginTop: 20,

    },
    weeklySection: {
        flex: 3,
        backgroundColor: 'white',
        justifyContent: 'space-between'

    },
    eachDay: {
        flex: 1,



    }
});

export default UserHomePageScreen;