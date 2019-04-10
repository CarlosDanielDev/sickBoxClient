import axios from 'axios'

const api = axios.create({
    baseURL: 'https://sickbox.herokuapp.com'
})

export default api