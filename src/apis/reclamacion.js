import axios from 'axios';

const reclamacionBD = axios.create({    
    baseURL: 'https://backend.peruexploring.pe/public/api/v1/libros'    
})

export default reclamacionBD