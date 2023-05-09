import axios from 'axios';

const tarifaBD = axios.create({    
    baseURL: 'https://backend.peruexploring.pe/public/api/v1/tarifa'    
})

export default tarifaBD