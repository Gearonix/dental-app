import styled from "styled-components/native/dist/styled-components.native.esm";

export const Item = styled.TouchableOpacity`
  padding: 20px;
  flex-direction: row;
  align-items: center;
  border-bottom-width: 1px;
  border-bottom-color: #F3F3F3;
`
export const Avatar = styled.Image`
  border-radius: 50px;
  width: 40px;
  height: 40px;
  margin-right: 20px;
`
export const UserName = styled.Text`
  font-weight: 600;
  font-size: 16px;
  color: #000000;
`

export const ItemDate = styled.Text`
  background: ${props => props.active ? '#2A86FF' : '#E9F5FF'};
  color: ${props => props.active ? '#FFFFFF' : '#4294FF'};
  border-radius: 18px;
  font-size: 14px;
  font-weight: 600;
  width: 70px;
  height: 32px;
  text-align: center;
  line-height: 28px;
  position: absolute;
  right: 0;
`
