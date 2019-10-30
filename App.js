import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Provider, useDispatch } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import * as Font from 'expo-font'
import ReduxThunk from 'redux-thunk';
import Reducers from './src/2.reducers'
import firebase from 'firebase'
import TodoListScreen from './src/components/TodoListScreen';
import TodoStack from './src/navigators/TodoStack';


export default function App() {
  const store = createStore(Reducers, {}, applyMiddleware(ReduxThunk))
  const [load, setLoad] = useState(false)

  useEffect( () => {
    Font.loadAsync({
      Roboto: require("native-base/Fonts/Roboto.ttf"),
      Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),
    })
    .then(() => setLoad(true))
    
  })

  // Replace config ini dengan config kalian sendiri ya gengs
  var firebaseConfig = {
    apiKey: "AIzaSyC_Edt1xOYEIWno6h78j_lP-ScdgU9hPbU",
    authDomain: "todo-test-cdd2b.firebaseapp.com",
    databaseURL: "https://todo-test-cdd2b.firebaseio.com",
    projectId: "todo-test-cdd2b",
    storageBucket: "todo-test-cdd2b.appspot.com",
    messagingSenderId: "783252028169",
    appId: "1:783252028169:web:9bd5207121b4ab4d8631d8"
  };

  // Initialize Firebase
  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
  }

  console.disableYellowBox = true
  if(load){
    return (
      <Provider store={store}>
        <View style={styles.container}>
          <TodoStack />
        </View>
      </Provider>
    );
  }else{
    return (
      <View></View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
});
