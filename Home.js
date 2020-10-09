import React, { useState, useEffect } from 'react';
import auth from '@react-native-firebase/auth';
import { Text, View } from 'native-base';

const Home = ({ navigation }) => {
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState();

  //   Handle user state changes
  function onAuthStateChanged(user) {
    setUser(user);
    if (initializing) {
      setInitializing(false);
    }
  }
  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, []);

  if (initializing) {
    navigation.navigate('Login');
  }
  if (!user) {
    navigation.navigate('Login');
  } else {
    navigation.navigate('Welcome');
  }
  return (<View>
    <Text>
      Home
    </Text>
  </View>)

};
export default Home;
