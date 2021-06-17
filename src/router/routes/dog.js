const routes = [
  {
    path: '/dog/start',
    name: 'DogStart',
    component: () => import(/* webpackChunkName: "Dog-Start" */ '@pages/Dog/Start/Start.vue'),
    meta: {
      title: '',
    }
  },
  {
    path: '/dog/game',
    name: 'DogGame',
    component: () => import(/* webpackChunkName: "Dog-Game" */ '@pages/Dog/Game/Game.vue'),
    meta: {
      title: '',
    }
  },
]

export default routes;