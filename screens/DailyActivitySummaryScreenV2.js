import React, { Component } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';


import db from '../common/db';
import DailyActivitySummary from '../component/DailyActivitySummary';
import { RunnerActivityDetails } from '../common/RunnerActivityDetails';




class DailyActivitySummaryScreenV2 extends Component {
    /**static navigationOptions = {
        title: 'workout',
      
    };*/

    constructor(props) {
        super(props);
        this.state = {
            dataLoaded: false,
            dailyTrainingLogs: [],
            date: props.navigation.state.params.date
        };
    }

    populateRunnersActivityDetails(snapshot) {
        let runnerActivities = Object.values(snapshot);
        let activityDate = this.state.date;
        let activities = [];
        
        //   console.log(' creating comments for ',activitydate, runner);
        runnerActivities.map(function (each) {
            //   let eachComment = JSON.parse(JSON.stringify(each));
            //    console.log('each activity entry is ', each);
            let runnerActivity = new RunnerActivityDetails(activityDate, each.Name, each.desc);
            activities.push(runnerActivity);

        }


        )

        this.setState({
            dailyTrainingLogs: activities,
            dataLoaded: true
        });

        // console.log('dailyTrainingLogs is ',this.state.dailyTrainingLogs);
    }

    componentDidMount() {
        console.log('get daily acttivity for the date ,', this.state.date);
        let activityDate = this.state.date;
        setTimeout(() => {
            db.ref('/weekly-training/schedulesv2/' + activityDate).on('value', (snapshot) => {
                //  console.log('snapshot is',snapshot.val());

                if (snapshot && snapshot.val()) {
                    this.populateRunnersActivityDetails(snapshot.val().runners);

                }

            });

        }, 3000);


    }

    loadDetails(item) {
        this.props.navigation.navigate(
            'RunnerDailyActivityDetailsScreen', {
            runnerData: {
                'Name': item.runneName,
                'desc': item.desc,
                'date': this.state.date
            }
        }
        )
    }

    render() {

        if (this.state.dataLoaded) {
            return (

                <View style={styles.container}>

                    <FlatList
                        data={this.state.dailyTrainingLogs}
                        renderItem={
                            ({ item }) => <DailyActivitySummary
                                name={item.runneName}
                                desc={item.desc}
                                loadDetails={() => this.loadDetails(item)} />
                        }
                    />

                </View>
            );
        } else {
            return (

                <View>
                    <Text>Data still loading</Text>
                </View>
            );
        }
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#f5f5f5',
        flex: 1,
        height: '100%',
        paddingVertical: 20
    }
});

export default DailyActivitySummaryScreenV2;