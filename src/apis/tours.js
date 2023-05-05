import axios from 'axios';

const toursBD = axios.create({    
    baseURL: 'https://backend.peruexploring.pe/api/v1/tours'    
})

export default toursBD