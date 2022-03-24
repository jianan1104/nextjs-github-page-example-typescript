import { ActionType } from "../action-type";
import { Action } from "../actions";
import { RepositoryType } from '../../modules/interface';

interface RepositoriesState {
    loading: boolean;
    error: string | null;
    data: RepositoryType;
}

const initRepositoryData = {
    name: '',
    description: '',
    language: '',
    license: {
        spdx_id: ''
    },
    forks_count: 0,
    stargazers_count: 0,
    open_issues_count: 0,
    subscribers_count: 0,
    updated_at: '',
    owner: {
        login: ''
    },
    homepage: '',
    html_url: '',
    topics: []
}

const initialState = {
    loading: false,
    error: null,
    data: initRepositoryData
}

const reducer = (state: RepositoriesState = initialState, action: Action): RepositoriesState => {
    switch(action.type) {
        case ActionType.GET_REPOSITORY:
            return { loading: true, error: null, data: state.data };
        case ActionType.GET_REPOSITORY_SUCCESS:
            return { loading: false, error: null, data: action.payload };
        case ActionType.GET_REPOSITORY_ERROR:
            return { loading: false, error: action.payload, data: initRepositoryData };
        default:
            return state;
    }
};

export default reducer;