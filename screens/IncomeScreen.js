import React from 'react';
import {View,TouchableOpacity,Text,TextInput,StyleSheet,Alert,KeyboardAvoidingView,Modal,ScrollView} from 'react-native';
import db from "../config";
import firebase from 'firebase';

export default class IncomeScreen extends React.Component{
  constructor(){
    super();
    this.state={
      userId: firebase.auth().currentUser.email,
      incomeTitle:'',
      income:''
    }
  }

  createUniqueId(){
    return Math.random().toString(36).substring(7);
  }



  submitData =(incomeTitle,income)=>{
    var userId = this.state.userId
    var randomSubmitId = this.createUniqueId();
    db.collection('income_data').add({
        "user_id": userId,
        "income_title":incomeTitle,
        "income":income,
        "request_id"  : randomSubmitId,
    })

    this.setState({
        incomeTitle :'',
        income : '',
    })

    return Alert.alert('Data Submitted Successfully',
    '',
    [
      {text: 'OK', onPress: () => this.props.navigation.navigate('Expense')},
    ]
    );
  }
  render(){
    return(
      <View style={{flex:1}}>
         <View style={{justifyContent:'center', alignItems:'center'}}>
         <Text style= {styles.title}> Income Screen </Text>
         </View>
            <KeyboardAvoidingView style={styles.keyBoardStyle}>
              <TextInput
                style ={styles.formTextInput}
                placeholder={"enter income title"}
                 onChangeText={(text)=>{
                    this.setState({
                        incomeTitle:text
                    })
                 }}
                 value={this.state.incomeTitle}
              />
              <TextInput
            style={styles.formTextInput}
            placeholder ={"enter the amount of money you earn"}
            maxLength ={10}
            keyboardType={'numeric'}
            onChangeText={(text)=>{
              this.setState({
                income: text
              })
            }}
            value={this.state.income}
          />
          <TouchableOpacity
                style={styles.button}
                onPress={()=>{this.submitData(this.state.incomeTitle,this.state.income)}}
                >
                <Text>Submit</Text>
              </TouchableOpacity>
              </KeyboardAvoidingView>
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
  marginTop:20,
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

