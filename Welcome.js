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
  Grid,
  Footer,
  FooterTab,
} from 'native-base';
import {SafeAreaView, StyleSheet, ScrollView, StatusBar} from 'react-native';
import auth from '@react-native-firebase/auth';

const Welcome = (props) => {
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
        <Grid>
          <Row>
            <Text>Welcome to Electro</Text>
          </Row>
        </Grid>
      </Content>
      <Footer>
        <FooterTab>
          <Button vertical>
            <Icon name="apps" />
            <Text>Apps</Text>
          </Button>
          <Button vertical>
            <Icon name="camera" />
            <Text>Camera</Text>
          </Button>
          <Button vertical active>
            <Icon active name="navigate" />
            <Text>Navigate</Text>
          </Button>
          <Button vertical>
            <Icon name="person" />
            <Text>Contact</Text>
          </Button>
        </FooterTab>
      </Footer>
    </Container>
  );
};
export default Welcome;

const styles = StyleSheet.create({
  loginButton: {
    marginTop: 20,
    width: 100,
  },
});
