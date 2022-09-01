import { View, Text } from 'react-native'
import React,{useState} from 'react'
import styles from './Sign.styles'
import { Formik } from 'formik'
import auth from '@react-native-firebase/auth'
import authErrorMessageParser from '../../../utils/authErrorMessageParser'
import Toast from 'react-native-toast-message';
import Input from '../../../components/Input/Input'
import Button from '../../../components/Button/Button'

const initialFormValue={
  userMail:'',
  password:'',
  repassword:''
}
const Sign = ({navigation}) => {

  const [loading, setLoading] = useState(false)

  const handleLogin=()=>{
    navigation.goBack();
  }

  async function handleFormSubmit(formValues){
    if(formValues.password !== formValues.repassword){
      Toast.show({
        type: 'info',
        text1: 'Bana Ne?',
        text2: 'Girilen Şifreler Uyuşmuyor.',
        visibilityTime:2000
      });
      return;
    }
    try {
      setLoading(true)
      await auth().createUserWithEmailAndPassword(formValues.userMail,formValues.repassword)
      Toast.show({
        type: 'success',
        text1: 'Bana Ne?',
        text2: 'Kullanıcı Oluşturuld !',
        visibilityTime:2000
      });
      navigation.navigate('LoginPage')
      setLoading(false)
    } catch (err) {
      Toast.show({
        type: 'error',
        text1: 'Bana Ne?',
        text2: authErrorMessageParser(err.code),
        visibilityTime:1000
      });
      setLoading(false)
    }
}

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Bana Ne ?</Text>
      <Formik initialValues={initialFormValue} onSubmit={handleFormSubmit}>
        {({values,handleChange,handleSubmit})=>(
          // Fragmentlerin olucağı bölüm anlaına gelir
          <>
            <Input value={values.userMail} onType={handleChange('userMail')} placeholder={'E-Mail Adresini Giriniz'}></Input>
            <Input isSecure={true} value={values.password} onType={handleChange('password')} placeholder={'Şifrenizi Giriniz'}></Input>
            <Input isSecure={true} value={values.repassword} onType={handleChange('repassword')} placeholder={'Şifrenizi Tekrar Giriniz'}></Input>
            <Button text={'Kayıt Ol'} onPress={handleSubmit} loading={loading}></Button>
        </>
        )}
        
      </Formik>
      
      <Button text={'Geri'} theme={'secondary'} onPress={handleLogin}></Button>

    </View>
  )
}

export default Sign