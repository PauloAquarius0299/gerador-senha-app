import {NavigationContainer} from '@react-navigation/native';
import { Routes } from '../router';

export default function App(){
  return(
    <NavigationContainer  independent={true}>
      <Routes />
    </NavigationContainer>
  )
}
