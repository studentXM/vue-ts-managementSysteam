let BASE_URL = 'http://coderwhy.org/prod'
let BASE_NAME = 'coderwhy'

const env = process.env.NODE_ENV

if (env === 'development') {
  BASE_URL = 'http://coderwhy.org/dev'
  BASE_NAME = 'coderwhy'
} else if (env === 'production') {
  BASE_URL = 'http://coderwhy.org/prod'
  BASE_NAME = 'coder'
} else {
  BASE_URL = 'http://coderwhy.org/test'
  BASE_NAME = 'coderj'
}
export { BASE_URL, BASE_NAME }
