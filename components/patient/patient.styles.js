import styled from 'styled-components/native'

export const Button = styled.TouchableOpacity`
  border-radius: 30px;
  background: #2a86ff;
  background: ${props => props.color};
  text-align: center;
  justify-content: center;
  width: ${props => props.width};
  height: ${props => props.height};
  margin-left:${props => props.ml ? props.ml : '0px'};
`
export const WhiteText = styled.Text`
  color: white;
  font-size: 16px;
  margin: 0 auto;
  text-align: center;
`
export const ButtonsBlock = styled.View`
  display: flex;
  flex-direction: row;
  margin-top: 30px;
  margin-bottom: 40px;
`

export const Tricks = styled.View`
  background: rgb(242, 240, 240);
`