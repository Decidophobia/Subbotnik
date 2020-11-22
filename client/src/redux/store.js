import {createStore} from 'redux';
import {rootReducer} from './reducer/rootReducer';
import {composeWithDevTools} from 'redux-devtools-extension';
import { applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';


export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(ReduxThunk)))
