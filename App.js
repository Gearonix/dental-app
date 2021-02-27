import React from 'react'
import Main from "./components/main/main";
import Patient from "./components/patient/patient";
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {Provider} from "react-redux";
import store from "./store";
import AddPatientC from "./components/add_patient/addPatientC";
import ToothFormula from "./components/tooth_formula/tooth_formula";
import Login from "./components/login/login";
import { SimpleLineIcons } from '@expo/vector-icons';

import {Text} from 'react-native'
const HeaderStyle = (title, fontSize = '24px', others = {},callback) => {
    return {
        title,
        headerTintColor: "#2A86FF",
        headerStyle: {
            backgroundColor: 'white',
            borderWidth: 0
        },
        headerTitleStyle: {
            fontWeight: 'bold',
            fontSize,

        },
        ...others
    }
}
const LogoutButton =  ({callback}) => (<SimpleLineIcons name="logout" size={24} color="#2e4c75"
                         style={{marginRight : 25}}
                         onPress={callback} />)
const AppNavigator = createStackNavigator({
    Main: {
        screen: Main,
        navigationOptions: ({navigation}) => ({...HeaderStyle('Patients','24px',{}),
                headerRight : <LogoutButton callback={() =>
                    navigation.navigate('Login',{MODE : 'LOGIN',LOGOUT : true})} />
            })
    },
    Patient: {
        screen: Patient,
        navigationOptions: HeaderStyle('Patient Card')
    },
    addPatient: {
        screen: AddPatientC,
        navigationOptions: HeaderStyle('Add or change patient', '20px')
    },
    ToothFormula: {
        screen: ToothFormula,
        navigationOptions: HeaderStyle('Teeth formula')
    },
    Login: {
        screen: Login,
        navigationOptions: HeaderStyle('Login','27px',{headerLeft: null})
    }
})
const AppNavigation = createAppContainer(AppNavigator)

const App = () => {
    return (
        <Provider store={store}>
            <AppNavigation/>
        </Provider>
    )
}


export default App
// export default App;