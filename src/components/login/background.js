import React, {Component} from 'react';
import {View, Image, Dimensions, StyleSheet } from 'react-native';

export default class BackgroundImage extends Component {
    constructor(props){
        super(props);
        this.state = {
            deviceWith: Dimensions.get("window").width,
            deviceHeight: Dimensions.get("window").height
        }
        Dimensions.addEventListener("change", () => {
            this.setState({
                deviceWith: Dimensions.get("window").width,
                deviceHeight: Dimensions.get("window").height
            });
        });
    }
    render(){
        const {deviceHeight, deviceWith} = this.state;
        return (
            <View style={[styles.container,{ height: deviceHeight, width: deviceWith}]}>
                {/* <Image source={{uri: 'https://images.pexels.com/photos/531880/pexels-photo-531880.jpeg?cs=srgb&dl=background-blur-clean-531880.jpg&fm=jpg'}} style = {{height:"100%", width:"100%"}}/> */}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container:{
        position:'absolute', 
        zIndex:-1,
        backgroundColor:'yellow'
    }
})