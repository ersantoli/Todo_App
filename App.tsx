import Home from './src/screens/home';
import { StatusBar } from 'react-native';
import { AppRoutes } from './src/Routes';

export default function App(){
  return(
    <>
       <StatusBar
        barStyle="dark-content"
        backgroundColor="transparent"
        />
       <Home />
    </>
 
  );
}

