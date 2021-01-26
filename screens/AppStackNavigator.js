import React from 'react';
import {createStackNavigator} from 'react-navigation-stacks';
import ExpenseScreen from '../screens/ExpenseScreen';
import CalculationScreen from '../screens/CalculationScreen';

export const StackNavigator = createStackNavigator({
    Expense : {
        screen : ExpenseScreen,
        navigationOptions : {headerShown : false}
    },

    Calculation : {
        screen : CalculationScreen,
        navigationOptions : {headerShown : false}
    },
},
    
    {
        initialRouteName: 'Expense',
    
})
