import React, { Component } from 'react';
import { View, Text, StyleSheet, FlatList, Image } from 'react-native';
import EachDayWorkoutSummary from '../component/EachDayWorkoutSummary';
import ImageContainer from '../component/ImageContainer';
import moment from "moment";

import db from '../common/db';
import { UserDailyActivitySummary } from '../common/UseDailyActivitySummary';
import Event from '../component/Event';
import WeeklySchedule from '../component/WeeklySchedule';
import {LoggedUser} from '../common/LoggedUser';

//import CountdownCircle from 'react-native-countdown-circle';

class UserHomePageScreenV2 extends Component {

    constructor(props) {
        super(props);
        this.state = {
            dataLoaded: false,
            dailyTrainingLogs: null,
            weekTranings: [],

        };
    }



    render() {


        return (

            <View style={styles.container}>
                <View style={styles.userSummary}>
                    <View>
                        <ImageContainer userName={LoggedUser.getUser()} />
                    </View>

                </View>
                <View style={styles.weeklySection}>
                    <WeeklySchedule />
                </View>
                <View style={styles.events}>
                    <Image style={styles.image} source={images['tcs10k']}></Image>
                    <Image style={styles.image} source={images['adhm']}></Image>
                    <Image style={styles.image} source={images['tmm']}></Image>

                </View>




            </View>


        );

    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        height: '100%',
        marginTop: 50,
        backgroundColor: '#f5f5f5'
        //  alignContent:'space-between'
    },

    userSummary: {
        flex: 1,
        maxHeight: 100,
        // marginLeft:10,
        flexDirection: 'row',
        justifyContent: 'center'
        // justifyContent:'space-between'
        // alignItems:'flex-end'
        // marginTop: 20,
        //  alignItems: 'center',
        //  alignContent:'stretch'
        //  maxHeight: 150

    },
    events: {
        flex: 1,
        marginVertical: 5,
        flexDirection: 'row'
    },
    weeklySection: {
        flex: 4,
        //  marginTop:200,
        backgroundColor: 'white',

    },
   
    image: {

        flex: 1,
        width: null,
        height: null,
        resizeMode: 'contain'
    }
});

export default UserHomePageScreenV2;