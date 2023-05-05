import axios from 'axios';

const tarifaBD = axios.create({    
    baseURL: 'https://backend.peruexploring.pe/api/v1/tarifa'    
})

export default tarifaBD