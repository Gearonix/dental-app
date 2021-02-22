import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import api from './../API'

const initialState = {
    patients: [],
    current: {
        fullname: null,
        phone: null,
        appointment: [],
        _id : null
    }
}

const main_reducer = createSlice({
    name: 'main',
    initialState,
    reducers: {
        setPatients(state, action) {
            return {...state, patients: action.payload}
        },
        getCurrentPatient(state, action) {
            return {...state, current: action.payload}
        },
        addPatientAC(state, action) {
            return {...state, patients: [...state.patients, action.payload]}
        },
        changePatientAC(state,action){
            const {fullname,phone,id} = action.payload
            return {...state,patients: state.patients.map((item) => item._id==id ? {...item,fullname,phone} : item)}
        },
        deletePatientAC(state,action){
            return {...state,patients: state.patients.filter(item => item._id!=action.payload)}
        },
        addAppointmentAC(state,action){
            return {...state,patients: state.patients.map(item => item._id == action.payload.id ?
                    {...item,appointment : [...item.appointment,action.payload.data]} : item )}
        }
    }
})
export let {setPatients, getCurrentPatient,addPatientAC,
    changePatientAC,deletePatientAC,addAppointmentAC} = main_reducer.actions

export const getPatients = createAsyncThunk('GET_PATIENTS',
    async (data = {}, {dispatch}) => {
        const response = await api.getPatients();
        if (response.data.status == 200) {
            dispatch(setPatients(response.data.data))
        }
    }
)
export const addPatient = createAsyncThunk('ADD_PATIENT',
    async (data, {dispatch}) => {
        const response = await api.addPatient(data)
        console.log(response);
        dispatch(addPatientAC(response.data.data[0]))
        console.log(window.state())
    }
)
export const changePatient = createAsyncThunk('CHANGE_PATIENT',
    async (data,{dispatch}) => {
    await api.changePatient(data);
    dispatch(changePatientAC(data))
})
export const deletePatient = createAsyncThunk('DELETE_PATIENT',
    async (id,{dispatch}) => {
    await api.deletePatient(id);
    dispatch(deletePatientAC(id))
})
export const addAppointment = createAsyncThunk('ADD_APOINTMENT',
    async (data,{dispatch})=> {
        const response = await api.addAppointment(data)
        console.log(response)
        dispatch(addAppointmentAC({id : data.user_id,data : response.data.data}))
})

export default main_reducer.reducer