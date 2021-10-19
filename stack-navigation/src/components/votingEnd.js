import React from 'react';
import {
  View,
  SafeAreaView,
  Text,
  Image,
  BackHandler,
  ToastAndroid,
} from 'react-native';

class VotingEnd extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedCandidate: null,
    };
  }
  componentDidMount() {
    BackHandler.addEventListener('hardwareBackPress', this.handleBackButton);
  }

  componentWillUnmount() {
    BackHandler.removeEventListener('hardwareBackPress', this.handleBackButton);
  }

  handleBackButton() {
    ToastAndroid.show('Please Restart the App to Vote', ToastAndroid.SHORT);
    return true;
  }
  render() {
    return (
      <SafeAreaView style={{flex: 1, marginTop: 150}}>
        <View style={{height: 50, width: '80%', alignSelf: 'center'}}>
          <Text style={{fontSize: 26, alignSelf: 'center'}}>
            Your Vote has been counted.
          </Text>
          <Text style={{fontSize: 26, alignSelf: 'center'}}>Thank You!</Text>
          <Image
            source={require('../assets/smiley.png')}
            style={{
              height: 130,
              width: 120,
              marginVertical: 20,
              alignSelf: 'center',
            }}
          />
        </View>
      </SafeAreaView>
    );
  }
}

export default VotingEnd;
