import React, { Component } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import EachDayWorkoutSummary from '../component/EachDayWorkoutSummary';
import moment from "moment";

import db from '../common/db';
import { UserDailyActivitySummary } from '../common/UseDailyActivitySummary';
import DailyActivitySummary from '../component/DailyActivitySummary';

class UserHomePageScreenV2 extends Component {

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
            // console.log('each day entry is ',eachdayEntry);
            //  let firstDateArr = Object.values(each);
            let dateIs = eachdayEntry.date;
            let dayIs = eachdayEntry.day;
            let runnersArray = eachdayEntry.runners;
            let runnersArrayIs = Object.values(runnersArray);
            // console.log(dateIs, dayIs);
            //  console.log(JSON.parse(JSON.stringify(runnersArray)) );

            runnersArrayIs.map(function (runner) {
                let runnerIs = runner.Name;
                let woDesc = runner.desc;
                if (runnerIs === 'Tilak') {
                    let woSumary = new UserDailyActivitySummary(dateIs, dayIs, runnerIs, woDesc);
                    //    console.log('adding new wo summary',woSumary);
                    weekTraningsdata.push(woSumary);
                }



            });





        })

        console.log(weekTraningsdata);
        this.setState({
            weekTranings: weekTraningsdata,
            dataLoaded: true
        });


    }

    componentDidMount() {


        var ref = db.ref("weekly-training/schedulesv2");



        setTimeout(() => {
            ref.orderByKey().startAt("02-01-2020").endAt("04-01-2020").on('value', (snapshot) => {

                this.populateActivitiSummary(Object.values(snapshot.val()));

            });

        }, 3000);



    }

    loadDetails() {


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

        if (this.state.dataLoaded) {
            return (

                <View style={styles.container}>

                    <FlatList
                        data={this.state.weekTranings}
                        renderItem={
                            ({ item }) => <DailyActivitySummary
                                name={item.name}
                                desc={item.woSummary}
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
    /** render() {
         if (this.state.dataLoaded) {
            console.log('state has val ',this.state.dailyTrainingLogs);
         }
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
     }*/
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

export default UserHomePageScreenV2;