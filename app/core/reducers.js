import {combineReducers} from "redux";
import {VisibilityFilters, ActionTypes} from "./actions";

const initialState = {
    visibilityFilter: VisibilityFilters.SHOW_ALL,
    todos: []
};

function visibilityFilter(state = VisibilityFilters.SHOW_ALL, action) {
    switch (action.type) {
        case ActionTypes.SET_VISIBILITY_FILTER:
            return action.filter;
        default:
            return state;
    }
}

function todos(state = [], action) {
    switch (action.type) {
        case ActionTypes.ADD_TODO:
            return [
                ...state,
                {
                    text: action.text,
                    completed: false
                }
            ];
        case ActionTypes.TOGGLE_TODO:
            return state.map((todo, index) => {
                if (index === action.index) {
                    return Object.assign({}, todo, {
                        completed: !todo.completed
                    });
                }
                return todo;
            });
        default:
            return state;
    }
}

export function todoApp(state = {}, action) {
    return {
        visibilityFilter: visibilityFilter(state.visibilityFilter, action),
        todos: todos(state.todos, action)
    }
}