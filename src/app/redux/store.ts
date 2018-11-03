import { combineReducers, Store, createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import * as fromNotes from './sections/notes/notes.reducer';
import { IAppState } from './store.interfaces';

const reducers = combineReducers({
  notes: fromNotes.notesReducer
});
const persistConfig = {
  key: 'root',
  storage,
};
const persistedReducer = persistReducer(persistConfig, reducers);
const composeEnhancers = composeWithDevTools({name: 'Note App - React'});
const middlewares = applyMiddleware(thunk);

export const store: Store<IAppState> = createStore(persistedReducer, composeEnhancers(middlewares)) as Store<IAppState>;
export const persistor = persistStore(store);