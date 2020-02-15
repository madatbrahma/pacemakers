import React, { Component } from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Image } from 'react-native';
import Colors from '../common/Colors';
import images from '../common/Images';
import * as Font from 'expo-font';




class DailyActivitySummary extends Component {

    componentDidMount() {
        Font.loadAsync({
            'open-sans-light': require('../assets/fonts/OpenSans-Light.ttf'),
            'open-sans-bold': require('../assets/fonts/OpenSans-Bold.ttf'),
        });
      //  console.log('loged user is ',LoggedUser.getUser());
    }



    render() {
        return (

            //  <TouchableOpacity onPress={this.props.loadDetails}>
            <View style={styles.container}>
                <View style={styles.imageContainer}>
                    <Image
                        source={images[this.props.name]}
                        style={styles.image}
                    />
                </View>
                <View style={styles.textContainer}>
                    <Text style={styles.text}>{this.props.name}</Text>
                    <Text style={styles.text}>{this.props.desc}</Text>
                    <TouchableOpacity onPress={this.props.loadDetails}>
                        <Image
                            source={images["commentsIcon"]}
                            style={styles.icon}
                        />
                    </TouchableOpacity>
                </View>
            </View>
            // </TouchableOpacity>

        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: 'white',

        height: 150,
        borderRadius: 5,

        paddingBottom: 10,
        marginVertical: 10
        , overflow: 'hidden',
        elevation: 5
    },

    imageContainer: {
        flex: 1,
        justifyContent: 'center',
        maxWidth: 120,
        paddingBottom: 5
    },
    image: {
        height: 100,
        width: 100,
        borderRadius: 10

    },
    icon: {
        height: 25,
        width: 25,
        marginLeft: 200,
        marginTop: 15
    },
    textContainer: {
        flex: 1,
        paddingVertical: 30,
        justifyContent: 'space-between'


    },
    text: {
        // fontFamily: 'open-sans-light',
        fontSize: 17,
        color: 'black'
    }
});

export default DailyActivitySummary;