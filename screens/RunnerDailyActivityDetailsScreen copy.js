import React, { Component } from 'react';

import { View, Text, Image, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import images from '../common/Images';
import db from '../common/db';
import Comments from '../component/Comments';

class RunnerDailyActivityDetailsScreen extends Component {

    constructor(props) {
        console.log(' props.navigation.state.runnerData ',props.navigation.state.params.runnerData);
        super(props);
        this.state = {
            runnerdata: props.navigation.state.params.runnerData,
            newComments: ''

        };
    }

    handleNewComment = (comments) => {
        this.setState({ newComments: comments })
    }

    /**  saveRunnerActivityData =(item)=>{
          this.setState({
              runner: item.name,
              date: item.date
          })
      };*/

    saveComments = (comments) => {
        const runner = this.state.runnerdata.Name;
        const date = this.state.runnerdata.date;
        console.log('comments to save for ', runner, date);
        // var ref = db.ref("weekly-training/comments/");
        var commentsRef = db.ref("/weekly-training/comments/" + date + "/" + runner + "/");
        commentsRef.child(runner).set({

            "comments": comments

        });


    }
    render() {
        /* 2. Read the params from the navigation state */
        const { params } = this.props.navigation.state;
        const runnerData = params ? params.runnerData : null;
        const name = runnerData.Name;
        const date = runnerData.date;
        return (
            <View style={styles.container}>
                <View style={styles.imageContainer}>
                    <Image style={styles.image}
                        source={images[name]}
                    />

                    <Text style={styles.text}>{name}</Text>
                    <Text style={styles.text}>{runnerData.desc}</Text>
                </View>
                <View style={styles.textAreaContainer} >
                    <TextInput
                        style={styles.textArea}
                        underlineColorAndroid="transparent"
                        placeholder="Type something"
                        placeholderTextColor="grey"
                        numberOfLines={10}
                        multiline={true}
                        onChangeText={this.handleNewComment}

                    />
                    <TouchableOpacity
                        style={styles.submitButton}
                        onPress={
                            () => this.saveComments(this.state.newComments)
                        }>
                        <Text style={styles.submitButtonText}>Save</Text>
                    </TouchableOpacity>
                </View>
               <View style={styles.otherComments}>
                   <View>
                    <Comments runner={name} date ={date}/>
                   </View>
                  
                   <View style={styles.otherImages}>
                        <Image style={
                            {
                                ...styles.otherImage
                            }}
                            source={images['Brojen']}
                        />
                        <Image style={{
                            ...styles.otherImage,
                            opacity: 0.2
                        }}
                            source={images[name]}
                        />

                        <Image style={{
                            ...styles.otherImage,
                            opacity: 0.2
                        }}
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
        // backgroundColor: '#353839',

    },
    imageContainer: {
        marginTop: 10,
        flex: 1,
        maxHeight: 120,
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
        justifyContent: 'center'


    },
    otherImage: {
        height: 40,
        width: 40,
        marginHorizontal: 5,
        marginBottom: 20,
        borderRadius: 20

    },
    otherComments: {
        flex: 1,
        backgroundColor: '#494b4c',
        marginHorizontal: 5,
        paddingHorizontal: 5,
        paddingVertical: 5,

        borderRadius: 10
    },
    text: {
        color: 'black'
    },
    textAreaContainer: {
        flex: 1,
        borderColor: 'black',
        borderWidth: 1,
        marginTop: 2,
        borderRadius: 10,
        margin: 5
    },
    textArea: {
        height: 100,
        justifyContent: "flex-start"
    },
    submitButton: {
        backgroundColor: '#D8B894',
        padding: 10,
        margin: 15,
        height: 40,
        maxWidth: 60,
        marginLeft: 300,
        borderRadius: 8


    },
    submitButtonText: {
        color: 'white'
    }

});

export default RunnerDailyActivityDetailsScreen;