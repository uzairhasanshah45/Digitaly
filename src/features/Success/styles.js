import { ScaledSheet } from 'react-native-size-matters';
import { colors } from '../../utils/index'
import { Dimensions } from 'react-native'

const windowHeight = Dimensions.get('window').height - 730

export const styles = ScaledSheet.create({
    mainView: {
        flex: 1,
        backgroundColor: colors.darkPink,
    },
    headingText: {
        fontSize: '80@ms',
        marginHorizontal: '20@ms',
        fontWeight: 'bold',
        color: colors.lightPink,
        textAlign: 'center',
        marginTop: '40@ms'
    },
    subHeading: {
        fontSize: '16@ms',
        marginTop: '20@ms',
        marginHorizontal: '20@ms',
        color: colors.lightPink,
        textAlign: 'center',
    },
    container: {
        height: '250@ms',
        width: '100%',
        marginTop: '0@ms'
    },
    loader: {
        height: '100%',
        width: '100%',
        alignSelf: 'center'
    },
    buttonView: {
        height: '44@ms',
        width: '70%',
        borderRadius: '25@ms',
        marginTop: windowHeight,
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: colors.lightPink
    },
    buttonText: {
        color: colors.darkBlue,
        fontWeight: 'bold',
        fontSize: '16@ms'
    }
});
