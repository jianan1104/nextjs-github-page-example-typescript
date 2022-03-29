import { combineReducers } from "redux";
import repositoryReducer from './repositoryReducer';
import repositoriesReducer from './repositoriesReducer';

const reducers = combineReducers({
    repositories: repositoriesReducer,
    repository: repositoryReducer
});

export default reducers;

export type RootState = ReturnType<typeof reducers>;