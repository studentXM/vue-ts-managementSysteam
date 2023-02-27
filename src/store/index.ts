import { createStore } from 'vuex'

const store = createStore({
  state: () => {
    return { vname: '你好世界' }
  }
})

export default store
