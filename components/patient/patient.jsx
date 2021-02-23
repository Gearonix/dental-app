import React from 'react';
import {GreyText, Title} from "../../styles";
import {Container} from "./../../styles";
import {AntDesign, Entypo} from '@expo/vector-icons';
import {Button, ButtonsBlock, Tricks, WhiteText} from "./patient.styles";
import TrickItem from "./TrickItem/TrickItem";
import {useDispatch, useSelector} from "react-redux";
import {ButtonsContainer, Plus} from "../main/main.styles";
import {EditButton} from "../main/item/item";
import {SwipeListView} from "react-native-swipe-list-view";
import {deleteAppointment} from "../../reducers/main_reducer";

const Patient = (props) => {
    const data = useSelector((state) => state.main.current);
    const dispatch = useDispatch()
    const {fullname, phone, appointment} = data
    const renderItem = (data) => {
        return <TrickItem data={data}/>
    }
    const {navigate} = props.navigation
    return (
        <Container>
            <Title>{fullname}</Title>
            <GreyText>{phone}</GreyText>
            <ButtonsBlock>
                <Button color={'#2a86ff'} width={209} height={45}
                        onPress={() => navigate('ToothFormula')}><WhiteText>Teeth formula</WhiteText></Button>
                <Button color={'#84d269'} width={45} height={45} ml={10}>
                    <WhiteText><Entypo name="phone" size={24} color="white"/></WhiteText></Button>
            </ButtonsBlock>
            <Tricks>
                {/*<Item></Item>*/}
                {/*<TrickItem/>*/}
                <SwipeListView
                    data={appointment}
                    renderItem={renderItem}
                    renderHiddenItem={({item: data}) => {
                        return (<ButtonsContainer>
                            <EditButton undo navigate={() => navigate('addPatient', {MODE: 'TRICK_EDIT', data})}/>
                            <EditButton navigate={() => {
                                dispatch(deleteAppointment(data.id))
                                navigate('Main')
                            }
                            }/>
                        </ButtonsContainer>)
                    }}

                    rightOpenValue={-150}
                    previewRowKey={'0'}
                    previewOpenValue={-40}
                    previewOpenDelay={3000}
                />
            </Tricks>
            <Plus onPress={() => navigate('addPatient', {MODE: 'TRICK_ADD'})}>
                <AntDesign name="plus" size={30} color="white"/></Plus>
        </Container>
    )

}

export default Patient