import React, {useState, useEffect} from 'react'
import { View, SafeAreaView, TouchableOpacity, Text, Alert } from 'react-native'
import { AppHeader, AppLoader } from '../../components/index'
import { colors } from '../../utils'
import { styles } from "./styles"; 
import LottieView from 'lottie-react-native';
import medalAnimated from '../../assets/medal.json';


export default OnBoarding = (props) => {
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
                <Text style={styles.headingText}>Congratulations!</Text>
                <Text style={styles.subHeading}>{
                  props.route.params.level == 3 ? 
                  `You have a strong memorization skill and you have successfully cleared Milestone ${props.route.params.level}.\nYou have scored ${props.route.params.score} out of 10.\nDo you want to play to play again?` : 
                  `You have a strong memorization skill and you have successfully cleared Milestone ${props.route.params.level}.\nYou have scored ${props.route.params.score} out of 10.\nDo you want to play next level?`
                }
                </Text>
                {medalLoader()}

                {
                  props.route.params.level == 3 ? null :
                  <TouchableOpacity style={styles.buttonView} onPress={() => {
                    if(props.route.params.level == 1) {
                      props.navigation.navigate('Level11', {
                        question: props.route.params.question
                      })
                    } else {
                      props.navigation.navigate('Level21', {
                        question: props.route.params.question
                      })
                      
                    }
                  }}>

                    <Text style={styles.buttonText}>Next Level</Text>
                  </TouchableOpacity>
                }
                <TouchableOpacity style={styles.buttonView} onPress={() => {
                  if(props.route.params.level == 1) {
                    props.navigation.navigate('Level1')
                  } else if(props.route.params.level == 2) {
                    props.navigation.navigate('Level11')
                  } else {
                    props.navigation.navigate('Level1')
                  }
                }}>
                  <Text style={styles.buttonText}>{props.route.params.level == 3 ? 'Play Again' : 'Retry'}</Text>
                </TouchableOpacity>
                {/* {medalLoader()} */}
            </View>
            
        </View>
    )
}