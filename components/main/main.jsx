import React from "react";
import UserItem from "./item/item";
import {SectionList} from "react-native";
import { Plus} from "./main.styles";
import { AntDesign } from '@expo/vector-icons';
import {Container, Title} from './../../styles'
const IMAGE_URL = 'https://miro.medium.com/max/1200/1*mk1-6aYaf_Bes1E3Imhc0A.jpeg';

const Main = (props) => {
    console.log(props.navigation)
    return <Container>
        <SectionList
            sections={DATA}
            keyExtractor={(item, index) => index}
            renderItem={({ item }) => <UserItem data={item} navigate={props.navigation.navigate}/>}
            renderSectionHeader={({ section: { title } }) => (<Title>{title}</Title>)}
        />
        <Plus><AntDesign name="plus" size={30} color="white" /></Plus>
    </Container>
}
const obj = [
    {
        avatar : IMAGE_URL,
        username : 'test',
        description : 'test_desc',
        time : '13:13',
        active : true
    },
    {
        avatar : IMAGE_URL,
        username : 'test2222',
        description : 'test222_desc',
        time : '53:13',
        active : false
    }
]
const DATA = [
    {
        title: "12 сентября",
        data: obj
    },
    {
        title: "14 сентября",
        data: obj
    }
];

export default Main