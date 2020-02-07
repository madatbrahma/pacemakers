import React, { Component } from 'react';
import { View, Text, Button,StyleSheet } from 'react-native';

import * as Google from 'expo-google-app-auth';

import firebase from 'firebase';

class LoginScreen extends Component {

    isUserEqual = (googleUser, firebaseUser)=> {
        console.log('check if user equal');
        if (firebaseUser) {
          var providerData = firebaseUser.providerData;
          for (var i = 0; i < providerData.length; i++) {
            if (providerData[i].providerId === firebase.auth.GoogleAuthProvider.PROVIDER_ID &&
                providerData[i].uid === googleUser.getBasicProfile().getId()) {
                    console.log('we dont need t reauth');
              // We don't need to reauth the Firebase connection.
              return true;
            }
          }
        }
        console.log('we  need to reauth');
        return false;
      }

      checkIfMember =(user) =>{
          return false;
      }

     onSignIn = (googleUser)=> {
        console.log('on Sign inGoogle Auth Response', googleUser.user.email);
        //here if the email is not authorised in pacemakers , navigate to a different screen.
        // We need to register an Observer on Firebase Auth to make sure auth is initialized.
         if(!this.checkIfMember(googleUser.user.email)){
             console.log("you are not a member");
             this.props.navigation.navigate('UnautorizedScreen');
             return;

        }
        var unsubscribe = firebase.auth().onAuthStateChanged(function(firebaseUser) {
          unsubscribe();
          // Check if we are already signed-in Firebase with the correct user.
          if (!this.isUserEqual(googleUser, firebaseUser)) {
            // Build Firebase credential with the Google ID token.
            var credential = firebase.auth.GoogleAuthProvider.credential(
                googleUser.idToken,
                googleUser.accessToken
                
                );
            // Sign in with credential from the Google user.
            firebase.auth().signInWithCredential(credential).catch(function(error) {
              // Handle Errors here.
              var errorCode = error.code;
              var errorMessage = error.message;
              // The email of the user's account used.
              var email = error.email;
              // The firebase.auth.AuthCredential type that was used.
              var credential = error.credential;
              // ...
            });
          } else {
            console.log('User already signed-in Firebase.');
          }
        }.bind(this));
      }

    signInWithGoogleAsync = async() => {
        try {
            const result = await Google.logInAsync({
                androidClientId: '571552619528-an1csavqd4lcr76ms9f5ggsd6u1jtsl8.apps.googleusercontent.com',
                //  iosClientId: YOUR_CLIENT_ID_HERE,
                behavior:'web',
                scopes: ['profile', 'email'],
            });

           // console.log('result is ',result.user.email);
           
            if (result.type === 'success') {
               
                this.onSignIn(result);
                return result.accessToken;
            } else {
                return { cancelled: true };
            }
        } catch (e) {
            return { error: true };
        }
    };

    render() {
        return (
            <View style={styles.container}>
                <Button
                    title="Sign In With Google"
                    onPress={() => {
                        this.signInWithGoogleAsync()
                    }} />
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

export default LoginScreen;