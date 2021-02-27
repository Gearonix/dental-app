import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import api from './../API'

const initialState = {
    patients: [],
    current: {
        fullname: null,
        phone: null,
        appointment: [],
        _id: null
    },
    user: {
        username: null,
        _id: null
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
        changePatientAC(state, action) {
            const {fullname, phone, id} = action.payload
            return {
                ...state,
                patients: state.patients.map((item) => item._id == id ? {...item, fullname, phone} : item)
            }
        },
        deletePatientAC(state, action) {
            return {...state, patients: state.patients.filter(item => item._id != action.payload)}
        },
        addAppointmentAC(state, action) {
            return {
                ...state, patients: state.patients.map(item => item._id == action.payload.id ?
                    {...item, appointment: [...item.appointment, action.payload.data]} : item)
            }
        },
        loginAC(state, action) {
            return {...state, user: action.payload}
        },
        logoutAC(){
            return initialState
        }
    }
})
export const {
    setPatients, getCurrentPatient, addPatientAC,
    changePatientAC, deletePatientAC, addAppointmentAC, deleteAppointmentAC, loginAC,logoutAC
} = main_reducer.actions

export const getPatients = createAsyncThunk('GET_PATIENTS',
    async (id, {dispatch}) => {
        const response = await api.getPatients(id);
        if (response.data.status == 200) {
            dispatch(setPatients(response.data.data))
        }
    }
)
export const addPatient = createAsyncThunk('ADD_PATIENT',
    async (data, {dispatch}) => {
        const response = await api.addPatient(data)
        dispatch(addPatientAC(response.data.data[0]))
    }
)
export const changePatient = createAsyncThunk('CHANGE_PATIENT',
    async (data, {dispatch}) => {
        await api.changePatient(data);
        dispatch(changePatientAC(data))
    })
export const deletePatient = createAsyncThunk('DELETE_PATIENT',
    async (id, {dispatch}) => {
        await api.deletePatient(id);
        dispatch(deletePatientAC(id))
    })
export const addAppointment = createAsyncThunk('ADD_APOINTMENT',
    async (data, {dispatch}) => {
        const response = await api.addAppointment(data)
        dispatch(addAppointmentAC({id: data.user_id, data: response.data.data}))
    })
export const changeAppointment = createAsyncThunk('CHANGE_APPOINTMENT',
    async (data, {dispatch}) => {
        await api.changeAppointment(data);
        dispatch(getPatients(data.creator_id))
    }
)
export const deleteAppointment = createAsyncThunk('DELETE_APPOINTMENT',
    async (data, {dispatch}) => {
        await api.deleteAppointment(data.trick_id);
        dispatch(getPatients(data.user_id))
    })
export const login = createAsyncThunk('LOGIN',
    async (data, {dispatch}) => {
        const response = await api.login(data)
        // wrong name or password
        if (response.data.status != 200) return {error: true, message: response.data.message}
        dispatch(loginAC(response.data.data))
    }
)
export const register = createAsyncThunk('REGISTER',
    async (data, {dispatch}) => {
        const response = await api.register(data)
        if (response.data.status != 200) return {error: true, message: response.data.message}
        dispatch(loginAC(response.data.data))
    }
)
export const getAuth = createAsyncThunk('AUTH',
    async (data, {dispatch}) => {
        const response = await api.getCookie();
        console.log(response.data)
    }
)

export default main_reducer.reducer