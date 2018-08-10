import dva from 'dva';
import createLoading from 'dva-loading';
import createHistory from 'history/createBrowserHistory';
import './index.css';

// 1. Initialize
// const app = dva();
const app = dva({
  history: createHistory(),
  initialState: {},
});

// 2. Plugins
// app.use({});
app.use(createLoading());

// 3. Model
app.model(require('./models/login').default);
app.model(require('./models/price').default);

// 4. Router
app.router(require('./router').default);

// 5. Start
app.start('#root');
