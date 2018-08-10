const routes = [
  {
    path: '/',
    component: () => import('./Price'),
  },
  {
    path: '/mine',
    component: () => import('./Mine'),
  },
];

export default routes;