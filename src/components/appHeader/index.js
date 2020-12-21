import React, { memo } from 'react';
import { View, Image, Text } from 'react-native';
import { Right, Left, Button, Body } from 'native-base';
import {Icon} from 'react-native-elements';

import { styles } from './styles';

const AppHeader = (props) => {
  return (
    <View style={styles.appHeader}>
      <Left>
        {props.leftIcon && (
          <Button transparent rounded onPress={props.onPressLeftIcon} style={styles.leftButton}>
            <Icon name="arrow-back" size={25} color={'#FFFFFF'}/>
            {/* <Image source={props.leftIcon} style={styles.icon} resizeMode="contain" /> */}
          </Button>
        )}
      </Left>

      <Body>
        {props.title && <Text style={styles.title}>{'Digitaly'}</Text>}
      </Body>
      
      <Right style={styles.rightView}>
        
      </Right>
    </View>
  );
};

export default memo(AppHeader);