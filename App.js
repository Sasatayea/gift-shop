import { onAuthStateChanged } from "firebase/auth";
import CitiesList from "./Components/Cities/CitiesList";
import EditCity from "./Components/Cities/EditCity";
// import Login from "./Components/Users/Login";
import { auth } from "./db/Config";
import { useState, useEffect} from "react";
import { StyleSheet, Text, View, TextInput, Button } from "react-native";
import Login from "./Components/Users/Login";
import Register from "./Components/Users/Register";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();
// import Cities from "./Components/Cities/Cities";
// import GuessMyNumber from "./Components/GuessMyNumber";
import fpage from './Components/Cities/fpage';

export default function App() {
  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (user) => setUser(user));

    return () => {
      unsub();
    };
  }, []);

  const [user, setUser] = useState(undefined);

      // user ? <CitiesList /> : <Register/>

      if(user){
            return (
            <NavigationContainer>
            <Stack.Navigator >
              <Stack.Screen name="hello in chat" component={CitiesList} />
              <Stack.Screen name="EditCity" component={EditCity} />

            </Stack.Navigator>
          </NavigationContainer>
              // <CitiesList /> 
              )
      }else{ 
        return(
          <NavigationContainer>
            <Stack.Navigator initialRouteName="fpage" >
              <Stack.Screen name="fpage" component={fpage} />
              <Stack.Screen name="Login" component={Login} />
              <Stack.Screen name="Register" component={Register} />
            </Stack.Navigator>
          </NavigationContainer>
            //<fpage />
        )}
      
}
const styles = StyleSheet.create({});