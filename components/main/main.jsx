import React,{useEffect} from "react";
import UserItem, {EditButton} from "./item/item";
import {ButtonsContainer, NoTitle, Plus, Rocket} from "./main.styles";
import { AntDesign } from '@expo/vector-icons';
import {Container} from './../../styles';
import { SwipeListView } from 'react-native-swipe-list-view';
import {useDispatch, useSelector} from "react-redux";
import {deletePatient, getPatients} from "../../reducers/main_reducer";
import {View} from "react-native";


const Main = (props) => {
    const patients = useSelector((state) => state.main.patients);
    const user = useSelector(state => state.main.user);
    const {username,_id} = user
    const dispatch = useDispatch()
    useEffect(() => {
        if (!username){
            props.navigation.navigate('Login',{MODE : 'LOGIN'})
            return
        }
        dispatch(getPatients(_id))
        //CLEAR THIS
    },[username])
    const renderItem = (data) => {
        return  <UserItem data={data.item} navigate={props.navigation.navigate} />
    }
    const navToPatient = () =>  props.navigation.navigate('addPatient',{MODE : 'ADD'})
    if (patients.length==0) return <NoPatients callback={navToPatient} />
    return (
        <Container>
        <SwipeListView
            data={patients}
            renderItem={renderItem}
            renderHiddenItem={(data) => {
                return (<ButtonsContainer>
                <EditButton undo navigate={() => props.navigation.navigate('addPatient',{MODE : 'EDIT',data: data.item})}/>
                <EditButton navigate={() => dispatch(deletePatient(data.item._id))}/>
                </ButtonsContainer>)
            }}
            rightOpenValue={-150}
            previewRowKey={'0'}
            previewOpenValue={-40}
            previewOpenDelay={3000}
        />
    <Plus onPress={navToPatient}>
        <AntDesign name="plus" size={30} color="white" /></Plus>
    </Container>)
}
const NoPatients = ({callback}) => {
    return <Container>
        <NoTitle>Let's add a patient!</NoTitle>
        <Rocket source={require('./../../images/raketa.png')}/>
        <Plus onPress={callback}>
            <AntDesign name="plus" size={30} color="white" /></Plus>
    </Container>
}




export default Main