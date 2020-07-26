import React, {Component, useState} from 'react';
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
} from 'native-base';
import {SafeAreaView, StyleSheet, ScrollView, StatusBar} from 'react-native';
import auth from '@react-native-firebase/auth';

const Login = (props) => {
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    auth()
      .createUserWithEmailAndPassword(userName, password)
      .then(() => {
        console.log('User account created & signed in!');
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
    <Container>
      <Header />
      <Content>
        <Form>
          <Item fixedLabel>
            <Label>Username</Label>
            <Input onChangeText={(value) => setUserName(value)} />
          </Item>
          <Item fixedLabel last>
            <Label>Password</Label>
            <Input onChangeText={(value) => setPassword(value)} />
          </Item>
          <Row style={{justifyContent: 'center'}}>
            <Button style={styles.loginButton} onPress={handleLogin}>
              <Text>Login</Text>
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
  },
});
