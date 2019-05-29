import App from '../App'

//路由组件
const Main = r => require.ensure([], () => r(require('../components/main')), 'Main');
const Page = r => require.ensure([], () => r(require('../components/page')), 'Pain');
const Show = r => require.ensure([], () => r(require('../components/show')), 'Show');
const Login = r => require.ensure([], () => r(require('../components/login')), 'Login');

export default [{
  path:"/",
  components:App,
  children:[
    {
      path:'',
      redirect:'/login'
    },
    {
      path:'/show',
      components:Show
    },
    {
      path:'/login',
      components:Login
    }

  ]
}]
