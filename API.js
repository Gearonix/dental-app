import axios from 'axios'

const instance = axios.create({
    baseURL : 'http://localhost:6868'
})

const API = {
    getPatients(){
        return instance.get('/');
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
    }
}
export default API