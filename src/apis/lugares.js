import axios from 'axios';

const lugaresBD = axios.create({    
    baseURL: 'https://backend.peruexploring.pe/public/api/v1/lugares'    
})

export default lugaresBD