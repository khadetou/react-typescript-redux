import axios from "axios";
import { ActionType } from "../action-types";
import { Action } from "../actions";
import { Dispatch } from "redux";

export const searchRepositories = (term: string) => {
  return async (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.SEARCH_REPOSITORIES,
    });
    try {
      const res = axios.get("https://registry.npmjs.org/-/v1/search?text=", {
        params: {
          text: term,
        },
      });
      console.log(res);
      //   const names = res.objects.map((result: any) => {
      //     return result.package.name;
      //   });
      //   dispatch({
      //     type: ActionType.SEARCH_REPOSITORIES_SUCCESS,
      //     payload: names,
      //   });
    } catch (error: any) {
      dispatch({
        type: ActionType.SEARCH_REPOSITORIES_ERROR,
        payload: error.message,
      });
    }
  };
};
