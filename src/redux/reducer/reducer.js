let initialState = {
  count: 0,
  id: "",
  password: "",
};

function reducer(state = initialState, action) {
  // action 매개변수로 아까 던진(App.js의 increase함수에서) action을 받아올 수 있다.
  console.log("action은 몰까?", action);
  // reducer가 store를 바꾸는 역할을 함 어떻게?! return 값으로 바꾼다!
  // store는 가만히 있다가 reducer가 새로운 값을 return(=던져주면)하면 그걸 적용
  // 그래서 reducer는 항~상 return을 해줘야함.
  // if (action.type === "INCREMENT") {
  //   return { ...state, count: state.count + 1 };
  // } else if (action.type === 'DECREMENT') {
  //   return { ...state, count: state.count - 1 };
  // }
  // counter에 + 1을 한 값을 보내준다!

  // ...state는 왜 해주었냐?!
  // (만약 state가 여러개이면)다른 state 값은 유지하되, count만 바꾼다!
  // 새로운 객체를 전달 받아야 store가 본인이 바뀐걸 앎
  // ...spread 문법을 통하여 기존 객체 내용을 복사해 새로운 객체에 전달 가능
  // 헷갈린다? => ...state는 그냥 쳐야한다고 생각하면 됨.

  // return { ...state };
  // store는 return이 무조건 있어야함 그래서 reducer에서 무조건 기본 리턴 필요!

  switch (action.type) {
    // switch문도 쓸 수 있다.
    case "INCREMENT":
      return { ...state, count: state.count + action.payload.num };
    case "DECREMENT":
      return { ...state, count: state.count - 1 };
    case "LOGIN":
      return {
        ...state,
        id: action.payload.id,
        password: action.payload.password,
      };
    default:
      return { ...state };
  }
}

export default reducer;
