무엇이 일어날지 정의하는 Action 
Action에 따라 상태(State)가 어떻게 변하는지 Reducer정의

Store는 이들을 함께 가져오는 객체
Store의 역할
1.애플리케이션의 상태(State)를 저장
2.getState()를 통해 상태에 접근
3.dispatch(action)를 통해 상태를 수정
4.subscribe(listener)를 통해 리스너를 등록

combineReducers를 이용해 하나로 합친 Reducer를 이용해 Store생성
import { createStore } from 'redux';
import todoApp from './reducers';

let store = createStore(todoApp);
