import React from 'react';
import store from './src/services/rootReducer';
import {createStackNavigator} from '@react-navigation/stack';
import {Provider} from 'react-redux';
import HomePage from './src/components/homePage';
import VotingPage from './src/components/votingPage';
import VotingEnd from './src/components/votingEnd';
import {NavigationContainer} from '@react-navigation/native';

const Stack = createStackNavigator();

function myApp() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            options={{headerShown: false}}
            name="homepage"
            component={HomePage}
          />

          <Stack.Screen
            //options={{headerShown:false}}
            name="votingPage"
            component={VotingPage}
          />
          <Stack.Screen
            options={{headerShown: false}}
            name="votingEnd"
            component={VotingEnd}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

export default myApp;
