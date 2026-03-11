
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

import Home from '../screens/Home';
import Edit from '../screens/Edit';
function Navigation () {
  return (
     <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Inicio" component={Home} />
        <Stack.Screen name="Editar" component={Edit} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Navigation