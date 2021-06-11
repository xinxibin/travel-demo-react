import { createStore } from 'redux'
import languageRedux from './languageRedux'
// 需要提供一个reducer 变量
const store = createStore(languageRedux)

export default store