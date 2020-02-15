import React, { Component } from 'react';
import { View, Text, StyleSheet, FlatList, Image } from 'react-native';
import EachDayWorkoutSummary from '../component/EachDayWorkoutSummary';
import moment from "moment";

import db from '../common/db';
import { UserDailyActivitySummary } from '../common/UseDailyActivitySummary';

class WeeklySchedule extends Component {

    constructor(props) {
        super(props);
        this.state = {
            dataLoaded: false,
            dailyTrainingLogs: null,
            weekTranings: []

        };
    }
    populateActivitiSummary(snapshotVal) {
        weekTraningsdata = [];

        snapshotVal.map(function (each) {
            let eachdayEntry = JSON.parse(JSON.stringify(each));
            let dateIs = eachdayEntry.date;
            let dayIs = eachdayEntry.day;
            let runnersArray = eachdayEntry.runners;
            let runnersArrayIs = Object.values(runnersArray);

            runnersArrayIs.map(function (runner) {
                let runnerIs = runner.Name;
                let woDesc = runner.desc;
                if (runnerIs === 'Tilak') {
                    let woSumary = new UserDailyActivitySummary(dateIs, dayIs, runnerIs, woDesc);
                    weekTraningsdata.push(woSumary);
                }



            });





        })

        this.setState({
            weekTranings: weekTraningsdata,
            dataLoaded: true
        });


    }

    componentDidMount() {

        var tuesday = moment().startOf('week').add(2, 'days').toDate();
        var saturday = moment().endOf('week').toDate();
        tuesday = moment(tuesday).format('YYYY-MM-DD');
        saturday = moment(saturday).format('YYYY-MM-DD');

        var ref = db.ref("weekly-training/schedulesv2");




        setTimeout(() => {
            ref.orderByKey().startAt(tuesday).endAt(saturday).on('value', (snapshot) => {

                if (snapshot && snapshot.val()) {
                    this.populateActivitiSummary(Object.values(snapshot.val()));
                }

            });

        }, 3000);





    }

    loadDetails(item) {

        this.props.navigation.navigate(
            'RunnerDailyActivityDetailsScreen', {
            runnerData: {
                'Name': item.name,
                'desc': item.woSummary,
                'date': item.date
            }
        }
        )
    }

    render() {

        if (this.state.dataLoaded) {
            return (

                <View style={styles.container}>

                    <FlatList
                        data={this.state.weekTranings}
                        renderItem={
                            ({ item }) => <EachDayWorkoutSummary
                                day={item.day}
                                date={item.date}
                                woSummary={item.woSummary}
                                loadDetails={() => this.loadDetails(item)} />
                        }
                    />

                </View>
            );
        } else {
            return (

                <View >
                    
                    <Text> here</Text>
                </View>


            );
        }
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
});

export default WeeklySchedule;