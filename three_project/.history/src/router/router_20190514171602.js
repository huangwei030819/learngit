import App from '../App'

//路由组件
const Main = r => require.ensure([], () => r(require('../components/main')), 'Main');
const Page = r => require.ensure([], () => r(require('../components/page')), 'Pain');
const Show = r => require.ensure([], () => r(require('../components/show')), 'Show');
const Login = r => require.ensure([], () => r(require('../components/login')), 'Login');

export default [
    {
      path:'',
      redirect:'/login'
    },
    {
      path:'/login',
      component:Login
    },
    {
      path:'/main',
      component:Main,
      children:[
      {
        path:'',
        redirect:'/show',
      },
      {
        path:"/show",
        component:Show
      },
      {
        path:"/page",
        component:Page
      }
    ]
    }
]
