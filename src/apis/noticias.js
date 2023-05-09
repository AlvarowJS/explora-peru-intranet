import axios from 'axios';

const noticiasBD = axios.create({    
    baseURL: 'https://backend.peruexploring.pe/public/api/v1/noticias'    
})

export default noticiasBD