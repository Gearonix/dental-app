import React from 'react'
import Main from "./components/main/main";
import Patient from "./components/patient/patient";
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

const HeaderStyle =  (title) => {
    return {
        title,
        headerTintColor : "#2A86FF",
        headerStyle: {
            backgroundColor: 'rgb(242, 242, 242)',
        },
        headerTitleStyle: {
            fontWeight: 'bold',
            fontSize : '24px'
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
    }
})


export default createAppContainer(AppNavigator)
// export default App;