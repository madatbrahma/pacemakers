import React, { Component } from 'react';

import { View, Text, Image, StyleSheet, Button, TextInput, TouchableOpacity } from 'react-native';
import images from '../common/Images';
import db from '../common/db';
import Comments from '../component/Comments';
import { LoggedUser } from '../common/LoggedUser';
import ImageContainer from '../component/ImageContainer';
import Dialog, { DialogContent, DialogFooter, DialogButton } from 'react-native-popup-dialog';

class RunnerDailyActivityDetailsScreen extends Component {

    constructor(props) {
        // console.log(' props.navigation.state.runnerData ', props.navigation.state.params.runnerData);
        super(props);
        this.state = {
            runnerdata: props.navigation.state.params.runnerData,
            newComments: '',
            visible: false,
            reRenderComments: false

        };
    }

    handleNewComment = (comments) => {
        this.setState({ newComments: comments })
    }



    saveComments = () => {
        //     console.log('saveComments is called with comments ', this.state.newComments);
        //   console.log('logged user2 is', LoggedUser.getUser());
        const commentFor = this.state.runnerdata.Name;
        const commentBy = LoggedUser.getUser();
        const date = this.state.runnerdata.date;
        //  console.log('comments to save for ', runner, date);
        // var ref = db.ref("weekly-training/comments/");
        var commentsRef = db.ref("/weekly-training/comments/" + date + "/" + commentFor + "/");
        commentsRef.child(commentBy).set({


            'commentBy': commentBy,
            'comments': this.state.newComments


        });
        this.setState({
            visible: false,
            reRenderComments: true
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
                    <ImageContainer userName={name}
                        style={styles.image} />

                    <Text style={styles.text}>{name}</Text>
                    <Text style={styles.text}>{runnerData.desc}</Text>
                </View>




                <TouchableOpacity onPress={() => this.setState({ visible: true })}>
                    <Image
                        source={images["commentsIcon"]}
                        style={styles.icon}
                    />
                </TouchableOpacity>
                <Dialog
                    width={400}
                    //height={200}

                    visible={this.state.visible}
                    onTouchOutside={() => {
                        this.setState({ visible: false });
                    }}
                    footer={
                        <DialogFooter>
                            <DialogButton
                                text="OK"
                                onPress={() => {
                                    console.log('OK is pressed')
                                    this.saveComments();

                                }
                                }
                            />

                        </DialogFooter>
                    }
                >

                    <DialogContent>
                        <TextInput

                            underlineColorAndroid="transparent"
                            placeholder="comments..."
                            placeholderTextColor="grey"
                            numberOfLines={10}
                            multiline={true}
                            onChangeText={this.handleNewComment}

                        />
                    </DialogContent>

                </Dialog>




                <View style={styles.otherComments}>
                    <Comments runner={name} date={date}
                        reRenderComments={this.state.reRenderComments} />

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
        maxHeight: 100,
        alignItems: 'center'


    },
    image: {
        height: 60,
        width: 60
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
    icon: {
        height: 25,
        width: 25,
        marginLeft: 200,
        marginTop: 15
    },
    otherComments: {
        flex: 1,
        backgroundColor: 'white',
        marginHorizontal: 5,
        paddingHorizontal: 5,
        paddingVertical: 5,

        borderRadius: 10
    },
    text: {
        color: 'black'
    },

});

export default RunnerDailyActivityDetailsScreen;