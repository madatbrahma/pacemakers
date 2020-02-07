import React, { Component } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';


import db from '../common/db';
import Colors from '../common/Colors';
import DailyActivitySummary from '../component/DailyActivitySummary';




class DailyActivitySummaryScreen extends Component {
    static navigationOptions = {
        title: 'Todays workout summary',
        headerStyle: {
            backgroundColor: '#C8B894'
        }
        /* No more header config here! */
    };

    constructor(props) {
        super(props);
        this.state = {
            dataLoaded: false,
            dailyTrainingLogs: null
        };
    }

    componentDidMount() {
        let dbRef = db.ref('/weekly-training');
        // console.log(dbRef);
        //let weeklyTriningRef = dbRef.orderByKey().equalTo('21-01-2020');


        /* it was working 
         var userId = 'Tilak';
        return db.ref('/weekly-training/schedules/' + userId).once('value').then(function (snapshot) {
             // var username = (snapshot.val() && snapshot.val().username) || 'Anonymous';
             console.log(snapshot.val());
             // ...
         });*/

        var userId = '21-01-2020';

        /** this was giving data too  return db.ref('/weekly-training/schedules/' + userId).once('value').then(function (snapshot) {
             // var username = (snapshot.val() && snapshot.val().username) || 'Anonymous';
             console.log(snapshot.val());
             this.setState({
 
                 dailyTrainingLogs: snapshot.val(),
                 dataLoaded: true
             })
             
             // ...
         });*/

        var ref = db.ref("weekly-training/schedules");
        ref.orderByKey().startAt("02-01-2020").endAt("04-01-2020").on("child_added", function (snapshot) {
            console.log('looging val1 for key ',snapshot.val());
        });

        setTimeout(() => {
            db.ref('/weekly-training/schedules/' + userId).on('value', (snapshot) => {
                // console.log(snapshot.val());
                this.setState({

                    dailyTrainingLogs: snapshot.val(),
                    dataLoaded: true
                })
            });

        }, 3000);


    }

    loadDetails(item) {
      //  console.log('laoding runner details screen for ', item);
        this.props.navigation.navigate(
            'RunnerDailyActivityDetailsScreen', {
                runnerData: {
                    'Name': item.Name,
                    'desc': item.desc,
                    'date' : '2020-01-30'
                }
        }
        )
    }

    render() {

        if (this.state.dataLoaded) {
            return (

                <View style={styles.container}>

                    <FlatList
                        data={this.state.dailyTrainingLogs.runners}
                        renderItem={
                            ({ item }) => <DailyActivitySummary
                                name={item.Name}
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
        backgroundColor: '#1B1B1B',
        flex: 1,
        paddingVertical: 20
    }
});

export default DailyActivitySummaryScreen;