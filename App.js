import { NavigationContainer } from '@react-navigation/native';
import { StyleSheet, Text, View } from 'react-native';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
const Tabs = createBottomTabNavigator();

// import the two tab stacks
import PrizesStackScreen from './stacks/PrizesStackScreen';
import LaureatesStackScreen from './stacks/LaureatesStackScreen';


export default function App() {
  return (
    <NavigationContainer>
      <Tabs.Navigator screenOptions={{ headerShown: false }}>
        <Tabs.Screen name="Prizes" component={PrizesStackScreen} />
        <Tabs.Screen name="Laureates" component={LaureatesStackScreen} />
      </Tabs.Navigator>
    </NavigationContainer>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
