import styled from "styled-components/native";
export const ButtonsContainer = styled.View`
  align-items: center;
  background: transparent;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding-left: 15px;
  height: 100%;
`



export const Plus = styled.TouchableOpacity`
  position: absolute;
  align-items: center;
  justify-content: center;
  border-radius: 50px;
  width: 64px;
  height: 64px;
  background: #2A86FF;
  right: 15px;
  bottom: 25px;
  display: flex;
`

export const Rocket = styled.Image`
  width: 203px;
  height: 203px;
  margin: 0 auto;
  resizeMode: contain;
`
export const NoTitle = styled.Text`
color: #5E646C;
  text-align: center;
  margin-bottom: 36px;
  font-size: 32px;
  font-weight: normal;
  margin-top: 40px;
    
`

export const Block = styled.View``;
