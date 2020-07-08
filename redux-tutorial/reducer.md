Action은 무언가 일어난다는 사실의 정의
그 결과로 state가 어떻게 바뀌는지는 Reducer에서 나타냄.

reduce함수를 이용해 다음상태를 반환한다. (reducer의 어원)
(previousState, action) => newState

reducer를 순수(pure)하게 유지하기 위해
1.인수를 직접 변경,조작(mutate)
2.API호출 , 라우팅 전환같은 사이드이펙트 발생
3.Date.now() , Math.random()등 순수하지 않은 함수 호출
  금지!!

Reducer.js 구조
1.초기상태 정의 (initial state)
2.action과 prevoustState를 받아 다음상태를 반환해준다.
3. 2를 보기 쉽게 하기 위해 독립적으로 상태를 수정하는 경우 분리해서 코드 작성.


state를 수정하여 반환하는데 reducer에서 이를 편하게 하기위해 combineReducers 함수 제공
import { combineReducers } from 'redux';

1.
const todoApp = combineReducers({
  visibilityFilter,
  todos
});

export default todoApp;

2.
export default function todoApp(state, action) {
  return {
    visibilityFilter: visibilityFilter(state.visibilityFilter, action),
    todos: todos(state.todos, action)
  };
}

위의 두코드가 완전히 같음.

const reducer = combineReducers({
  a: doSomethingWithA,
  b: processB,
  c: c
});

function reducer(state, action) {
  return {
    a: doSomethingWithA(state.a, action),
    b: processB(state.b, action),
    c: c(state.c, action)
  };
}