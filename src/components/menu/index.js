import React, {Component} from 'react';
import {View, FlatList, Text, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { DrawerActions } from 'react-navigation-drawer';
import styles from './styles';

class sideMenu extends Component {
  constructor(props){
    super(props)
    this.data = [
      {
        title:"Main",
        icon:"home"
      },
      {
        title:"Profile",
        icon:"person"
      },
      {
        title:"Settings",
        icon:"settings"
      },
    ]
  }

  goToScreen = (title) =>{
    const {navigation} = this.props;
    navigation.dispatch(DrawerActions.closeDrawer())
    navigation.navigate(title)
  }

  render(){
    return (
      <View style = {styles.container}>
        <FlatList
          data = {this.data}
          renderItem = {(element)=>{
            const {title, icon} = element.item;
            return (
              <TouchableOpacity style = {styles.itemContainer} onPress = {() => this.goToScreen(title)}>
                <Icon size = {30} name = {icon}/>
                <Text>{title}</Text>
              </TouchableOpacity>
            );
          }}
          // numColumns = {3}
          keyExtractor = {(item, index)=>index}
        />
      </View>
    );
  }
}

export default sideMenu;