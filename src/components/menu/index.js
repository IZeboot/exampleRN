import React, {Component} from 'react';
import {View, FlatList, Text, StyleSheet} from 'react-native';

class sideMenu extends Component {
  constructor(props){
    super(props)
    this.data = [
      {
        title:"1"
      },
      {
        title:"2"
      },
      {
        title:"3"
      },
      {
        title:"4"
      },
      {
        title:"5"
      },
      {
        title:"6"
      },
      {
        title:"7"
      },
      {
        title:"8"
      },
    ]
  }

  render(){
    return (
      <View style = {styles.container}>
        <FlatList
          data = {this.data}
          renderItem = {(item)=>(
            <View style = {styles.itemContainer}>
              <Text>{item.item.title}</Text>
            </View>
          )}
          numColumns = {3}
          keyExtractor = {(item, index)=>index}
        />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container:{
    flex:1
  },
  itemContainer:{
    flex:1,
    flexDirection: 'column'
  }
})

export default sideMenu;