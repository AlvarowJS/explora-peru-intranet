import axios from 'axios';

const circuitosBD = axios.create({    
    baseURL: 'https://backend.peruexploring.pe/public/api/v1/circuitos'    
})

export default circuitosBD