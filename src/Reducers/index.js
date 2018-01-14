// manager/src/reducers/index.js
import { combineReducers } from 'redux';
import Farm from './Farm';
import Pig from './Pig';

export default combineReducers({
  farm: Farm,
  pig: Pig
});
