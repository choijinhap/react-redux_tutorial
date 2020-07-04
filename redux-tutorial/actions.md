Action

어떤형태의 액션이 실행될지 나타내는 type속성을 반드시 가져야 한다. 그외의 속성은 자유.

const ADD_TODO = 'ADD_TODO'

Action Object 예시
{
    type: ADD_TODO,
    text: "something"
}

Action creator  

traditional한 flux architecture에서의 action creater
function addTodoWithDispatch(text) {
  const action = {
    type: ADD_TODO,
    text
  }
  dispatch(action)
}

redux에서의 action creator   -> 단지 액션을 반환하여 더 이식성이 좋다.
function addTodo(text) {
  return {
    type: ADD_TODO,
    text
  }
}