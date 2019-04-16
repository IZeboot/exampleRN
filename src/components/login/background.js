import React, {Component} from 'react';
import {View, Image, Dimensions} from 'react-native';

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
        return (
            <View style={{ height:this.state.deviceHeight, width:this.state.deviceWith, position:'absolute', zIndex:-1}}>
                <Image source={{uri: 'https://images.pexels.com/photos/531880/pexels-photo-531880.jpeg?cs=srgb&dl=background-blur-clean-531880.jpg&fm=jpg'}} style = {{height:"100%", width:"100%"}}/>
            </View>
        );
    }
}