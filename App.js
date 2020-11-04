import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './Home';
import Login from './login/Login';
import Welcome from './Welcome';

function HomeScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
    </View>
  );
}

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home}  options={{
          

          headerStyle: {
            backgroundColor: '#64bac2',
  
    
          },
          headerTintColor: '#fff',
        }} />
        <Stack.Screen name="Login" component={Login} options={{
          

            headerStyle: {
              backgroundColor: '#64bac2',
    
      
            },
            headerTintColor: '#fff',
          }}/>
        <Stack.Screen name="Wellcome" component={Welcome}  options={{
          

          headerStyle: {
            backgroundColor: '#64bac2',
  
    
          },
          headerTintColor: '#fff',
        }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
