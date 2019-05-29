import App from '../App'

//路由组件
const shopSafe = r => require.ensure([], () => r(require('../page/shop/children/children/shopSafe')), 'shopSafe');

export default [{
  path:"/"
  
}]
