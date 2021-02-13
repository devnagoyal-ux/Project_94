import React from 'react';
import {View,TouchableOpacity,Text,TextInput,StyleSheet,Alert,KeyboardAvoidingView,Modal,ScrollView} from 'react-native';
import db from "../config";
import firebase from 'firebase';
import MyHeader from '../components/MyHeader';

export default class ExpenseScreen extends React.Component{
  constructor(){
    super();
    this.state={
      user_id: firebase.auth().currentUser.email,
      rent:null,
      shopping:null,
      tourTravel:null,
      rashan:null,
      electricityBill:null
    }
  }
  createUniqueId(){
    return Math.random().toString(36).substring(7);
  }

  submitData= async(rent,shopping,tourTravel,rashan,electricityBill,user_id)=>{
    var user_id = this.state.user_id;
    var randomRequest_id=this.createUniqueId();
    db.collection('Expense_data').add({
      "user_id":user_id,
      "Rent":rent,
      "TourAndTravel" : tourTravel,
      "ElectricityBill":electricityBill,
      "Shopping":shopping,
      "Rashan":rashan,
      "randomRequest_id":randomRequest_id,
    })
    this.setState({
      rent:0,
      shopping:0,
      electricityBill:0,
      tourTravel:0,
      rashan:0
    });
    return Alert.alert('Data Submitted Successfully',
    '',
    [
      {text:'OK', onPress:()=>{
        this.props.navigation.navigate('Calculation');
      }}
    ])
  }
    
  render(){
    return(
        <View style={{flex:1}}>
        {/* <MyHeader title="Expense" navigation ={this.props.navigation}/> */}
        <View style={{flex:1}}>
            <KeyboardAvoidingView style={styles.keyBoardStyle}>
            <Text style={{color:'#F87217',fontSize:20,}}> Rent</Text>
            <TextInput
            style={styles.formTextInput}
            placeholder ={"enter the amount"}
            maxLength ={10}
            keyboardType={'numeric'}
            onChangeText={(text)=>{
              this.setState({
               rent: text
              })
            }}
            value={this.state.rent}
          />
          <Text style={{color:'#F87217',fontSize:20,}}> Electricity Bill</Text>
          <TextInput
            style={styles.formTextInput}
            placeholder ={"enter the amount"}
            maxLength ={10}
            keyboardType={'numeric'}
            onChangeText={(text)=>{
              this.setState({
                electricityBill: text
              })
            }}
            value={this.state.electricityBill}
          />
          <Text style={{color:'#F87217',fontSize:20,}}> Shopping</Text>

          <TextInput
            style={styles.formTextInput}
            placeholder ={"enter the amount"}
            maxLength ={10}
            keyboardType={'numeric'}
            onChangeText={(text)=>{
              this.setState({
                shopping: text
              })
            }}
            value={this.state.shopping}
          />

          <Text style={{color:'#F87217',fontSize:20,}}> Rashan</Text>
           <TextInput
            style={styles.formTextInput}
            placeholder ={"enter the amount"}
            maxLength ={10}
            keyboardType={'numeric'}
            onChangeText={(text)=>{
              this.setState({
                rashan: text
              })
            }}
            value={this.state.rashan}
          />

          <Text style={{color:'#F87217',fontSize:20,}}> Tour and Travel</Text>

          <TextInput
            style={styles.formTextInput}
            placeholder ={"enter the amount"}
            maxLength ={10}
            keyboardType={'numeric'}
            onChangeText={(text)=>{
              this.setState({
                tourTravel: text
              })
            }}
            value={this.state.tourTravel}
          />

            <TouchableOpacity
                style={styles.button}
                onPress={()=>{this.submitData(this.state.rent,this.state.electricityBill,
                  this.state.shopping,this.state.tourTravel,this.state.rashan,this.state.user_id)}}
                >
                <Text>Submit</Text>
              </TouchableOpacity>
              </KeyboardAvoidingView>
        </View>
        </View>
        
        
    );
  }
}

const styles = StyleSheet.create({
  keyBoardStyle : {
    flex:1,
    alignItems:'center',
    justifyContent:'center'
  },
  title :{
    color: '#90A5A9',
     fontSize:20,
     fontWeight:"bold",
    backgroundColor : "#eaf8fe",
    
  },
  formTextInput:{
    width:"75%",
    height:35,
    alignSelf:'center',
    borderColor:'#98AFC7',
    borderRadius:10,
    borderWidth:1,
    marginTop:5,
    padding:10,
  },
  button:{
    width:"75%",
    height:50,
    justifyContent:'center',
    alignItems:'center',
    borderRadius:10,
    backgroundColor:"#3EA055",
    shadowColor: "#000",
    shadowOffset: {
       width: 0,
       height: 8,
    },
    shadowOpacity: 0.44,
    shadowRadius: 10.32,
    elevation: 16,
    marginTop:20
    },
  }
  )
  
  
