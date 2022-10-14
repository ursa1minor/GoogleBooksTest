import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Button,
  Text,
  View,
  Pressable,
  onPress,
} from "react-native";
import React, { Component, useEffect, useState } from "react";
import axios from "axios";
import { RefreshControl, TextInput } from "react-native-web";

export default function Search() {
  const [searchTerms, setSearchTerms] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const bookList = [];

  useEffect(() => {
    axios
      .get(
        `https://www.googleapis.com/books/v1/volumes?q=inauthor:${searchTerms}&key=AIzaSyCrfrVILZq2XjRAoDRZVEQbyVoG3Ru91cY`
      )
      .then(({ data }) => {

        // console.log(data.items[0], "<-")
        // console.log(data.items[0].volumeInfo.title);
        // console.log(data.items[0].volumeInfo.authors);
        // console.log(data.items[0].volumeInfo.publishedDate);
        // console.log(data.items[0].volumeInfo.description);

        setSearchResults([
          {
            title: data.items[0].volumeInfo.title,
            author: data.items[0].volumeInfo.authors[0],
            publishedDate: data.items[0].volumeInfo.publishedDate,
            
          },
          {
            title: data.items[1].volumeInfo.title,
            author: data.items[1].volumeInfo.authors[0],
            publishedDate: data.items[1].volumeInfo.publishedDate,
          },
          {
            title: data.items[2].volumeInfo.title,
            author: data.items[2].volumeInfo.authors[0],
            publishedDate: data.items[2].volumeInfo.publishedDate,
          },
        ]);
     
      })
      .catch((err) => {});
  }, [searchTerms]);


  return (
    <View style={styles.container}>
      <TextInput
        value={searchTerms}
        style={styles.textBoxes}
        placeholder="Search:"
      ></TextInput>
      {searchResults.map((book, index) => {
        return (
          <View key={index}>
            <br></br>
            <Text>{book.title}</Text>
            <Text>{book.author}</Text>
            <Text>{book.publishedDate}</Text>
            <br></br>
          </View>
        );
      })}
      <StatusBar style="auto" />
      <br></br>
      
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "pink",
    alignItems: "center",
    justifyContent: "center",
  },

  textBoxes: {
    width: "90%",
    fontSize: 18,
    padding: 12,
    borderColor: "gray",
    borderWidth: 0.2,
    borderRadius: 10,
  },
});
