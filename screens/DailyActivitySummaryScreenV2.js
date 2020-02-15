import React, { Component } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';


import db from '../common/db';
import Colors from '../common/Colors';
import DailyActivitySummary from '../component/DailyActivitySummary';




class DailyActivitySummaryScreenV2 extends Component {
    static navigationOptions = {
        title: 'workout',
       /* headerStyle: {
            backgroundColor: '#C8B894'
        }*/
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
        var userId = '21-01-2020';
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
        backgroundColor: '#f5f5f5',
        flex: 1,
        height: '100%',
        paddingVertical: 20
    }
});

export default DailyActivitySummaryScreenV2;