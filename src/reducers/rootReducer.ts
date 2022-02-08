import { combineReducers } from 'redux';
import adminReducer from '../admin/reducers/admin.reducer';

const rootReducer = combineReducers({ admin: adminReducer });

export default rootReducer;
