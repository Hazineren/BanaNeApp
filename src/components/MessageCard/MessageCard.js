import { View, Text } from 'react-native'
import React from 'react'
import styles from './MessageCard.styles'

import { formatDistance,parseISO } from 'date-fns'
import {tr} from 'date-fns/locale'
import { TouchableOpacity } from 'react-native-gesture-handler'

const MessageCard = ({message,onPress}) => {

  const formattedDate = formatDistance(parseISO(message.date),new Date(),{
    addSuffix:true,
    locale:tr
  })

  return (
    <View style={styles.container}>
      <View style={styles.inner_container}>
        <Text style={styles.user}>{message.username}</Text>
        <Text style={styles.date}>{formattedDate}</Text>
      </View>
      <Text style={styles.txt}>{message.text}</Text>
      <View style={styles.btnBanane}>
        <TouchableOpacity style={{flexDirection:'row'}} onPress={onPress}>
          {!!message.dislike && (
            <View style={styles.dislike_count_container}>
              <Text style={styles.dislike_count_text}>{message.dislike}</Text>
            </View>
          )}
          <Text style={styles.btnTxt}>bana ne?</Text>
        </TouchableOpacity>
      </View>
      
    </View>
  )
}

export default MessageCard