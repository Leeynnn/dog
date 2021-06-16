const files = require.context('.', false, /\.js$/);
let routes = [];

files.keys().forEach((key) => {
  if (key === './index.js') return;
  routes = routes.concat(files(key).default);
})
routes.forEach(route => {
  if (route.meta) {
    route.meta.title = route.meta.title || ''
    route.meta.description = route.meta.description || ''
    route.meta.keywords = route.meta.keywords || ''
  }
})

export default routes.concat([
  {
    path: '*',
    name: 'NotFound',
    component: () => import(/* webpackChunkName: "NotFound" */'@pages/Error/NotFound/NotFound'),
  }
]);
