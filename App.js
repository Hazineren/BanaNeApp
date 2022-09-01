import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import Login from './src/pages/auth/Login/Login'
import Sign from './src/pages/auth/Sign/Sign'
import Toast from 'react-native-toast-message';
import Messages from './src/pages/Messages/Messages'
import auth from '@react-native-firebase/auth'
import IonIcon from 'react-native-vector-icons/Ionicons'

const Stack = createStackNavigator();

export default () => {

  const [userSession, setUserSession]=React.useState();

  React.useEffect(()=>{
    auth().onAuthStateChanged(user=>{
      setUserSession(!!user);
    })
  },[]);
  
  const AuthStack=()=>{
    return(
      <Stack.Navigator screenOptions={{headerShown:false}}>
        <Stack.Screen name='LoginPage' component={Login}></Stack.Screen>
        <Stack.Screen name='SignPage' component={Sign}></Stack.Screen>
      </Stack.Navigator>
    )
  }

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown:false}}>
        {!userSession ? (
          <Stack.Screen name='AuthStack' component={AuthStack}></Stack.Screen>
        ):(
          <Stack.Screen name='MessagesPage' component={Messages} options={{headerShown:true,headerTitleAlign:'center',headerStyle:{backgroundColor:'#aebfbe'},
          title:'Dertler',headerTintColor:'#00251a',headerRight:()=><IonIcon name="log-out-outline" size={30} color='#00251a' onPress={()=>auth().signOut()}></IonIcon>}}></Stack.Screen>
        )}
      </Stack.Navigator>
      <Toast />
    </NavigationContainer>
     
  )
}

