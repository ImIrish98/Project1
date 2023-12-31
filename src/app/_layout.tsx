import { Stack } from "expo-router";
import { useEffect } from 'react';

import { useFonts, Inter_900Black } from '@expo-google-fonts/inter';
import {Rubik_400Regular, Rubik_700Bold,} from '@expo-google-fonts/rubik';
import {Sevillana_400Regular,} from '@expo-google-fonts/sevillana'

import * as SplashScreen from 'expo-splash-screen';
/* -------------------------------------------------------------------------- */

SplashScreen.preventAutoHideAsync();

export default function RootLayout()
{
    const [fontsLoaded, fontError] = useFonts(
        {
            Inter: Inter_900Black,
            Rubik: Rubik_400Regular,
            //RubikBold: Rubik_700Bold,
            Sevillana: Sevillana_400Regular,
        });
      
        useEffect(() => 
        {
          if (fontsLoaded || fontError) 
          {
              SplashScreen.hideAsync();
          }
        }, [fontsLoaded, fontError])
        
        if (!fontsLoaded && !fontError) 
        {
          return null;
        }

    return(
        <Stack screenOptions={{}}>
            <Stack.Screen name='index' options={{title: 'Art Catalog'}}/>
            
        </Stack>
    );
}