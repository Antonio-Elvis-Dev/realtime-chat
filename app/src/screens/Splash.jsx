import { useEffect, useLayoutEffect } from 'react';
import {StatusBar, SafeAreaView, View, Text, Animated} from 'react-native';

import React from 'react';
import { Title } from '../common/Title';

export const SplashScreen = ({navigation}) => {

  useLayoutEffect(()=>{
    navigation.setOptions({
      headerShown:false
    })
  },[])




  const translateY = new Animated.Value(0)
  const duration = 800
// TODO: hora 01:03
  useEffect(()=>{

    Animated.loop(

      Animated.sequence([
        
        Animated.timing(translateY,
          {
            toValue:20,
            duration:duration,
            useNativeDriver:true
          }
        ),
        Animated.timing(translateY,
          {
            toValue:0,
            duration:duration,
            useNativeDriver:true
          } )
        ])).start()
    
        
  },[])

  return (
    <SafeAreaView
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'black',
      }}>
      <StatusBar barStyle="light-content" />
      <Animated.View style={{
        transform:[{translateY}]
      }}>
      <Title text='RealtimeChat' color='white'/>
      </Animated.View>
    </SafeAreaView>
  );
};
