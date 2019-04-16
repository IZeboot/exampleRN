import {StyleSheet} from 'react-native';

export const viewTextInput =  StyleSheet.create({
    container: {
      paddingLeft:10,
      height:50,
      flexDirection: 'row',
      justifyContent: 'flex-start',
      alignItems: 'center',
      backgroundColor: 'rgba(0,0,0,0.3)',
      borderBottomWidth:3,
      borderBottomColor: 'rgba(255,255,255,0.5)',
    },
    textInput:{
        flex:1,
        marginLeft:10
    },
});

export const buttonLogin = StyleSheet.create({
  container: {
    height: 80,
    marginLeft: 10,
    marginRight: 10,
    backgroundColor: "grey",
    justifyContent: "center",
    alignItems: "center"
  }
});
