import { ActionType } from "../action-type";
import { Action } from "../actions";

interface RepositoriesState {
    loading?: boolean;
    error: string | null;
    data: object[];
    user: any;
};

const initUserData = {
    avatar_url: '',
    name: '',
    login: '',
    bio: '',
    location: '',
    blog: '',
    twitter_username: '',
    public_repos: 0
};

const initialState = {
    loading: false,
    error: null,
    data: [],
    user: initUserData
}

const reducer = (state: RepositoriesState = initialState, action: Action): RepositoriesState => {
    switch(action.type) {
        case ActionType.SEARCH_REPOSITORIES:
            return { loading: true, error: null, data: [], user: {} };
        case ActionType.SEARCH_REPOSITORIES_SUCCESS:
            return { loading: false, error: null, data: action.payload, user: action.user };
        case ActionType.SEARCH_REPOSITORIES_ERROR:
            return { loading: false, error: action.payload, data: [...state.data], user: state.user };
            // Load More Data
        case ActionType.LOAD_MORE_REPOSITORIES:
            return { error: null, data: [...state.data], user: state.user };
        case ActionType.LOAD_MORE_REPOSITORIES_SUCCESS:
            return { error: null, data: [...state.data, ...action.payload], user: state.user };
        
        default:
            return state;
    }
};

export default reducer;