import axios from 'axios';

const API_URL = 'http://localhost:3000';

export default{
    fetchSkus(){
        console.log("vai chamar o fetch na API");
        return axios.get(`${API_URL}/skus`);
    }
}