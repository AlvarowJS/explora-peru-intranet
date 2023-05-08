import axios from 'axios';

const tarifaBD = axios.create({    
    baseURL: 'https://auxbackend.peruexploring.pe/api/v1/tarifa'    
})

export default tarifaBD