import {Text,FlatList} from 'react-native';
import React from 'react';
import {GreyText, Title} from "../../styles";
import {Container} from "./../../styles";
import {AntDesign, Entypo} from '@expo/vector-icons';
import {Button, ButtonsBlock, Tricks, WhiteText} from "./patient.styles";
import TrickItem from "./TrickItem/TrickItem";
import {useSelector} from "react-redux";
import {Plus} from "../main/main.styles";

const Patient = (props) => {
    const data = useSelector((state) => state.main.current);
    console.log(data)
    const {fullname,phone,appointment} = data
    return (
        <Container>
            <Title>{fullname}</Title>
            <GreyText>{phone}</GreyText>
            <ButtonsBlock>
                <Button color={'#2a86ff'} width={209} height={45}><WhiteText>Teeth formula</WhiteText></Button>
                <Button color={'#84d269'} width={45} height={45} ml={10}>
                    <WhiteText><Entypo name="phone" size={24} color="white"/></WhiteText></Button>
            </ButtonsBlock>
            <Tricks>
                {/*<Item></Item>*/}
                {/*<TrickItem/>*/}
                <FlatList
                    data={appointment}
                    renderItem={(item) => <TrickItem data={item} />}
                    keyExtractor={(item) => item.id}
                />
            </Tricks>
            <Plus onPress={() => props.navigation.navigate('addPatient',{MODE: 'TRICK_ADD'})}>
                <AntDesign name="plus" size={30} color="white" /></Plus>
        </Container>
    )

}

export default Patient