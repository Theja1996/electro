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
import {SafeAreaView, StyleSheet, ScrollView, StatusBar} from 'react-native';
import auth from '@react-native-firebase/auth';

const Login = ({ navigation }) => {
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
    <Container>
      <Header>
        <Left>
          <Button transparent>
            <Icon name="arrow-back" />
          </Button>
        </Left>
        <Body>
          <Title>Login</Title>
        </Body>
        <Right>
          <Button transparent>
            <Icon name="search" />
          </Button>
          <Button transparent>
            <Icon name="heart" />
          </Button>
          <Button transparent>
            <Icon type="Fontisto" name="more-v" />
          </Button>
        </Right>
      </Header>
      <Content>
        <Form>
          <Item stackedLabel>
            <Label>Username</Label>
            <Input onChangeText={(value) => setUserName(value)} />
          </Item>
          <Item stackedLabel last>
            <Label>Password</Label>
            <Input secureTextEntry={true} onChangeText={(value) => setPassword(value)} />
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
