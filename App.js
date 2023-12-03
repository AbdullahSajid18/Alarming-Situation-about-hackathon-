
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SignupPage from './pages/Signup';
import LoginPage from './pages/Login';


const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
    <Stack.Navigator >
      <Stack.Screen name="Signup" component={SignupPage} />
      <Stack.Screen name="Login" component={LoginPage} />
    </Stack.Navigator>
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
