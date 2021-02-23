import React,{useState,useEffect} from 'react';
import {Text} from 'react-native'
import {App, Input, GreyText, Container, WhiteText, Button, Error,Link} from "../../styles";
import {Title} from "./login.styles";
import {AntDesign} from "@expo/vector-icons";
import { Formik ,useFormik} from 'formik';
import {createInput} from "../add_patient/addPatient";
import {useDispatch, useSelector} from "react-redux";
import {login, register} from "../../reducers/main_reducer";

const Login = ({navigation}) => {
    const initialValues = {username : '',password : ''}
    const dispatch = useDispatch()
    const [error,setError] = useState('')
    const username = useSelector(state => state.main.user.username)
    const isRegister = navigation.state.params.MODE==='REGISTER'
    const callback = isRegister ? register : login
    const onSubmit = async (data) => {
        const response = await dispatch(callback(data))
        if (response.payload?.error) setError(response.payload?.message)
    }
    // register
    useEffect(() => {
        if (username){
            navigation.navigate('Main')
        }
    },[username])
    const formik = useFormik({initialValues,onSubmit})
    const { handleChange, handleSubmit, values } = formik
    return <App>
        <Title>{isRegister ? 'Sign up!' : 'Hello.'}</Title>
            <Container>
            <GreyText>Name:</GreyText>
            {createInput('username',handleChange,values)}
            <GreyText>Password:</GreyText>
            {createInput('password',handleChange,values)}
            <Link onClick={() => navigation.navigate('Login', {MODE : isRegister ? 'LOGIN' :'REGISTER'})}>
                Or {isRegister ? 'login' : 'register'}</Link>
            <SubmitButton callback={handleSubmit}  isRegister={isRegister}/>
            <Error>{error}</Error>
            </Container>
    </App>
}
const SubmitButton = ({callback,isRegister}) => {
    return <Button color={isRegister ? 'rgba(234, 125, 223, 1)' : '#34C0C9'} width={'100%'} height={45} onPress={callback}><WhiteText>
        <AntDesign name={'login'} size={14}
                   color="white"/> {isRegister ? 'Sign up!' : 'Login'}</WhiteText></Button>
}

export default Login