import React, { Component } from 'react';
import { Text, View, StyleSheet, TouchableOpacity,Image } from 'react-native';
import Colors from '../common/Colors';
import images from '../common/Images';



class DailyActivitySummary extends Component {
    
   
      
    render() {
        return (
            
            <TouchableOpacity onPress={this.props.loadDetails}>
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
                    </View>
                </View>
            </TouchableOpacity>

        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection:'row',
        backgroundColor: '#353839',
        
        color: 'white',
        height:150,
        borderRadius:50,
        
        paddingBottom: 10,
        marginVertical: 10
        ,overflow:'hidden',
        elevation:5
    },

    imageContainer:{
        paddingLeft:20
        ,paddingBottom:5
    },
    image:{
        height:150,
        width:150,
        borderRadius:30

    },
    textContainer:{
        flex:1,
        paddingLeft:50,
        paddingVertical:30,
          
        justifyContent:'space-between'
         

    },
    text: {
        color: 'white'
    }
});

export default DailyActivitySummary;