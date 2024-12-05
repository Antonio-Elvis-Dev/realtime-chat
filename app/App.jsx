import React, { useState } from 'react';

import { StatusBar } from 'react-native';

import { SplashScreen } from './src/screens/Splash';
import { SignInScreen } from './src/screens/SignIn';
import { SignUpScreen } from './src/screens/SignUp';
import { SearchScreen } from './src/screens/Search';
import { MessageScreen } from './src/screens/Message';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { HomeScreen } from './src/screens/Home';


const Stack = createNativeStackNavigator()


export const App = ()=>{

  const [initilized] = useState(true)

  return (
 
    <NavigationContainer>
      <StatusBar barStyle='dark-content' />
      
      <Stack.Navigator>
        <Stack.Screen name='Splash' component={SplashScreen}   />
        <Stack.Screen name='SigIn' component={SignInScreen}/>
        <Stack.Screen name='SignUp' component={SignUpScreen}/>
        <Stack.Screen name='Home' component={HomeScreen}/>
        <Stack.Screen name='Search' component={SearchScreen}/>
        <Stack.Screen name='Messages' component={MessageScreen}/>
      </Stack.Navigator>


    </NavigationContainer>

  );
};

