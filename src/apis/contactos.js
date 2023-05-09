import axios from 'axios';

const contactenosBD = axios.create({    
    baseURL: 'https://backend.peruexploring.pe/public/api/v1/contactenos'    
})

export default contactenosBD