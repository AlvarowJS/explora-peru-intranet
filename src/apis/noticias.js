import axios from 'axios';

const noticiasBD = axios.create({    
    baseURL: 'https://auxbackend.peruexploring.pe/api/v1/noticias'    
})

export default noticiasBD