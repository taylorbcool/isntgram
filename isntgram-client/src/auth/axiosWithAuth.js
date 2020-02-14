import axios from 'axios'

const token = localStorage.getItem('token')

const axiosWithAuth = axios.create({
  baseURL: 'http://73.98.63.133:5000',
  headers: {
    'Access-Control-Allow-Origin': '*',
    'Authorization': token
  }
})

export default axiosWithAuth