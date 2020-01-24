import axios from 'axios'

const api = axios.create({
    baseURL: 'https://random-word-api.herokuapp.com/word?key=IVEAXURV&number=10'
})

export default api