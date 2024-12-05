import { View, SafeAreaView, Text, Settings } from 'react-native';
import React from 'react';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { RequestsScreen } from './Requests';
import { FriendsScreen } from './Friends';
import { ProfileScreen } from './Profile';


export const  HomeScreen = (props)=> {
const Tab = createBottomTabNavigator()
    return (
        <Tab.Navigator>
            <Tab.Screen name='Requests' component={RequestsScreen}/>
            <Tab.Screen name='Friends' component={FriendsScreen}/>
            <Tab.Screen name='Profile' component={ProfileScreen}/>
        </Tab.Navigator>
        );
    };
