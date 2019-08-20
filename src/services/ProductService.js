import axios from 'axios'

export default class ProductService {

    

    getAllProducts() {        
        return axios.get('https://localhost:5001/api/products')
    }

 }