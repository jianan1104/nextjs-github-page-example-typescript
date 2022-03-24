import { combineReducers } from "redux";
import repositoriesReducer from './repositoriesReducer';
import repositoryReducer from './repositoryReducer';

const reducers = combineReducers({
    repositories: repositoriesReducer,
    repository: repositoryReducer
});

export default reducers;

export type RootState = ReturnType<typeof reducers>;