import axios from 'axios';

const usuarioBD = axios.create({    
    baseURL: 'https://auxbackend.peruexploring.pe/api/all-users'    
})

export default usuarioBD