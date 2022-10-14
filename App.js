import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Button, Text, View } from 'react-native';
import React, {useEffect, useState} from 'react';
import axios from 'axios';

export default function search() {

  useEffect(() => {
    axios
      .get(`https://www.googleapis.com/books/v1/volumes?q=inauthor:george+orwell+Nineteen&key=AIzaSyApILC06nrycphX1FY2-OGk_twwqg4ImVQ`)
      .then(({data}) => {
        console.log(data.items[0].volumeInfo.title);
        console.log(data.items[0].volumeInfo.authors[0]);
        console.log(data.items[0].volumeInfo.description);
        console.log(data.items[0].volumeInfo.publishedDate);
        console.log(data.items[0].volumeInfo.imageLinks.smallThumbnail);
      })
      .catch(err => {

      })
  }, []);
  

  //console.log(data, '<-')

  return (
    <View style={styles.container}>
      <Text>
      {/* <Text>{data.items[0].volumeInfo.title}</Text> */}
     
      <p> Why won't this show?</p>
      </Text> 
      <StatusBar style="auto" />


  
  </View>
);
  
  }
const styles = StyleSheet.create({
container: {
  flex: 1,
  backgroundColor: 'pink',
  alignItems: 'center',
  justifyContent: 'center',
},

textBoxes: {
  width: '90%',
  fontSize: 18,
  padding: 12,
  borderColor: 'gray',
  borderWidth: 0.2,
  borderRadius: 10
}
});





  