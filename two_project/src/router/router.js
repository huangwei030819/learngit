// import App from './../App'

const Vheader = r => require.ensure([], () => r(require('../components/Vheader')), 'Vheader');
const foot = r => require.ensure([], () => r(require('../components/foot')), 'foot');
const vleft = r => require.ensure([], () => r(require('../components/Vleft')), 'Vleft');
const map_date = r => require.ensure([], () => r(require('../router/map_date')), 'map_date');
const test = r => require.ensure([], () => r(require('../router/test')), 'test');
const xiqing = r => require.ensure([], () => r(require('.../components/xiqing')), 'xiqing');

// import Vheader from '../components/Vheader'
// import map_date from './map_date'
// import test from './test'

// export default [{
//     path: '/',
//     component: App,
//     children:[
//       {path:"",redirect:'/map_data'},  
//       {path:'/Vheader',comment:Vheader},
//       {path:'/map_data',component:map_date},
//       {path:'test',component:test}
//     ]
// }]
const  routes =[
  {path:'*',redirect:'/map_data'},  
  {path:'/Vheader',name:'Vheader',comment:Vheader},
  {path:'/map_data',name:'map_date',component:map_date},
  {path:'/xiqing',name:'xiqing',component:xiqing},
  {path:'/test',name:'test',component:test}
]

export default routes