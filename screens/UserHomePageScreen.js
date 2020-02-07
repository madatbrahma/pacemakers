import React, { Component } from 'react';
import { View, Text, StyleSheet ,FlatList} from 'react-native';
import EachDayWorkoutSummary from '../component/EachDayWorkoutSummary';
import moment from "moment";

import db from '../common/db';

class UserHomePageScreen extends Component {

    constructor(props) {
        super(props);
        this.state = {
            dataLoaded: false,
            dailyTrainingLogs: null
        };
    }

    componentDidMount() {

        var startOfWeek = moment().startOf('week').toDate();
       
        var endOfWeek = moment().endOf('week').toDate();
        

        var startOfWeekFormat=  moment(startOfWeek).format('DD-MM-YYYY');
        var endOfWeekFormat=  moment(endOfWeek).format('DD-MM-YYYY');

       // console.log('start week startOfWeekFormat: ',startOfWeekFormat , endOfWeekFormat);
      
        var ref = db.ref("weekly-training/schedulesv2");
       
       // ref.orderByKey().startAt("02-01-2020").endAt("04-01-2020").ref.child('Tilak').on()
        

     /* ref.orderByKey().startAt("02-01-2020").endAt("04-01-2020").
        on("child_added", function (snapshot) {
           console.log(snapshot.val());
            this.setState({
                dailyTrainingLogs: snapshot.val(),
                dataLoaded: true
            });
        
        });*/

        setTimeout(() => {
            ref.orderByKey().startAt("02-01-2020").endAt("04-01-2020").on('value', (snapshot) => {
                console.log('got data on ref ',snapshot.val());
                this.setState({
                    dailyTrainingLogs: snapshot.val(),
                    dataLoaded: true
                })
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
                        data={this.state.dailyTrainingLogs}
                        renderItem={
                            ({ item }) => <DailyActivitySummary
                                name="Tilak"
                                desc="tilak training"
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

export default UserHomePageScreen;