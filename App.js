import * as React from 'react';
import {StyleSheet } from 'react-native';
import { NavigationContainer,DefaultTheme } from '@react-navigation/native';
import MyDrawer from './Navigation/MyDrawer';

const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: 'rgb(250, 35, 25)',
  },
};
export default function App() {
  return (
    <>
      <NavigationContainer theme={MyTheme}>
        <MyDrawer  MyDrawer={MyDrawer}/>
      </NavigationContainer>
    </>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
})
