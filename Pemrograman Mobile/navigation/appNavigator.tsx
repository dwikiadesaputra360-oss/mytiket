import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import firstPage from '../screens/firstPage';
import login from '../screens/login';
import register from '../screens/register';
import menu from '../screens/menu';
import pesan from '../screens/pesan';
import edit from '../screens/edit';
import logout from '../screens/logout';

const Stack = createNativeStackNavigator();

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="HalamanAwal">
        <Stack.Screen name="firstPage" component={firstPage} />
        <Stack.Screen name="login" component={login} />
        <Stack.Screen name="register" component={register} />
        <Stack.Screen name="menu" component={menu} />
        <Stack.Screen name="pesan" component={pesan} />
        <Stack.Screen name="edit" component={edit} />
        <Stack.Screen name="logout" component={logout} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
