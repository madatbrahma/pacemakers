import React, { Component } from 'react';
import { View, Text, ActivityIndicator,StyleSheet } from 'react-native';
import firebase from 'firebase';
import db from '../common/db';

class LoadingScreen extends Component {

    componentDidMount() {
        this.checkLoggedIn();
    }

   
    checkLoggedIn = () => {
        console.log('cehck if user logged in');

        firebase.auth().onAuthStateChanged((user) => {
         //   console.log('is user logged ',user.email);
            if (user) {
                this.props.navigation.navigate('LoggedInHome');
            } else {
                this.props.navigation.navigate('LoginScreen');
            }

        })
    };

    render() {
        return (
            <View style={styles.container}>
                <ActivityIndicator size='large' />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
})

export default LoadingScreen;