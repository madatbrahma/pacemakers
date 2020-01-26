import React, { Component } from 'react';

import { View, Text, Image, StyleSheet } from 'react-native';
import images from '../common/Images';

class RunnerDailyActivityDetailsScreen extends Component {
    render() {
        /* 2. Read the params from the navigation state */
        const { params } = this.props.navigation.state;
        const runnerData = params ? params.runnerData : null;
        const name = runnerData.Name;
        return (
            <View style={styles.container}>
                <View style={styles.imageContainer}>
                    <Image style={styles.image}
                        source={images[name]}
                    />

                    <Text style={styles.text}>{name}</Text>
                    <Text style={styles.text}>{runnerData.desc}</Text>
                </View>
                <View style={styles.myComments}>
                    <Text style={styles.text}>Run has been good. Was feeling comfortable.
                        Cold be better.Run has been good. Was feeling comfortable.
                        Cold be better.Run has been good. Was feeling comfortable.
                        Cold be better.Run has been good. Was feeling comfortable.
                        Cold be better.
                    </Text>
                </View>
                <View style={styles.otherComments}>
                    <View style={styles.otherImages}>
                        <Image style={
                            {...styles.otherImage
                            }}
                            source={images['Brojen']}
                        />
                        <Image style={{...styles.otherImage,
                                       opacity :0.2}}
                            source={images[name]}
                        />

                        <Image style={{...styles.otherImage,
                                       opacity :0.2}}
                            source={images[name]}
                        />
                    </View>
                    <View>
                        <Text style={styles.text}>Run has been good. Was feeling comfortable.
                            Cold be better.Run has been good. Was feeling comfortable.
                            Cold be better.Run has been good. Was feeling comfortable.
                            Cold be better.Run has been good. Was feeling comfortable.
                            Cold be better.
                    </Text>
                    </View>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#353839',

    },
    imageContainer: {
        marginTop: 10,
        flex: 1,
        height: 50,
        marginHorizontal: 50,
        alignItems: 'center'


    },
    image: {
        height: 80,
        width: 80
    },
    myComments: {
        flex: 1,
        backgroundColor: '#494b4c',
        marginHorizontal: 5,
        paddingHorizontal: 5,
        paddingVertical: 5,
        alignItems: 'center',
        borderRadius: 10

    },
    otherImages: {
        flexDirection: 'row',
        justifyContent:'center'
        

    },
    otherImage: {
        height: 40,
        width: 40,
        marginHorizontal:5,
        marginBottom:20,
        borderRadius:20
        
    },
    otherComments: {
        flex: 2,
        backgroundColor: '#494b4c',
        marginHorizontal: 5,
        paddingHorizontal: 5,
        paddingVertical: 5,
        
        borderRadius: 10
    },
    text: {
        color: 'white'
    },

});

export default RunnerDailyActivityDetailsScreen;