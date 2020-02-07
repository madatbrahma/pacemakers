import React, { Component } from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import { Divider } from 'react-native-paper';

class EachDayWorkoutSummary extends Component {
    render() {
        return (

            
                <TouchableOpacity onPress={this.props.loadDetails}>
                    <View style={styles.container}>
                        <View style={styles.daySummary}>
                            <View><Text style={styles.text}>{this.props.day}</Text></View>
                            <View><Text style={styles.text}>{this.props.date}</Text></View>
                        </View>

                      <View style={styles.woSummary}>
                            <Text style={styles.text}>{this.props.woSummary}</Text>
                        </View>
                    </View>
                </TouchableOpacity>
            





        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#C8B894',
        borderRadius: 10,
        marginTop:30,
        marginHorizontal:10,
        maxHeight:150,
        paddingBottom: 150,
        elevation: 5,
        
      
    },
    hairline: {
        backgroundColor: '#A2A2A2',
        paddingTop:50,
         width: 30,
    },
    daySummary: {
        marginTop: 10,
        marginHorizontal: 20,
        flexDirection: "row",
        justifyContent: 'space-between'
    },
    woSummary: {
        paddingTop:50,
        marginTop: 5,
        alignItems: 'center'
    },
    text: {
        color: 'black',
        fontSize:17
    }
});

export default EachDayWorkoutSummary;