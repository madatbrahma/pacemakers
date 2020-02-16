import React, { Component } from 'react';
import { View, Image, StyleSheet, Text } from 'react-native';

import firebase from 'firebase';

class ImageContainer extends Component {

    constructor(props) {
        super(props);
        this.state = {
            imageUrl: '',
            isImageLoaded: false

        };
    }

    componentDidMount() {
       // console.log('get logged in user image of  ',this.props.userName);
        let imageName = this.props.userName+'.png';
        const storageRef = firebase.storage().ref('/profilepics/'+imageName);
        storageRef.getDownloadURL()
            .then(url => {
                this.setState({
                    imageUrl: url,
                    isImageLoaded: true
        
                })

            })
            .catch(e => { console.log(e); });

        
    }
    render() {
        if (this.state.isImageLoaded) {
            return (
                <View style={styles.container}>
                    <Image source={{ uri: this.state.imageUrl }}
                        style={[styles.imageStyle ,this.props.style]} />

                </View>
            );
        } else {
            return (
                <View style={styles.container}>
                    <Text>Image to load</Text>
                </View>
            );

        }
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignContent:'center'
       
       
    },

    imageStyle:{
        width: 100, height: 100,borderRadius:50 
    }

})

export default ImageContainer;