import {View} from "react-native";
import React from "react";
import {Edit, Item, ItemDate, UserName} from "./item.styles";
import {GreyText} from "../../../styles";
import TextAvatar from 'react-native-text-avatar'
import { Ionicons,Entypo } from '@expo/vector-icons';
import {random, сutWord} from "../../../helpers";
import {useDispatch} from "react-redux";
import {getCurrentPatient} from "../../../reducers/main_reducer";
const UserItem = (props) => {
    const {fullname,appointment} = props.data
    const colors = [ '#4287f5', '#fc35e2', '#35fca9','#fcf535','#ff8b6e','#b74aff']
    const description = сutWord(appointment.map(item => item.diagnos).join(' ,'),20)
    const time = appointment.length>0 ? appointment[0].time : '/';
    const dispatch = useDispatch()
    const navigate = () => {
        dispatch(getCurrentPatient(props.data))
        props.navigate('Patient')
    }
    return <Item onPress={navigate}>
        <TextAvatar
            backgroundColor={colors[random(0,colors.length)]}
            textColor={'#FFFFFF'}
            size={40}
            type={'circle'} // optional
        >{fullname}</TextAvatar>
        <View>
            <UserName>{fullname}</UserName>
            <GreyText>{description}</GreyText>
        </View>
        <ItemDate active={false}>{time}</ItemDate>
    </Item>
}
export const EditButton = ({undo,navigate}) => {
    return (
        <Edit undo={undo} onPress={navigate}>
            {!undo ? <Entypo name="cross" size={30} color="white" /> :
                <Ionicons name="pencil-sharp" size={30} color="white" />
            }
        </Edit>
    )
}

export default UserItem