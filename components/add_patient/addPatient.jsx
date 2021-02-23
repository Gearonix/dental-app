import React from 'react';
import {App, Button, Container, Error, GreyText, Input, WhiteText} from "../../styles";
import {AntDesign} from '@expo/vector-icons';
import {Formik} from 'formik';

export const createInput = (value, callback, values, error = false, maxLength = 40) => {
    return <Input style={{paddingVertical: 0, outline: 'none'}} onChangeText={callback(value)} error={error}
                  value={values[value]}
                  maxLength={maxLength}/>
}
const SubmitButton = ({edit, callback,trick}) => {
    return <Button color={!edit ? '#87CC6F' : 'rgba(42, 134, 255, 1)'}
                   width={'100%'} height={45}
                   onPress={callback}><WhiteText>
        <AntDesign name={!edit ? 'plus' : 'check'} size={16}
                   color="white"/>{edit ? ' Change ' : ' Add '}
        {trick ? 'Appointment' : 'patient'}</WhiteText></Button>
}
const AddPatient = ({ callback, MODE, error, initValues,isTrick}) => {
    return (
        <App>
            <Formik
                initialValues={initValues}
                onSubmit={callback}>
                {({handleChange, handleSubmit, values}) => (
                    <Container>
                        <GreyText>{isTrick ? 'Tooth number' : 'Name'}</GreyText>
                        {createInput(isTrick ? 'dent_number' : 'fullname', handleChange, values,error)}
                        <GreyText>{isTrick ? 'Diagnos' : 'Phone number'}</GreyText>
                        {createInput(isTrick ? 'diagnos' : 'phone', handleChange, values,error)}
                        {isTrick &&
                        <><GreyText>Price</GreyText>
                            {createInput('price', handleChange, values,error)}
                            <GreyText>Date</GreyText>
                            {createInput('date', handleChange, values,)}
                            <GreyText>Time</GreyText>
                            {createInput('time', handleChange, values,error)}
                        </>}
                        <SubmitButton edit={MODE == 'EDIT' || MODE=='TRICK_EDIT'} callback={handleSubmit} trick={isTrick}/>
                        <Error>{error}</Error>
                    </Container>
                )}
            </Formik>
        </App>
    )
}
export default AddPatient