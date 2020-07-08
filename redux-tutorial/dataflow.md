Redux 아키텍쳐는 엄격한 일방향 데이터 흐름을 전개한다.

=>애플리케이션의 모든 데이터가 같은 생명주기 패턴을 가지고 , 앱의 로직을 예측가능하고 이해하기 쉽게 한다.
    또한 데이터 정규화를 도와 데이터의 복제본들이 서로를 모르는 여럿으로 나눠지고 말지 않도록 한다.

모든 Redux앱에서는 4단계의 생명주기를 따른다.
1.store.dispatch(action) 호출 
 action은 무엇이 일어날지 기술하는 객체 
 ex)
 { type: 'LIKE_ARTICLE', articleId: 42 };
 { type: 'FETCH_USER_SUCCESS', response: { id: 3, name: 'Megan' } };
 { type: 'ADD_TODO', text: 'Read the Redux docs.'};
  앱의 어디서나 호출할 수 있다.

2.Redux Store가 개발자가 정의한 Reducer 함수들을 호출한다.
3.Root Reducer가 각 Reudcer의 출력을 합쳐서 하나의 상태트리로 만든다.
4.Redux Store가 Root Reduver가 반환한 상태트리를 저장한다.

