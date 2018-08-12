import dva from 'dva';
import createLoading from 'dva-loading';
import { browserHistory } from 'dva/router';
import './index.css';

// 1. Initialize
const app = dva({
  history: browserHistory,
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
