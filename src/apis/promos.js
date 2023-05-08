import axios from 'axios';

const promosBD = axios.create({    
    baseURL: 'https://auxbackend.peruexploring.pe/api/v1/promos'    
})

export default promosBD