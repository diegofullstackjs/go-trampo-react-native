import React from 'react';
import {Container,Title} from './style'
import { ImageBackground,StyleSheet,Image } from 'react-native';
const bg = require('../../assets/drawable-xxxhdpi/bg.png') ;
import logo from '../../assets/logo.png'
import Input from '../../components/Input/Index'
import Button from '../../components/Button/Index'
const LoginPage = () => {
    
    return(
        <ImageBackground source={bg} style={styles.backgroundImage}>
            <Image source={logo} width="248" height="100" style={styles.logo} />
            <Container>
                    <Title>Faça seu logon</Title>
                    <Input  name="email" icon="mail" type="email-address" secure={false} placeholder="E-mail"/>
                    <Input name="password" icon="lock" secure={true} placeholder="Sua senha" />
                    <Button onPress={() =>{}}>Entrar</Button>
                    <Button onPress={() =>{}}  color="#fdcb6e">Cadastrar</Button>
            </Container>
        </ImageBackground>
    )
}
let styles = StyleSheet.create({
    backgroundImage: {
    flex: 1,
    backgroundColor:'transparent',
    justifyContent: 'center',
    alignItems: 'center',
   },
   logo: {
       marginTop:20
   }
  });
export default LoginPage;