import React from 'react'
import Main from "./components/main/main";
import Patient from "./components/patient/patient";
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {Provider} from "react-redux";
import store from "./store";
import AddPatient from "./components/add_patient/addPatient";

export const HeaderStyle =  (title,fontSize='24px') => {
    return {
        title,
        headerTintColor : "#2A86FF",
        headerStyle: {
            backgroundColor: 'rgb(242, 242, 242)',
        },
        headerTitleStyle: {
            fontWeight: 'bold',
            fontSize
        },
    }
}

const AppNavigator = createStackNavigator({
    Main : {
        screen : Main,
        navigationOptions : HeaderStyle('Patients')
    },
    Patient : {
        screen : Patient,
        navigationOptions :HeaderStyle('Patient Card')
    },
    addPatient : {
        screen : AddPatient,
        navigationOptions: HeaderStyle('Add or change patient','20px')
    }
})
const AppNavigation = createAppContainer(AppNavigator)

const App = () => {
    return (
        <Provider store={store}>
            <AppNavigation />
        </Provider>
    )
}


export default App
// export default App;