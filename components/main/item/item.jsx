import {View} from "react-native";
import React from "react";
import {Avatar, Description, Item, ItemDate, UserName} from "./item.styles";
import {GreyText} from "../../../styles";

const UserItem = (props) => {
    const {description,avatar,username,time,active} = props.data
    return <Item onPress={() => props.navigate('Patient')}>
        <Avatar source={{uri : avatar}}/>
        <View>
            <UserName>{username}</UserName>
            <GreyText>{description}</GreyText>
        </View>
        <ItemDate active={active}>{time}</ItemDate>
    </Item>
}


export default UserItem