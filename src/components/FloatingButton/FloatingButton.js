import { View, Text } from 'react-native'
import React from 'react'
import styles from './FloatinButton.styles'
import IonIcon from 'react-native-vector-icons/Ionicons'
import { TouchableOpacity } from 'react-native-gesture-handler'

const FloatingButton = ({onPress,icon}) => {
  return (
    <>
    <View style={styles.container}>
        <TouchableOpacity  onPress={onPress}>
            <IonIcon name={icon} color='white' size={30}></IonIcon>
        </TouchableOpacity>
    </View>
    </>
    
    
  )
}

export default FloatingButton