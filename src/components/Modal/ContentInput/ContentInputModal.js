import React from "react";
import { Text, TextInput,TouchableOpacity, View } from 'react-native';
import Button from "../../Button/Button";
import styles from './ContentInputModal.styles';
import Modal from "react-native-modal";

const ContentInputModal=({visible,onClose,onSend})=>{
    const [text,setText] = React.useState(null)

    function handleSend(){
        if(!text){
            return;
        }
        onSend(text);
        setText(null)
    }
    return(
        <Modal swipeDirection='down'
         style={styles.modal} 
         isVisible={visible} 
         onSwipeComplete={onClose} 
         onBackdropPress={onClose} 
         onBackButtonPress={onClose}>
            <View style={styles.container}>
                <View style={styles.input_container}>
                    <TextInput placeholder="Darla Hadi Milleti.." multiline onChangeText={setText}/>
                </View>
                <View style={styles.btn}>
                    <TouchableOpacity onPress={handleSend}>
                        <Text style={styles.btnTxt}>Gönder</Text>
                    </TouchableOpacity>
                </View>
                
            </View>
        </Modal>
        
    )
} 

export default ContentInputModal