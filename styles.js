import styled from "styled-components/native";

export const Title = styled.Text`
  font-weight: 800;
  font-size: 22px;
  color: #000000;
  margin-top: 20px;
`
export const GreyText = styled.Text`
  font-size: 16px;
  line-height: 19px;
  color: #8B979F;
`
export const Container = styled.View`
  margin: 0 auto;
  width: 90%;
  height: 100%;
`
export const Bold = styled.Text`
  font-weight: bold;
`
export const Badge = styled.Text`
  background: ${props => props.active ? '#2A86FF' : 'rgba(132,210,105,0.21)'};
  color: ${props => props.active ? '#FFFFFF' : '#61bb42'};
  border-radius: 18px;
  font-size: 14px;
  font-weight: 600;
  width: ${props => props.width};
  height: ${props => props.height};
  text-align: center;
  line-height: 28px;
  margin-top: 15px;
`
export const Flex = styled.View`
  display: flex;
  flex-direction: row;

`
export const Input = styled.TextInput`
  width: 100%;
  height: 41px;
  background: white;
  border-bottom-color: ${props => props.error ? '#e3504b' : 'rgba(240, 240, 240, 1)'};
  border-bottom-width: 2px;
  font-size: 18px;
  margin-bottom: 15px;
`
export const App = styled.View`
background: white;
width: 100%;
height: 100%;
`
export const Button = styled.TouchableOpacity`
  border-radius: 30px;
  background: #2a86ff;
  background: ${props => props.color};
  text-align: center;
  justify-content: center;
  width: ${props => props.width};
  height: ${props => props.height};
  margin-left:${props => props.ml ? props.ml : null};
  margin-top: 30px;
`
export const WhiteText = styled.Text`
  color: white;
  font-size: 16px;
  margin: 0 auto;
  text-align: center;
`
export const Error = styled.Text`
  font-size: 20px;
  color : #e3504b;
  margin: 0 auto;
  margin-top: 20px;
  text-align: center;
`
// rgba(132,210,105,0.21)
// #61bb42