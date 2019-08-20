import axios from 'axios'

export default class ClientService {

    

    getAllClients() {        
        return axios.get('https://localhost:5001/api/client')
    }

    addNewClient(Client , client) {
        return axios.post('https://localhost:5001/api/client',client)
    }

 }