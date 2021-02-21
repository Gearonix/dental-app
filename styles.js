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
// rgba(132,210,105,0.21)
// #61bb42