import React from 'react';
import {Container,ButtonText} from './styles';
import PropTypes from 'prop-types'
const Button = ({children,...rest}) => {
    console.log(rest)
    return <Container {...rest}><ButtonText>{children}</ButtonText></Container>
}
Button.PropTypes = {
    onPress: PropTypes.func.isRequired
}
export default Button