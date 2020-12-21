import React, {useState, useEffect} from 'react'
import { View, SafeAreaView, TouchableOpacity, Text, Alert } from 'react-native'
import { AppHeader, AppLoader } from '../../components/index'
import { colors } from '../../utils'
import { styles } from "./styles"; 
import LottieView from 'lottie-react-native';
import animatedLoader from '../../assets/number.json';
import boyAnimated from '../../assets/start.json';


export default OnBoarding = (props) => {
    console.disableYellowBox = true; 

    const numberLoader = () => {
        return(
          <View style={styles.container}>
            <LottieView
              source={animatedLoader}
              autoPlay
              loop
              style={styles.loader}
            />
          </View>
        )
    }

    const boyLoader = () => {
        return(
          <View style={styles.container2}>
            <LottieView
              source={boyAnimated}
              autoPlay
              loop
              style={styles.loader2}
            />
          </View>
        )
    }

    return (
        <View style={styles.mainView}>
            {boyLoader()}
            <SafeAreaView backgroundColor={colors.darkBlue} opacity={0.95}/>
            <View style={styles.scoreAndHeading}>
                <Text style={styles.headingText}>Digitaly</Text>
                <Text style={styles.subHeading}>Just memorize the number that is presented you and get point if correct number is entered</Text>
                <TouchableOpacity style={styles.buttonView} onPress={() => props.navigation.navigate('Level1')}>
                    <Text style={styles.buttonText}>Let's Start</Text>
                </TouchableOpacity>
            </View>
            
        </View>
    )
}