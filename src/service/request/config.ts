let BASE_URL = 'http://coderwhy.org/prod'
const TIME_OUT = 10000

const env = process.env.NODE_ENV

if (env === 'development') {
  BASE_URL = 'http://192.168.101.23:3000/'
} else if (env === 'production') {
  BASE_URL = 'http://coderwhy.org/prod'
} else {
  BASE_URL = 'http://coderwhy.org/test'
}
export { BASE_URL, TIME_OUT }
