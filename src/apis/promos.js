import axios from 'axios';

const promosBD = axios.create({    
    baseURL: 'https://backend.peruexploring.pe/api/v1/promos'    
})

export default promosBD