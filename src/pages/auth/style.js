import styled from 'styled-components/native'
const Container = styled.View`
    flex:1;
    width:100%;
    align-items:center;
    justify-content:center;
    padding: 0 30px;
`;
const Logo = styled.View`
    margin-top:10px;
`;
const Title = styled.Text`
    font-size: 40;
    color: white;
    font-family: "RobotoSlab-Medium";
    margin: 40px 0 24px;
`;
const Input = styled.TextInput`
    border-bottom: 2;
    width: 90%;
    height:40px;
`;
export {
    Container,
    Title,
    Input
}