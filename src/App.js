// import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Box from "./components/Box";
import "./App.css";

function App() {
  const dispatch = useDispatch(); // <- 해당 내용은 공식 문서에 나와있다!
  let count = useSelector((state) => state.count);
  // useSelector는 함수를 매개변수로 받는다
  // state를 매개변수로 줌 (store에 있는 모든 state를 전달)
  let id = useSelector((state) => state.id);
  let password = useSelector((state) => state.password);

  const increase = () => {
    // increase라는 버튼을 눌렀을 때, action 던져주기!
    dispatch({ type: "INCREMENT", payload: { num: 5 } });
    // type은 action의 이름
    // payload는 선택 사항,
    // payload는 함수의 매개변수와 같은 것
    // 숫자 5를 보내주겠다. -> 5씩 증가시키겠다.
  };
  // reducer는 자동으로 dispatch가 던진 액션을 받아올 수 있음

  const decrease = () => {
    dispatch({ type: "DECREMENT" });
  };

  const login = () => {
    dispatch({ type: "LOGIN", payload: { id: "noona", password: "123" } });
  };

  return (
    <div>
      <h1>
        {id}, {password}
      </h1>
      <h1>{count}</h1>
      <button onClick={increase}>+</button>
      <button onClick={decrease}>-</button>
      <button onClick={login}>Login</button>
      <Box />
    </div>
  );
}

export default App;
