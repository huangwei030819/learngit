import App from '../App'

//路由组件
const Main = r => require.ensure([], () => r(require('../components/main')), 'Main');
const Page = r => require.ensure([], () => r(require('../components/page')), 'Pain');
const Show = r => require.ensure([], () => r(require('../components/show')), 'Show');

export default [{
  path:"/",
  components:App,
  children:[
    {
      path:'',
      redirect:'/home'
    },
    {
      path:''
      
    }

  ]
}]
