import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';
import SinhHoat from './screens/SinhHoat';

const Drawer = createDrawerNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Sinh Hoạt">
        <Drawer.Screen name="Sinh Hoạt" component={SinhHoat} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
