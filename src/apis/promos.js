import axios from 'axios';

const promosBD = axios.create({    
    baseURL: 'https://backend.peruexploring.pe/public/api/v1/promos'    
})

export default promosBD