import { ScaledSheet } from 'react-native-size-matters';
import { colors } from '../../utils/index'


export const styles = ScaledSheet.create({
    mainView: {
        flex: 1,
        backgroundColor: colors.darkPink,
    },
    button: {
        height: '70@ms',
        width: '70@ms',
        backgroundColor: colors.lightPink,
        borderRadius: '10@ms',
        alignItems: 'center',
        justifyContent: 'center'
    },
    zeroButton: {
        height: '70@ms',
        width: '150@ms',
        backgroundColor: colors.lightPink,
        borderRadius: '10@ms',
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center',
        marginTop: '20@ms'
    },
    buttonText: {
        fontSize: '30@ms',
        // fontWeight: 'bold',
        color: colors.darkBlue
    },
    buttonRow: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: '20@ms'
    },
    scoreAndHeading: {
        flexDirection: 'row',
        marginHorizontal: '30@ms',
        justifyContent: 'space-between'
    },
    heading1: {
        fontWeight: 'bold',
        fontSize: '18@ms',
        marginTop: '20@ms',
        color: 'white'
    },
    heading2: {
        fontWeight: 'bold',
        fontSize: '18@ms',
        marginTop: '20@ms',
        textAlign: 'right',
        color: 'white'
    },
    difficulty1: {
        alignSelf: 'center',
        color: 'white'
    },
    inputView: {
        flexDirection: 'row',
        marginTop: '50@ms',
        alignSelf: 'center'
    },
    textInputView: {
        backgroundColor: colors.lightPink,
        borderRadius: '10@ms',
        height: '60@ms',
        width: '60@ms',
        marginRight: '5@ms',
        alignItems: 'center',
        justifyContent: 'center',
    },
    textNumber: {
        color: colors.darkBlue,
        fontSize: '20@ms'
    },
    inputView2: {
        flexDirection: 'row',
        alignSelf: 'center',
        marginTop: '20@ms',
    },
    lastButtonRow: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '90%',
        alignSelf: 'center'
    },
    memorizeNumber: {
        fontSize: '20@ms',
        fontWeight: 'bold',
        alignSelf: 'center',
        marginTop: '20@ms',
        color: 'white'
    }
});
