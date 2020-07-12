import React from 'react';

function Food({favorite}){
  return <h1>I like {favorite} </h1>;
}

function App() {
  return (
  <div> 
    <h1>Hello!! </h1>
    <Food favorite="Kimchi" /> 
    <Food favorite="ramen" /> 
  </div>
  );
}

export default App;

/* 2.1 Resuable Components with JSX + Props
component 재사용 가능.
component는 대문자로 시작
favorite , {favorite} 는 이름이 똑같아야함

props 예시
function Food(props){
  console.log(props.favorite)
  return <h1>I like Potato </h1>;
}
*/