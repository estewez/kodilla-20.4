import { createStore, combineReducers } from 'redux';
import DevTools from './DevTools';
import reducers from '../reducers/index';
import {getCountries} from '../actions/actions-countries';

const store = createStore(
  reducers,
  DevTools.instrument()
);
store.dispatch(getCountries());
export default store;