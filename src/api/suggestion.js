import axios from 'axios';

const API_URL = 'http://localhost:3000';

export default{
    fetchSuggestions(){
        console.log("vai chamar o fetch suggestions na API");
        return axios.get(`${API_URL}/suggestions`);
    }
}