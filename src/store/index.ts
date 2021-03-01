import { createStore } from 'redux';

import rootReducer from './modules/rootReducer';
import { IFormState } from './modules/sidebarForm/types';

export interface IState {
  sidebarForm: IFormState;
}

const store = createStore(rootReducer);

export default store;
