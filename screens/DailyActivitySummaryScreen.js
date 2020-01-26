import React, { Component } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';


import db from '../common/db';
import Colors from '../common/Colors';
import DailyActivitySummary from '../component/DailyActivitySummary';




class DailyActivitySummaryScreen extends Component {
    static navigationOptions = {
        title: 'Todays workout summary',
        headerStyle :{
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
        let weeklyTriningRef = db.ref('/weekly-training/schedules/09-01-2020');
        setTimeout(() => {
            weeklyTriningRef.on('value', (snapshot) => {
                // console.log(snapshot.val());
                this.setState({

                    dailyTrainingLogs: snapshot.val(),
                    dataLoaded: true
                })
            });

        }, 3000);


    }

    loadDetails(item){
        console.log('laoding runner details screen for ',item);
        this.props.navigation.navigate(
            'RunnerDailyActivityDetailsScreen',{
               runnerData : item
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
                                loadDetails={()=>this.loadDetails(item)}/>
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