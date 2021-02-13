import React, { Component} from 'react';
import { Header,Icon,Badge } from 'react-native-elements';
import { View, Text, StyeSheet ,Alert} from 'react-native';
import {SafeAreaProvider} from 'react-native-safe-area-context';

const MyHeader = props => {
  return (
    <SafeAreaProvider>
      <View style = {{marginBottom:1}}>
    <Header
      leftComponent={<Icon name='bars' type='font-awesome' color='#696969'  onPress={() => props.navigation.toggleDrawer()}/>}
      centerComponent={{ text: props.title, style: { color: '#90A5A9', fontSize:20,fontWeight:"bold", } }}
      backgroundColor = "#eaf8fe"
    />
    </View>
    </SafeAreaProvider>
  );
};

export default MyHeader;
