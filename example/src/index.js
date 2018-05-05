import dva from 'dva';
import router from './router';

// 1. Initialize
const app = dva({
  onError: (err) => {
    console.error(err);
  }
});

// 2. Model
// Remove the comment and define your model.
//app.model({});

// 3. Router
app.router(router);

// 4. Start
app.start('#root');
