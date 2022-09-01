import { View, Text } from 'react-native'
import React, { useState } from 'react'
import styles from './Login.styles'
import Input from '../../../components/Input/Input'
import Button from '../../../components/Button/Button'
import { Formik } from 'formik'
import auth from '@react-native-firebase/auth'
import Toast from 'react-native-toast-message';
import authErrorMessageParser from '../../../utils/authErrorMessageParser'
import IonIcon from 'react-native-vector-icons/Ionicons'

const Login = ({navigation}) => {

  const [loading, setLoading] = useState(false)

  const handleSignUp=()=>{
    navigation.navigate('SignPage')
  }

  async function handleFormSubmit(formValues){
    try {
      setLoading(true);
      await auth().signInWithEmailAndPassword(formValues.userMail, formValues.password);
      setLoading(false);
      navigation.navigate('MessagesPage')
    } catch (err) {
      Toast.show({
        type: 'error',
        text1: 'Bana Ne?',
        text2: authErrorMessageParser(err.code),
        visibilityTime:1000
      });
      console.log(err.code,'***********')
      setLoading(false)
    }
  }

  const initialFormValues={
    userMail:'',
    password:'',
  }

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Bana Ne ?</Text>
      <Formik initialValues={initialFormValues} onSubmit={handleFormSubmit}>
        {({values, handleChange, handleSubmit})=>(
          <>
            <Input onType={handleChange('userMail')} value={values.userMail} placeholder={'E-mail Adresini Giriniz'}></Input>
            <Input isSecure={true} onType={handleChange('password')} value={values.password} placeholder={'Şifrenizi Giriniz'}></Input>
            <Button text={'Giriş Yap'} onPress={handleSubmit} loading={loading}></Button>
        </>
        )}
        
      </Formik>
      <Button text={'Kayıt Ol'} theme={'secondary'} onPress={handleSignUp} ></Button>

    </View>
  )
}

export default Login