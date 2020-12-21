import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import Fail from '../features/Fail/fail'
import Success from '../features/Success/success'
import Onboarding from '../features/onboarding/onboarding'

import Level1 from '../features/Level1/level1'
import Level2 from '../features/Level2/level2'
import Level3 from '../features/Level3/level3'
import Level4 from '../features/Level4/level4'
import Level5 from '../features/Level5/level5'
import Level6 from '../features/Level6/level6'
import Level7 from '../features/Level7/level7'
import Level8 from '../features/Level8/level8'
import Level9 from '../features/Level9/level9'
import Level10 from '../features/Level10/level10'

import Level11 from '../features/Level11/level11'
import Level12 from '../features/Level12/level12'
import Level13 from '../features/Level13/level13'
import Level14 from '../features/Level14/level14'
import Level15 from '../features/Level15/level15'
import Level16 from '../features/Level16/level16'
import Level17 from '../features/Level17/level17'
import Level18 from '../features/Level18/level18'
import Level19 from '../features/Level19/level19'
import Level20 from '../features/Level20/level20'

import Level21 from '../features/Level21/level21'
import Level22 from '../features/Level22/level22'
import Level23 from '../features/Level23/level23'
import Level24 from '../features/Level24/level24'
import Level25 from '../features/Level25/level25'
import Level26 from '../features/Level26/level26'
import Level27 from '../features/Level27/level27'
import Level28 from '../features/Level28/level28'
import Level29 from '../features/Level29/level29'
import Level30 from '../features/Level30/level30'


const Stack = createStackNavigator();

export default function StackNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator headerMode="none">
        


        <Stack.Screen name="Onboarding" component={Onboarding} resetOnBlur={true} options={{ gestureEnabled: false}} />
        <Stack.Screen name="Success" component={Success} resetOnBlur={true} options={{ gestureEnabled: false}} />
        <Stack.Screen name="Fail" component={Fail} resetOnBlur={true} options={{ gestureEnabled: false}} />

        <Stack.Screen name="Level1" component={Level1} resetOnBlur={true} options={{ gestureEnabled: false}} />
        <Stack.Screen name="Level2" component={Level2} resetOnBlur={true} options={{ gestureEnabled: false}} />
        <Stack.Screen name="Level3" component={Level3} resetOnBlur={true} options={{ gestureEnabled: false}} />
        <Stack.Screen name="Level4" component={Level4} resetOnBlur={true} options={{ gestureEnabled: false}} />
        <Stack.Screen name="Level5" component={Level5} resetOnBlur={true} options={{ gestureEnabled: false}} />
        <Stack.Screen name="Level6" component={Level6} resetOnBlur={true} options={{ gestureEnabled: false}} />
        <Stack.Screen name="Level7" component={Level7} resetOnBlur={true} options={{ gestureEnabled: false}} />
        <Stack.Screen name="Level8" component={Level8} resetOnBlur={true} options={{ gestureEnabled: false}} />
        <Stack.Screen name="Level9" component={Level9} resetOnBlur={true} options={{ gestureEnabled: false}} />
        <Stack.Screen name="Level10" component={Level10} resetOnBlur={true} options={{ gestureEnabled: false}} />

        <Stack.Screen name="Level11" component={Level11} resetOnBlur={true} options={{ gestureEnabled: false}} />
        <Stack.Screen name="Level12" component={Level12} resetOnBlur={true} options={{ gestureEnabled: false}} />
        <Stack.Screen name="Level13" component={Level13} resetOnBlur={true} options={{ gestureEnabled: false}} />
        <Stack.Screen name="Level14" component={Level14} resetOnBlur={true} options={{ gestureEnabled: false}} />
        <Stack.Screen name="Level15" component={Level15} resetOnBlur={true} options={{ gestureEnabled: false}} />
        <Stack.Screen name="Level16" component={Level16} resetOnBlur={true} options={{ gestureEnabled: false}} />
        <Stack.Screen name="Level17" component={Level17} resetOnBlur={true} options={{ gestureEnabled: false}} />
        <Stack.Screen name="Level18" component={Level18} resetOnBlur={true} options={{ gestureEnabled: false}} />
        <Stack.Screen name="Level19" component={Level19} resetOnBlur={true} options={{ gestureEnabled: false}} />
        <Stack.Screen name="Level20" component={Level20} resetOnBlur={true} options={{ gestureEnabled: false}} />

        <Stack.Screen name="Level21" component={Level21} resetOnBlur={true} options={{ gestureEnabled: false}} />
        <Stack.Screen name="Level22" component={Level22} resetOnBlur={true} options={{ gestureEnabled: false}} />
        <Stack.Screen name="Level23" component={Level23} resetOnBlur={true} options={{ gestureEnabled: false}} />
        <Stack.Screen name="Level24" component={Level24} resetOnBlur={true} options={{ gestureEnabled: false}} />
        <Stack.Screen name="Level25" component={Level25} resetOnBlur={true} options={{ gestureEnabled: false}} />
        <Stack.Screen name="Level26" component={Level26} resetOnBlur={true} options={{ gestureEnabled: false}} />
        <Stack.Screen name="Level27" component={Level27} resetOnBlur={true} options={{ gestureEnabled: false}} />
        <Stack.Screen name="Level28" component={Level28} resetOnBlur={true} options={{ gestureEnabled: false}} />
        <Stack.Screen name="Level29" component={Level29} resetOnBlur={true} options={{ gestureEnabled: false}} />
        <Stack.Screen name="Level30" component={Level30} resetOnBlur={true} options={{ gestureEnabled: false}} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}
