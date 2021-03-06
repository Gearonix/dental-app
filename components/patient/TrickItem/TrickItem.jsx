import React from 'react';
import styled from 'styled-components/native'
import {Badge, Bold, Flex} from "../../../styles";
import {Button, WhiteText} from "../patient.styles";
import { FontAwesome } from '@expo/vector-icons';
const TrickItem = (props) => {
    const {price,date,dent_number,diagnos,_id} = props.data.item

    return (
        <Item>
            <Label><Text><FontAwesome name="gear" size={15} color="#C4c4c4" /> Teeth: <Bold>{dent_number}</Bold></Text></Label>
            <Label><Text><FontAwesome name="table" size={15} color="#C4c4c4" /> Diagnos: <Bold>{diagnos}</Bold></Text></Label>
            <FlexBlock>
            <Badge active width={'155px'} height={'37px'}>{date}</Badge>
            <Badge width={'70px'} height={'37px'}>{price} p</Badge>
            </FlexBlock>
        </Item>
    )
}
const FlexBlock = styled(Flex)`
  justify-content: space-around;
`

const Item = styled.View`
  shadow-color : rgba(0,0,0,1);
  shadow-radius: 3.5;
  padding: 20px;
  background: white;
`
const Label = styled.View``
const Text  = styled.Text`
  font-size: 16px;
`

export default TrickItem