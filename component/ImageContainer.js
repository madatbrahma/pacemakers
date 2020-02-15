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
        console.log('props ',this.props);
        let imageName = this.props.userName+'.png';
        const storageRef = firebase.storage().ref(imageName);
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
                        style={{ width: 100, height: 100,borderRadius:50 }} />

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

})

export default ImageContainer;