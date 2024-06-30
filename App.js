import { StatusBar, SafeAreaView, Text, Image } from 'react-native';

import {
  useFonts,
  Montserrat_400Regular,
  Montserrat_700Bold
} from '@expo-google-fonts/montserrat';


import Cesta from './src/telas/Cesta';
import mock from './src/mocks/cesta';

export default function App() {
  let [fontCarregada] = useFonts({
    'MontserratRegular': Montserrat_400Regular,
    'MontserratBold': Montserrat_700Bold,

  })

  if (!fontCarregada) {
    return (
      <SafeAreaView style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Image source={'./assets/splash.png'} style={{flex:1,}}/>
      </SafeAreaView>
    );
  }
  return (
    <SafeAreaView style={{ flex: 1 }} >
      <StatusBar />
      <Cesta {...mock} />
    </SafeAreaView>
  );
}


