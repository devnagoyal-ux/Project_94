import React, { Component } from "react";
import {createDrawerNavigator} from 'react-navigation-drawer';
import { AppTabNavigator } from './AppTabNavigator';
import CustomSideBarMenu  from './CustomSideBarMenu';
import { Icon } from "react-native-elements";
import CalculationScreen from '../screens/CalculationScreen';

export const AppDrawerNavigator = createDrawerNavigator({
  Home : {
    screen : AppTabNavigator,
    navigationOptions:{
      drawerIcon : <Icon name="home" type ="fontawesome5" />
    }
    },
    Calculation : {
      screen : CalculationScreen
    }
  },
    {
      contentComponent:CustomSideBarMenu
    },
    {
      initialRouteName : 'Home'
    })
