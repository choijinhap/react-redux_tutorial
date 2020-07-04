import {VisibilityFilters , SET_VISIBILITY_FILTER , ADD_TODO , TOGGLE_TODO} from './actions'
import {combineReducers} from 'redux'

const initialState={
    visibilityFilter: VisibilityFilters.SHOW_ALL,
    todos: [],
}
/*
function todoApp(action,state=initialState){
    
    // if(typeof state=='undefined'){
    //     return initialState;
    // }
    // ES6 default argument 사용하면 없어도되는 코드
    
    switch(action.type){
        case SET_VISIBILITY_FILTER:
            return Object.assign({},state,{
                visibilityFilter: action.filter
            });
        case ADD_TODO:
            return Object.assign({},state,{
                todos: [
                    ...state.todos,
                    {
                        text: action.text,
                        completed:false,
                    }
                ]
            });
        case TOGGLE_TODO:
            return Object.assign({},state,{
                todos: state.todos.map((todo,index)=>{
                    if(index===action.index){
                        return Object.assign({},todo,{
                            completed: !todo.completed
                        });
                    }
                    return todo;
                })
            });
        default:
            return state;
    }

}
*/

//위의 코드에서 todo와 visibilityFilter state를 변경하는 코드 분리
function todos(action,state=[]){
    switch(action.type){
        case ADD_TODO:
            return [
                ...state,
                {
                    text: action.text,
                    completed: false
                }
            ];
        case TOGGLE_TODO:
            return state.map((todo,index)=>{
                if(index===action.index){
                    return Object.assign({},state,{
                        completed: !todo.completed
                    })
                }
                return todo;
            });
        default:
            return state;
    }
}
function visibilityFilter(action,state=VisibilityFilters.SHOW_ALL){
    if(action.type===SET_VISIBILITY_FILTER){
        return action.filter;
    }else{
        return state;
    }
}
/*
function todoApp(action,state=initialState){
    return {
        visibilityFilter: visibilityFilter(action,state.visibilityFilter),
        todos: todos(action,state.todos)
    }
}
*/
//combineReducers 활용
const todoApp=combineReducers({
    visibilityFilter,
    todos
});
export default todoApp;