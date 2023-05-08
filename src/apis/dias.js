import axios from 'axios';

const diasBD = axios.create({    
    baseURL: 'https://auxbackend.peruexploring.pe/api/v1/dias'    
})

export default diasBD