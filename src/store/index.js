import { createStore } from 'redux';

import reducer from '../reducers/reducer';
import todos from '../state';

const store = createStore(reducer, todos);

export default store;
