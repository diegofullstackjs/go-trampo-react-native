import styled from 'styled-components/native';
import {RectButton} from 'react-native-gesture-handler';
export const Container = styled(RectButton)`
    width: 90%;
background: ${props => props.color? props.color : '#0984E3'}; 
    border-radius: 12px;
    height:40px;
    justify-content:center;
    align-items:center;
    border: 1px solid #fff;
    margin-bottom: 10px;
`;

export const ButtonText = styled.Text`
    font-family: "RobotoSlab-Light";
    font-size:25px;
    color: white;
`;