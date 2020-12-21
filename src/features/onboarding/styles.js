import { ScaledSheet } from 'react-native-size-matters';
import { colors } from '../../utils/index'
import { Dimensions } from 'react-native'

const windowHeight = Dimensions.get('window').height - 100

export const styles = ScaledSheet.create({
    mainView: {
        flex: 1,
        backgroundColor: '#8a2846',
    },
    headingText: {
        fontSize: '100@ms',
        fontWeight: 'bold',
        color: '#ffc2d4',
        textAlign: 'center',
    },
    subHeading: {
        fontSize: '16@ms',
        marginTop: '20@ms',
        marginHorizontal: '20@ms',
        color: '#ffc2d4',
        textAlign: 'center',
    },
    // container: {
    //     height: '200@ms',
    //     width: '300@ms'
    // },
    // loader: {
    //     height: '100%',
    //     width: '100%'
    // },
    container2: {
        height: '300@ms',
        width: '100%',
        position: 'absolute',
        alignItems: 'center',
        marginLeft: '30@ms',
        top: '250@ms',
        left: '-30@ms'
    },
    loader2: {
        height: '100%',
        width: '100%',
    },
    buttonView: {
        height: '44@ms',
        width: '70%',
        borderRadius: '25@ms',
        // marginTop: '30@ms',
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#ffc2d4',
        position: 'absolute',
        top: windowHeight
    },
    buttonText: {
        color: colors.darkBlue,
        fontWeight: 'bold',
        fontSize: '16@ms'
    }
});
