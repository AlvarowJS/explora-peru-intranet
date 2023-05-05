import axios from 'axios';

const diasBD = axios.create({    
    baseURL: 'https://backend.peruexploring.pe/api/v1/dias'    
})

export default diasBD