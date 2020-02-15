import React, { Component } from 'react';

import { View, Image, StyleSheet, TouchableOpacity } from 'react-native';
import images from '../common/Images';


class CommentImages extends Component {

    constructor(props) {
        super(props);
        this.state = {
            allruners: props.allruners,
            runnerInFocus: props.runnerInFocus,
            setNewRunnerInFocus : props.setNewRunnerInFocus
        }
    }

    imagePressed = (runnerInFocus) => {
        console.log('image pressed for ', runnerInFocus);
        this.props.setNewRunnerInFocus(runnerInFocus);
        this.setState({
            runnerInFocus: runnerInFocus
        })
       
    }

    imageStyle = (runner) => {
        if (runner === this.state.runnerInFocus) {
            return {
                height: 40,
                width: 40,
                marginHorizontal: 5,
                marginBottom: 20,
                borderRadius: 20

            }

        } else {
            return {
                height: 40,
                width: 40,
                marginHorizontal: 5,
                marginBottom: 20,
                borderRadius: 20,
                opacity: 0.2

            }

        }

    }
    render() {

        return (
            <View style={styles.imageContainer}>


                {
                    this.state.allruners.map((y) => {
                        return (<TouchableOpacity onPress={() => this.imagePressed(y)}>
                            <Image style={this.imageStyle(y)}
                                source={images[y]}
                                
                            />
                        </TouchableOpacity>
                        );
                    })
                }


            </View>
            /** <View style={styles.imageContainer}>
                  <TouchableOpacity onPress={()=>this.imagePressed('Brojen')}>
                      <Image style={this.imageStyle('Brojen')} 
                          source={images['Brojen']}
                      />
                  </TouchableOpacity>
  
                  <TouchableOpacity onPress={()=>this.imagePressed('Tilak')}>
  
                  <Image style={this.imageStyle('Tilak')} 
                          source={images['Tilak']}
                      />
                  </TouchableOpacity>
  
                  <TouchableOpacity onPress={()=>this.imagePressed('Karthik')}>
  
                  <Image style={this.imageStyle('Karthik')} 
                          source={images['Karthik']}
                      />
                  </TouchableOpacity>
              </View> */
        );
    }
}




const styles = StyleSheet.create({
    imageContainer: {
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
})

export default CommentImages;