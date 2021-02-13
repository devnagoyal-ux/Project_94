import React, { Component } from "react";
import {View,Text,StyleSheet} from 'react-native';
import MyHeader from '../components/MyHeader';
import db from '../config';
import firebase from 'firebase';
import { ScreenStackHeaderCenterView } from "react-native-screens";


export default class CalculationScreen extends Component{
   
    constructor(){
        super();
        this.state={
            user_id: firebase.auth().currentUser.email,
            income:null,
            income_title:'',
            docid:'',
            rent:null,
            shopping:null,
            tourTravel:null,
            rashan:null,
            electricityBill:null
        
        }
        
    }

    getIncomeDetails=()=>{
        var email = firebase.auth().currentUser.email;
        db.collection('income_data').where('user_id','==',email).get()
        .then(snapshot=>{
            snapshot.forEach(doc=>{
                var data = doc.data()
                this.setState({
                    userId : data.email_id,
                    income : data.income,
                    income_title : data.income_title,
                    docid :doc.id,

                })
            })
        })
    }

    getExpenseDetails=()=>{
        var email = firebase.auth().currentUser.email;
        db.collection('Expense_data').where('user_id','==',email).get()
        .then(querysnapshot=>{
            querysnapshot.forEach((doc) => {
                var data = doc.data()
                this.setState({
                    userId : data.user_id,
                    rent:parseInt(data.Rent),
                    shopping:parseInt(data.Shopping),
                    tourTravel:parseInt(data.TourAndTravel),
                    electricityBill:parseInt(data.ElectricityBill),
                    rashan:parseInt(data.Rashan),
                    docid :doc.id,

                });
            })
            });
        }     
    

    

    componentDidMount(){
        this.getIncomeDetails();
        this.getExpenseDetails();
        console.log(this.getExpenseDetails);
    }

    render(){
        const sum = this.state.shopping+this.rent+this.state.tourTravel+this.state.electricityBill+this.state.rashan;
        return(

        <View style={{flex:1}}>
        <MyHeader title="Calculation" navigation ={this.props.navigation}/>
        <View style={{flex:1}}>
          <Text style = {styles.title2}> Balance :                     Expenses : </Text> 
          <Text>
         {this.state.income}  {sum}
          </Text>
          

        </View>
        </View>
        );
    }
}

const styles = StyleSheet.create({
    title :{
        fontSize:35,
        fontWeight:'30',
        paddingBottom:10,
        color : '#8C001A'
      },
      title2 :{
        fontSize:35,
        alignItems:'center',
        fontWeight:'30',
        paddingBottom:10,
        color : '#8C001A',
        paddingLeft:60,
      },

});
