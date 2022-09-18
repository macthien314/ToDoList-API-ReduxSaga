import { createStore, combineReducers, applyMiddleware} from "redux";

//saga
import createMiddlewareSaga from 'redux-saga';
import { rootSaga } from './sagas/rootSaga';

import LoadingReducer from './reducers/LoadingReducer';
import ToDoListReducer from './reducers/ToDoListReducer';

const middleWareSaga = createMiddlewareSaga(); 

const rootReducer = combineReducers({
    //reducer khai báo tại đây
    ToDoListReducer,
    LoadingReducer
})

const store = createStore(rootReducer, applyMiddleware( middleWareSaga));

//gọi saga
middleWareSaga.run(rootSaga)

export default store;