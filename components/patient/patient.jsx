import {Text,FlatList} from 'react-native';
import React from 'react';
import {GreyText, Title} from "../../styles";
import {Container} from "./../../styles";
import {Entypo} from '@expo/vector-icons';
import {Button, ButtonsBlock, Tricks, WhiteText} from "./patient.styles";
import TrickItem from "./TrickItem/TrickItem";

const Patient = () => {
    return (
        <Container>
            <Title>username</Title>
            <GreyText>phone_number</GreyText>
            <ButtonsBlock>
                <Button color={'#2a86ff'} width={209} height={45}><WhiteText>Teeth formula</WhiteText></Button>
                <Button color={'#84d269'} width={45} height={45} ml={10}>
                    <WhiteText><Entypo name="phone" size={24} color="white"/></WhiteText></Button>
            </ButtonsBlock>
            <Tricks>
                {/*<Item></Item>*/}
                {/*<TrickItem/>*/}
                <FlatList
                    data={dataq}
                    renderItem={(item) => <TrickItem data={item} />}
                    keyExtractor={(item) => item.id}
                />
            </Tricks>
        </Container>
    )

}

const dataq = [
    {
        price : 1500,
        date : '11.10.2019 - 15:40',
        teeths : 12,
        diagnos : 'thumb athritis',
        id : 1
    },
    {
        price : 200,
        date : '12.10.2019 - 15:40',
        teeths : 115,
        diagnos : 'skin infection',
        id : 2
    }
];
export default Patient