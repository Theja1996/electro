/* eslint-disable prettier/prettier */
import React, {useState, useEffect} from 'react';
import {
  Container,
  Header,
  Content,
  Form,
  Item,
  Input,
  Label,
  Button,
  Text,
  Row,
  Left,
  Icon,
  Body,
  Title,
  Right,
} from 'native-base';
import {SafeAreaView, StyleSheet, ScrollView, StatusBar,Image} from 'react-native';
import auth from '@react-native-firebase/auth';

const Login = ({navigation}) => {
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState();

  // Handle user state changes
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

  const handleLogin = () => {
    auth()
      .signInWithEmailAndPassword(userName, password)
      .then(() => {
        console.log('User account created & signed in!');
        alert('success');
        navigation.navigate('Home');
      })
      .catch((error) => {
        if (error.code === 'auth/email-already-in-use') {
          console.log('That email address is already in use!');
        }

        if (error.code === 'auth/invalid-email') {
          console.log('That email address is invalid!');
        }

        console.error(error);
      });
  };
  return (
    <Container style={styles.cont}>
     <Image style={styles.img} source={require('./bulb.png')} />
      <Content>
        <Form style={styles.form}>
          <Item stackedLabel>
            <Label>Username</Label>
            <Input onChangeText={(value) => setUserName(value)} />
          </Item>
          <Item stackedLabel last>
            <Label>Password</Label>
            <Input
              secureTextEntry={true}
              onChangeText={(value) => setPassword(value)}
            />
          </Item>
          <Row style={{justifyContent: 'center'}}>
            <Button style={styles.loginButton} onPress={handleLogin}>
              <Text style={styles.log}> Login</Text>
            </Button>
          </Row>
        </Form>
      </Content>
    </Container>
  );
};
export default Login;

const styles = StyleSheet.create({
  loginButton: {
    marginTop: 20,
    width: 100,
   borderRadius:10,
   shadowRadius:20,
 backgroundColor:'#93d8dd',

   
  },
  form: {
   marginTop:70,
    marginBottom:10,
    
  },
  log:{
marginLeft:10,
textAlign:'center',
color:'black',
  },
  img:{
height:'50%',
width:'100%',
borderBottomRightRadius:100,
//borderTopLeftRadius:100,

  },
 cont:{
  flex: 1,
      },

});
