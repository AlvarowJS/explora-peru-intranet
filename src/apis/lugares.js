import axios from 'axios';

const lugaresBD = axios.create({    
    baseURL: 'https://auxbackend.peruexploring.pe/api/v1/lugares'    
})

export default lugaresBD