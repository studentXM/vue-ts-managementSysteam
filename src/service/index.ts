import axios from 'axios'
axios.get('http://coderwhy.org/test').then((res) => {
  console.log(res)
})

axios.interceptors.request.use((config) => {
  return config
})
