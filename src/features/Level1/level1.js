import React, {useState, useEffect} from 'react'
import { View, SafeAreaView, TouchableOpacity, Text, Button } from 'react-native'
import { AppHeader, AppLoader } from '../../components/index'
import { colors } from '../../utils'
import { styles } from "./styles"; 


export default Level1 = (props) => {
    console.disableYellowBox = true; 

    const [answer, setAnswer] = useState(null)
    const [loading, setLoading] = useState(true)
    const [question] = useState(95363)
    const [score, setScore] = useState(0)

    React.useEffect(() => {
        const unsubscribe = props.navigation.addListener('focus', () => {
            setAnswer(null)
            setLoading(true)
            setScore(0)
        });
    
        return unsubscribe;
    }, [props.navigation]);

    useEffect(() => {
        setTimeout(function(){
            setLoading(false)
        }, 1200);
    });

    const addNumber = (number) => {
        if(answer != null) {
            const newAnswer = `${answer}${number}`
            setAnswer(newAnswer)
        } else {
            setAnswer(number)
        }

        if( answer != null && answer.length > 3) {
            const nextProblem = generateRandomNumber()
            if(question == `${answer}${number}`) {
               props.navigation.navigate('Level2', { 
                   question: nextProblem,
                   score: 1
               })
            } else {
                props.navigation.navigate('Level2', { 
                    question: nextProblem,
                    score: 0
                })
            }
        }
    }

    const deleteNumber = () => {
        setAnswer(answer.toString().slice(0, -1))
    }

    const generateRandomNumber = () => {
        var array = [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9 ];
        var number

        for(let i=0 ; i < 5; i++) {
            const value = Math.floor(Math.random() * array.length)
            number == undefined ? number = value : number = `${number}${value}`
        }

        return number
    }

    const renderNumbers = () => {
        return (
            <View style={{position: 'absolute', bottom: 30, width: '100%'}}>
                
                <View style={styles.buttonRow}>
                    <TouchableOpacity activeOpacity={0.7} style={styles.button} onPress= {() => addNumber(1)}>
                        <Text style={styles.buttonText}>1</Text>
                    </TouchableOpacity>
                    <TouchableOpacity activeOpacity={0.7} style={styles.button} onPress= {() => addNumber(2)}>
                        <Text style={styles.buttonText}>2</Text>
                    </TouchableOpacity>
                    <TouchableOpacity activeOpacity={0.7} style={styles.button} onPress= {() => addNumber(3)}>
                        <Text style={styles.buttonText}>3</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.buttonRow}>
                    <TouchableOpacity activeOpacity={0.7} style={styles.button} onPress= {() => addNumber(4)}>
                        <Text style={styles.buttonText}>4</Text>
                    </TouchableOpacity>
                    <TouchableOpacity activeOpacity={0.7} style={styles.button} onPress= {() => addNumber(5)}>
                        <Text style={styles.buttonText}>5</Text>
                    </TouchableOpacity>
                    <TouchableOpacity activeOpacity={0.7} style={styles.button} onPress= {() => addNumber(6)}>
                        <Text style={styles.buttonText}>6</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.buttonRow}>
                    <TouchableOpacity activeOpacity={0.7} style={styles.button} onPress= {() => addNumber(7)}>
                        <Text style={styles.buttonText}>7</Text>
                    </TouchableOpacity>
                    <TouchableOpacity activeOpacity={0.7} style={styles.button} onPress= {() => addNumber(8)}>
                        <Text style={styles.buttonText}>8</Text>
                    </TouchableOpacity>
                    <TouchableOpacity activeOpacity={0.7} style={styles.button} onPress= {() => addNumber(9)}>
                        <Text style={styles.buttonText}>9</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.lastButtonRow}>
                    <TouchableOpacity activeOpacity={0.7} style={styles.zeroButton} onPress= {() => addNumber(0)}>
                        <Text style={styles.buttonText}>0</Text>
                    </TouchableOpacity>
                    <TouchableOpacity activeOpacity={0.7} onPress= {() => deleteNumber(0)} style={[styles.zeroButton, {backgroundColor: '#ffe0e9'}]}>
                        <Text style={styles.buttonText}>C</Text>
                    </TouchableOpacity>
                </View>

            </View>
        )

    }

    const memorizeDeck = () => {
        return(
            <View>
                <AppLoader />
                <View style={styles.inputView}>
                    <View style={styles.textInputView}>
                        <Text style={styles.textNumber}>{ question.toString()[0] }</Text>
                    </View>
                    <View style={styles.textInputView}>
                        <Text style={styles.textNumber}>{ question.toString()[1] }</Text>  
                    </View>
                    <View style={styles.textInputView}>
                        <Text style={styles.textNumber}>{ question.toString()[2] }</Text>  
                    </View>
                    <View style={styles.textInputView}>
                        <Text style={styles.textNumber}>{ question.toString()[3] }</Text>  
                    </View>
                    <View style={styles.textInputView}>
                        <Text style={styles.textNumber}>{ question.toString()[4] }</Text>  
                    </View>
                </View>

                <Text style={styles.memorizeNumber}>Let's memorize this number</Text>
            </View>
        )
    }

    const renderAnswerDeck = () => {
        return(
            <View style={styles.inputView}>
                <View style={styles.textInputView}>
                    <Text style={styles.textNumber}>{ answer == null ? '' : answer.toString()[0] }</Text>
                </View>
                <View style={styles.textInputView}>
                    <Text style={styles.textNumber}>{ answer == null ? '' : answer.toString()[1] }</Text>  
                </View>
                <View style={styles.textInputView}>
                    <Text style={styles.textNumber}>{ answer == null ? '' : answer.toString()[2] }</Text>  
                </View>
                <View style={styles.textInputView}>
                    <Text style={styles.textNumber}>{ answer == null ? '' : answer.toString()[3] }</Text>  
                </View>
                <View style={styles.textInputView}>
                    <Text style={styles.textNumber}>{ answer == null ? '' : answer.toString()[4] }</Text>  
                </View>
            </View>
        )
    }

    return (
        <View style={styles.mainView}>
            <SafeAreaView backgroundColor={colors.royalBlue} opacity={0.95}/>
            <AppHeader title="Digitaly"></AppHeader>
            <View style={styles.scoreAndHeading}>
                <View>
                    <Text style={styles.heading1}>Level 1</Text>
                    <Text style={styles.difficulty1}>Difficulty Level: Easy</Text>
                </View>
                <Text style={styles.heading2}>Score: {score}</Text>
            </View>
            { loading ? memorizeDeck() : renderAnswerDeck() }
            { !loading && renderNumbers()}
        </View>
    )
}