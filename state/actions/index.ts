import { ActionType } from '../action-type';

// SEARCH REPOSITORIES
interface SearchRepositoriesAction {
    type: ActionType.SEARCH_REPOSITORIES;
};

interface SearchRepositoriesSuccessAction {
    type: ActionType.SEARCH_REPOSITORIES_SUCCESS;
    payload: any[];
    user: object;
};

interface SearchRepositoriesErrorAction {
    type: ActionType.SEARCH_REPOSITORIES_ERROR;
    payload: string;
};
// GET REPOSITORY
interface GetRepositoryAction {
    type: ActionType.GET_REPOSITORY;
};

interface GetRepositorySuccessAction {
    type: ActionType.GET_REPOSITORY_SUCCESS;
    payload: any;
};

interface GetRepositoryErrorAction {
    type: ActionType.GET_REPOSITORY_ERROR;
    payload: string;
};

interface LoadMoreRepositoriesAction {
    type: ActionType.LOAD_MORE_REPOSITORIES;
}

interface LoadMoreRepositoriesSuccessAction {
    type: ActionType.LOAD_MORE_REPOSITORIES_SUCCESS;
    payload: any[];
};

export type Action  = 
    | SearchRepositoriesAction 
    | SearchRepositoriesSuccessAction 
    | SearchRepositoriesErrorAction
    | GetRepositoryAction
    | GetRepositorySuccessAction
    | GetRepositoryErrorAction
    | LoadMoreRepositoriesAction
    | LoadMoreRepositoriesSuccessAction;
