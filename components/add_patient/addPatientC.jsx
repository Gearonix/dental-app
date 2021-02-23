import {useDispatch, useSelector} from "react-redux";
import {addAppointment, addPatient, changeAppointment, changePatient} from "../../reducers/main_reducer";
import {formatDate, formatTime, validate, ValidateTrick} from "../../helpers";
import React, {useState} from 'react'
import AddPatient from "./addPatient";

const AddPatientC = ({navigation}) => {
    const changeData = navigation.state.params?.data || {},
    dispatch = useDispatch(),
    [error, throwError] = useState(''),
    MODE = navigation.state.params?.MODE,
    user_id = useSelector((state) => state.main.current._id),
    isTrick = MODE.startsWith('TRICK')
    , dispatchCallback = MODE == 'EDIT' ? changePatient :
    MODE == 'TRICK_ADD' ? addAppointment : MODE==='TRICK_EDIT' ? changeAppointment : addPatient,
    validator = !isTrick ? validate : ValidateTrick
    , submit = (data) => {
        if (validator(data, throwError)) {
            return
        }
        const submitData = {...data, id: changeData?._id, user_id,trick_id :
                MODE==='TRICK_EDIT' ? changeData?.id : null }
        dispatch(dispatchCallback(submitData))
        navigation.navigate('Main')
    },
    {fullname, phone, date, time, price, dent_number, diagnos} = changeData,
    initValues = {
        fullname: fullname || '', phone: phone || '', date: date || formatDate(new Date()),
        time: time || formatTime(new Date()), price: price || '',
        dent_number: dent_number || '', diagnos: diagnos || ''
    }
    return <AddPatient navigation={navigation} MODE={MODE} error={error} callback={submit} initValues={initValues} isTrick={isTrick}/>
}
export default AddPatientC