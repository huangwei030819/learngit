import App from '../App'

//路由组件
const Main = r => require.ensure([], () => r(require('../components/main.vue')), 'Main');

export default [{
  path:"/"
  
}]
