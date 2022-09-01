import { View, Text, FlatList } from 'react-native'
import React from 'react'
import styles from './Messages.styles'
import FloatingButton from '../../components/FloatingButton'
import ContentInputModal from '../../components/Modal/ContentInput/ContentInputModal'
import database from '@react-native-firebase/database'
import auth from '@react-native-firebase/auth'
import parseContentData from '../../utils/parseContentData'
import MessageCard from '../../components/MessageCard/MessageCard'

const Messages = () => {
  const [inputModalVisible, setInputModalVisible] = React.useState(false);
  const [contentList, setContentList] = React.useState([]);

  React.useEffect(() => {
      database().ref('messages/').on('value',snapshot => {
        const contentData = snapshot.val();
        const parsedData = parseContentData(contentData || {});
        setContentList(parsedData);
      })
  }, [])
  

  function handleInputToggleModal(){
    setInputModalVisible(!inputModalVisible);
  }

  function handleSendContent(content){
    handleInputToggleModal();
    sendContent(content)
  }

  function sendContent(content){
    
    const usermail = auth().currentUser.email;
    
    const contentObject={
      text: content,
      username: usermail.split('@')[0],
      date: new Date().toISOString(),
      dislike:0,
    }

    database().ref('messages/').push(contentObject)
  }

  function handleBanane(item){
    database().ref(`messages/${item.id}/`).update({dislike: item.dislike+1})
  }

  const renderContent = ({item})=><MessageCard message={item} onPress={()=>handleBanane(item)}></MessageCard>
  const emptyComponent = <Text style={{marginVertical:400,justifyContent:'center',alignSelf:'center',alignItems:'center'}}>Liste Boş</Text>
  return (
    <View style={styles.container}>
      <FlatList data={contentList} renderItem={renderContent} ListEmptyComponent={emptyComponent}/>
      <FloatingButton icon={'add-outline'} onPress={handleInputToggleModal}></FloatingButton>
      <ContentInputModal
       visible={inputModalVisible}
       onClose={handleInputToggleModal} 
       onSend={handleSendContent}/>
    </View>
  )
}

export default Messages