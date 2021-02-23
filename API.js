import axios from 'axios'

const instance = axios.create({
    baseURL : 'http://localhost:6868'
})

const API = {
    getPatients(id){
        return instance.get(`/?id=${id}`);
    },
    addPatient(data){
        return instance.post('/',data)
    },
    changePatient(data){
        return instance.put('/',data)
    },
    deletePatient(id){
        return instance.delete('/',{data : {id}})
    },
    addAppointment(data){
        return instance.post('/tricks',data)
    },
    changeAppointment(data){
        return instance.put('/tricks',data)
    },
    deleteAppointment(id){
        return instance.delete('/tricks',{data : {id}})
    },
    login(data){
        return instance.put('/users/login',data)
    },
    register(data){
        return instance.post('/users/register',data)
    }
}
export default API