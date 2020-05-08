import React from 'react';
import PropTypes from 'prop-types'
import {Container,TextInput} from './styles'
import Icon from 'react-native-vector-icons/MaterialIcons'
const Input = ({name,icon,type,secure,placeholder,...rest}) => {
    console.log(rest)
    return (
         <Container {...rest}>
             <Icon name={icon} size={20} color="#fff" />
             <TextInput 
             placeholder={placeholder} 
             secureTextEntry={secure}
             keyboardType={type}
             placeholderTextColor="#fff"
              />
         </Container>
    );
}
Input.PropTypes = {
    icon: PropTypes.string,
    name: PropTypes.string,
    secure: PropTypes.bool.isRequired
}
export default Input;