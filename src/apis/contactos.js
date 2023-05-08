import axios from 'axios';

const contactenosBD = axios.create({    
    baseURL: 'https://auxbackend.peruexploring.pe/api/v1/contactenos'    
})

export default contactenosBD