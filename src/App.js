// import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./App.css";

function App() {
  const dispatch = useDispatch(); // <- 해당 내용은 공식 문서에 나와있다!
  const count = useSelector((state) => state.count);
  // useSelector는 함수를 매개변수로 받는다
  // state를 매개변수로 줌 (store에 있는 모든 state를 전달)

  const increase = () => {
    // increase라는 버튼을 눌렀을 때, action 던져주기!
    dispatch({ type: "INCREMENT" });
    // type은 action의 이름
  };
  // reducer는 자동으로 dispatch가 던진 액션을 받아올 수 있음

  const decrease = () => {
    dispatch({ type: "DECREMENT" });
  };

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={increase}>+</button>
      <button onClick={decrease}>-</button>
    </div>
  );
}

export default App;
