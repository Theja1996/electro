import React, { useEffect, useState } from 'react';
import {
  Container,
  Content,
  Button,
  Text,
  Row,
  Icon,
  Grid,
  Footer,
  FooterTab,
  Badge,
} from 'native-base';
import { StyleSheet } from 'react-native';
import database from '@react-native-firebase/database';

const Welcome = () => {

  const [usage, setUsage] = useState(0);
  const [amount, setAmount] = useState(0);


  useEffect(() => {
    database()
      .ref('/theja/november')
      .once('value')
      .then(snapshot => {
        let amt=snapshot.val().amount
        console.log("initial amount",amt)
        setAmount(amt)
      });
    const onValueChange = database()
      .ref('/theja/november')
      .on('value', snapshot => {
        let amt=snapshot.val().amount
        console.log("new amount",amt)
        setAmount(amt)
      });


    // Stop listening for updates when no longer required
    return () =>
      database().ref('/theja/november').off('child_changed', onValueChange);
  }, []);



  useEffect(() => {

    database()
      .ref("/data/theja/november")
      .once('value')
      .then(snapshot => {
        let usg=snapshot.val().usage
        console.log("initial usage",usg)
        setUsage(usg)
      });
    const onValueChange = database()
      .ref("/data/theja/november")
      .on('value', snapshot => {
        let usg=snapshot.val().usage
        console.log("new usage",usg)
        setUsage(usg)
      });


    // Stop listening for updates when no longer required
    return () =>
      database()
        .ref("/data/theja/november")
        .off('child_changed', onValueChange);
  }, []);
  return (
    <Container>
      <Content>
        <Grid>
          <Row style={{ justifyContent: 'center', marginTop: 300 }} >
            <Badge style={{ height: 100, width: 200 }}>
              <Text style={{ fontSize: 20 }}>{usage}</Text>
            </Badge>
          </Row>
          <Row style={{ justifyContent: 'center', marginTop: 10 }} >
            <Badge style={{ height: 100, width: 200 }}>
              <Text style={{ fontSize: 20 }}>{amount + 'LKR'}</Text>
            </Badge>
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