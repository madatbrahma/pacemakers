import React, { Component } from 'react';
import { Text, View, Image,StyleSheet, TouchableOpacity } from 'react-native';
import images from '../common/Images';
import * as Font from 'expo-font';

class EachDayWorkoutSummary extends Component {

    componentDidMount() {
        Font.loadAsync({
          'open-sans-light': require('../assets/fonts/OpenSans-Light.ttf'),
          'open-sans-bold': require('../assets/fonts/OpenSans-Bold.ttf'),
        });
      }
    render() {
        return (


            <TouchableOpacity onPress={this.props.loadDetails}>
                <View style={styles.container}>
                    <View style={styles.woImageContainer}>
                    <Image style={styles.image}
                        source={images[this.props.day]}
                    />

                    </View>

                    <View style={styles.woSummaryContainer}>
                        <View style={styles.daySummary}>
                            <View><Text style={styles.text}>{this.props.day}</Text></View>
                            <View><Text style={styles.text}>{this.props.date}</Text></View>
                        </View>

                        <View style={styles.woSummary}>
                            <Text style={styles.text}>{this.props.woSummary}</Text>
                        </View>

                    </View>



                </View>
            </TouchableOpacity>






        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: 'white',
        borderRadius: 10,
        marginTop: 10,
        marginHorizontal: 10,
        //  maxHeight:150,
        paddingBottom: 5,
        elevation: 5,


    },
    woImageContainer: {
        flex: 1,
       
        justifyContent:'center',
        maxWidth:'30%'
    },
    woSummaryContainer: {
        flex: 1,
    },
    image :{
        height:75,
        width:75,
        borderRadius:35
    },

    hairline: {
        backgroundColor: '#A2A2A2',
        paddingTop: 50,
        width: 30,
    },
    daySummary: {
        flex: 1,
        marginTop: 10,
       // marginHorizontal: 20,
       // flexDirection: "row",
        justifyContent: 'space-between'
    },
    woSummary: {
        flex: 2,
        paddingTop: 10,
        //  marginTop: 5,
       // alignItems: 'center'
    },
    text: {
        color: 'black',
        fontFamily: 'open-sans-light',
        fontSize: 17
    }
});

export default EachDayWorkoutSummary;