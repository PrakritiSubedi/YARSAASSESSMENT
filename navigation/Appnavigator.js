// navigation/AppNavigator.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from '../screens/LoginScreen';
import DashboardScreen from '../screens/DashboardScreen';
import AdminDashboardScreen from '../screens/AdminDashboardScreen';
import QRScannerScreen from '../screens/QRScannerScreen';
import HotspotSetupScreen from '../screens/HotspotSetupScreen';
import WiFiScannerScreen from '../screens/WiFiScannerScreen';
import WarrantyClaimsScreen from '../screens/WarrantyClaimsScreen';
import SuccessScreen from '../screens/SuccessScreen';

const Stack = createNativeStackNavigator();

export default function Appnavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Dashboard" component={DashboardScreen} />
        <Stack.Screen name="AdminDashboard" component={AdminDashboardScreen} />
        <Stack.Screen name="QRScanner" component={QRScannerScreen} />
        <Stack.Screen name="HotspotSetup" component={HotspotSetupScreen} />
        <Stack.Screen name="WiFiScanner" component={WiFiScannerScreen} />
        <Stack.Screen name="WarrantyClaims" component={WarrantyClaimsScreen} />
        <Stack.Screen name="Success" component={SuccessScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
