import axios from 'axios';

const circuitosBD = axios.create({    
    baseURL: 'https://auxbackend.peruexploring.pe/api/v1/circuitos'    
})

export default circuitosBD