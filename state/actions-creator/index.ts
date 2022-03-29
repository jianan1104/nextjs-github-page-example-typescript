import utf8 from 'utf8';
import base64 from "base-64";
import { Dispatch } from "redux";
import { Action } from "../actions";
import { Octokit } from "@octokit/core";
import { ActionType } from "../action-type";


const octokit = new Octokit({ auth: process.env.GITHUB_API_TOKEN});

export const SearchRepositoriesByUser = (username: string, pageNumber: number = 1, isLoadMore: boolean = false) => {
    return async (dispatch: Dispatch<Action>) => {
        if(isLoadMore) {
            dispatch({
                type: ActionType.LOAD_MORE_REPOSITORIES
            });
        } else {
            dispatch({
                type: ActionType.SEARCH_REPOSITORIES
            });
        }
        let data: any[] = [];
        await octokit.request('GET /users/{username}/repos', {
            username: username,
            sort: 'updated',
            per_page: 10,
            page: pageNumber
            }).then(res => {
                if(res.status === 200) {
                    data = res.data;
                } else {
                    dispatch({
                        type: ActionType.SEARCH_REPOSITORIES_ERROR,
                        payload: `GET /users/{username}/repos FAILED. Http status is ${res.status}`
                    })
                    throw  new Error(`GET /users/{username}/repos FAILED. Http status is ${res.status}`)
                }
            }).catch(err => {
                dispatch({
                    type: ActionType.SEARCH_REPOSITORIES_ERROR,
                    payload: err.message
                })
            });
        if(isLoadMore) {
            dispatch({
                type: ActionType.LOAD_MORE_REPOSITORIES_SUCCESS,
                payload: data
            })
        } else {
            let user: any;
            await octokit.request('GET /users/{username}', {
                username: username
                }).then(res => {
                if(res.status === 200) {
                    user = res.data;
                }
                }).catch(err => {
                const msg = `HTTP[${err.status}] ${err.response.data.message}`;
                throw msg;
            });

            dispatch({
                type: ActionType.SEARCH_REPOSITORIES_SUCCESS,
                payload: data,
                user: user
            })
        }
    };
};

export const GetRepository = (owner: string, repo: string) => {
    return async (dispatch: Dispatch<Action>) => {
        dispatch({
            type: ActionType.GET_REPOSITORY
        });
        let data = {
            readme: ''
        };
        await octokit.request('GET /repos/{owner}/{repo}', {
            owner: owner,
            repo: repo
          }).then(res => {
                if(res.status === 200) {
                    data = {...res.data, readme: ''};
                } else {
                    throw  new Error(`GET /repos/{owner}/{repo} FAILED. Http status is ${res.status}`)
                }
            }).catch(err => {
                dispatch({
                    type: ActionType.GET_REPOSITORY_ERROR,
                    payload: err.message
                });
            });

        await octokit.request('GET /repos/{owner}/{repo}/readme', {
            owner: owner,
            repo: repo
            }).then(res => {
            if(res.status === 200) {
                data.readme = utf8.decode(base64.decode(res.data.content));
            } else {
                throw new Error(`GET /repos/{owner}/{repo}/readme FAILED. Http status is ${res.status}`)
            }
            }).catch(err => {
                data.readme = 'Sorry, there is no readme.md. :)';
                dispatch({
                    type: ActionType.GET_REPOSITORY_ERROR,
                    payload: err.message
                });
            });
            
        dispatch({
            type: ActionType.GET_REPOSITORY_SUCCESS,
            payload: data
        })
    };
};