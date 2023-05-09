import axios from 'axios';

const usuarioBD = axios.create({    
    baseURL: 'https://backend.peruexploring.pe/public/api/all-users'    
})

export default usuarioBD