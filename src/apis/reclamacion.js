import axios from 'axios';

const reclamacionBD = axios.create({    
    baseURL: 'https://backend.peruexploring.pe/api/v1/libros'    
})

export default reclamacionBD