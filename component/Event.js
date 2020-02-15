import React, { Component } from 'react';

import {View,Text,Image,StyleSheet} from 'react-native';

class Event extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.card}>
                    <Text style={styles.countDownText}> 30 days</Text>
                    <Text style={styles.eventNameText}> TCS 10 K </Text>
                 
                </View>
                
            </View>
        );
    }
}

const styles = StyleSheet.create({

    container:{
        flex:1,
       // alignItems:'center'
    },
    card :{
        backgroundColor:'#132A40',
        //height:100,
        //width:100,
        borderRadius:20,
        //alignItems:'center'
    },
    eventNameText:{
        color:'white',
        fontSize:30
    },
    countDownText:{
        color:'white',
        fontSize:40
    }

});

export default Event;