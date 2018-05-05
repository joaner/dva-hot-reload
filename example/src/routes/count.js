import react from 'react';
import model from '../models/count';
import Page from '../pages/count';

export default {
  models: () => [model],
  component: () => <Page/>,
}
