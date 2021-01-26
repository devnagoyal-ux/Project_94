import React from 'react';
import { Image } from 'react-native';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import IncomeScreen from '../screens/IncomeScreen';
import ExpenseScreen from '../screens/ExpenseScreen';



export const AppTabNavigator = createBottomTabNavigator({
  Income : {
    screen: IncomeScreen,
    navigationOptions :{
      tabBarIcon : <Image source={require("../assets/incomelogo.jpg")} style={{width:20, height:20}}/>,
      tabBarLabel : "Income",
    }
  },
  Expense: {
    screen: ExpenseScreen,
    navigationOptions :{
      tabBarIcon : <Image source={require("../assets/expense.jpg")} style={{width:20, height:20}}/>,
      tabBarLabel : "Expense",
    }
  }
});
