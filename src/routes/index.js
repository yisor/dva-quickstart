const routes = [
  {
    path: '/',
    name: 'IndexPage',
    getComponent(nextState, cb) {
      require.ensure([], (require) => {
        cb(null, require('./../layouts/UserLayout').default);
      });
    },
    indexRoute: {
      getComponent(location, callback) {
        callback(null, require('./Price').default)
      }
    },
    childRoutes: [
      {
        path: '/mine',
        getComponent(nextState, cb) {
          require.ensure([], (require) => {
            cb(null, require('./Mine').default);
          });
        },
      },
    ]
  },
];

export default routes;