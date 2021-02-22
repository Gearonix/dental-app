import React, {useState} from 'react';
import {App, Button, Container, Error, GreyText, Input, WhiteText} from "../../styles";
import {AntDesign} from '@expo/vector-icons';
import {useDispatch, useSelector} from "react-redux";
import {addAppointment, addPatient, changePatient} from "../../reducers/main_reducer";
import {formatDate, formatTime, validate, ValidateTrick} from './../../helpers'
import DatePicker from 'react-native-datepicker';
import DateTimePicker from '@react-native-community/datetimepicker';
import {Platform} from 'react-native'

const DEVELOPER_MODE = 'web'
const AddPatient = ({navigation}) => {
    const changeData = navigation.state.params?.data
    console.log(changeData)
    const [fullnameInput, addFullname] = useState(changeData ? changeData.fullname : '')
    const [phoneInput, addPhone] = useState(changeData ? changeData.phone : '')
    const [error, throwError] = useState('')
    const [dateInput,setDateInput] = useState(formatDate(new Date()))
    const [timeInput,setTimeInput] = useState(formatTime(new Date()))
    const [priceInput,addPriceInput] = useState('')
    const [dentNumberInput,addDentNumber] = useState('')
    const [diagnosInput,addDiagnosInput] = useState('')
    const dispatch = useDispatch()
    const MODE = navigation.state.params?.MODE
    const user_id = useSelector((state) => state.main.current._id)
    const submit = async () => {
        const data = {fullname: fullnameInput, phone: phoneInput.replace(/\D/g, '')}
        // const callback = MODE == 'EDIT' ? () => dispatch(changePatient({
        //     ...data,
        //     id: changeData?._id
        // })) : () => dispatch(addPatient(data))
        // callback()
        let callback = () => console.log('no callback');
        switch (MODE){
            case 'EDIT':
                if (validate(fullnameInput, phoneInput, throwError)) {
                    return
                }
                callback = () => dispatch(changePatient({
                    ...data,
                    id: changeData?._id
                }))
                break;
            case 'TRICK_ADD':
                const data ={time : timeInput,price:
                    priceInput,date : dateInput,user_id,diagnos : diagnosInput,
                    dent_number : dentNumberInput}

                if (ValidateTrick(data,throwError)){
                    console.log('ERROR')
                    return
                }
                callback  = () => dispatch(addAppointment(data))
                break;
            case 'ADD':
                if (validate(fullnameInput, phoneInput, throwError)) {
                    return
                }
                callback = () => dispatch(addPatient(data))
                break;
        }
        callback()
        navigation.navigate('Main')
    }
    // TRICK_ADD
    const onChange = (event, selectedDate) => {
        const currentDate = selectedDate || dateInput;
        setDateInput(currentDate);
    };
    const trickInputs = MODE.startsWith('TRICK') && <>
        <GreyText>Price</GreyText>
        <Input style={noneBorder} onChangeText={(text => addPriceInput(text))} error={error}
               value={priceInput}/>
        <GreyText>Date</GreyText>
        {Platform.OS==DEVELOPER_MODE ?  <Input style={noneBorder}
                                      onChangeText={(text => setDateInput(text))} error={error}
                                      value={dateInput}/> : <DateTimePicker
            testID="dateTimePicker"
            value={dateInput}
            mode={'date'}
            is24Hour={true}
            display="default"
            onChange={onChange}
        />}
        <GreyText>Time</GreyText>
        {Platform.OS==DEVELOPER_MODE ?  <Input style={noneBorder}
                                               onChangeText={(text => setTimeInput(text))} error={error}
                                               value={timeInput}/> : <DateTimePicker
            testID="dateTimePicker"
            value={dateInput}
            mode={'time'}
            is24Hour={true}
            display="default"
            onChange={onChange}
        />
        }
    </>
    return (
        <App>
            <Container>
                <GreyText>{MODE.startsWith('TRICK') ? 'Tooth number' : 'Name'}</GreyText>
                <Input style={noneBorder} onChangeText={MODE.startsWith('TRICK') ? text => addDentNumber(text) :
                        text => addFullname(text)} error={error}
                       value={MODE.startsWith('TRICK') ? dentNumberInput : fullnameInput}/>
                <GreyText>{MODE.startsWith('TRICK') ? 'Diagnos' : 'Phone number'}</GreyText>
                <Input style={noneBorder} onChangeText={(MODE.startsWith('TRICK') ? text => addDiagnosInput(text) :
                        text => addPhone(text))} error={error}
                       value={MODE.startsWith('TRICK') ? diagnosInput :phoneInput}/>
                {trickInputs}
                <Button color={!MODE == 'EDIT' ? '#87CC6F' : 'rgba(42, 134, 255, 1)'} width={'100%'} height={45}
                        onPress={submit}><WhiteText>
                    <AntDesign name={!MODE == 'EDIT' ? 'plus' : 'check'} size={16}
                               color="white"/>{MODE == 'EDIT' ? ' Change ' : ' Add '}
                    patient</WhiteText></Button>
                <Error>{error}</Error>
            </Container>
        </App>
    )
}

const noneBorder = {paddingVertical: 0, outline: 'none'}
export default AddPatient