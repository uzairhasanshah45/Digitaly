import React, {useState, useEffect} from 'react'
import { View, SafeAreaView, TouchableOpacity, Text, Alert } from 'react-native'
import { AppHeader, AppLoader } from '../../components/index'
import { colors } from '../../utils'
import { styles } from "./styles"; 
import LottieView from 'lottie-react-native';
import medalAnimated from '../../assets/sad.json';


export default Fail = (props) => {
    console.disableYellowBox = true; 

    const medalLoader = () => {
        return(
          <View style={styles.container}>
            <LottieView
              source={medalAnimated}
              autoPlay
              loop
              style={styles.loader}
            />
          </View>
        )
    }

    return (
        <View style={styles.mainView}>
            
            <SafeAreaView backgroundColor={colors.darkBlue} opacity={0.95}/>
            <View style={styles.scoreAndHeading}>
                <Text style={styles.headingText}>Unlucky!</Text>
                <Text style={styles.subHeading}>You couldn't clear level {props.route.params.level}. Would you like to try again?</Text>
                <TouchableOpacity style={styles.buttonView} onPress={() => {
                  if (props.route.params.level == 1) {
                    props.navigation.navigate('Level1')
                  } else if (props.route.params.level == 2) {
                    props.navigation.navigate('Level11')
                  } else {
                    props.navigation.navigate('Level21')
                  }

                }}>
                    <Text style={styles.buttonText}>Try Again</Text>
                </TouchableOpacity>
                {medalLoader()}
            </View>
            
        </View>
    )
}