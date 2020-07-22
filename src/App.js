import React from "react";

function Food({ name, picture }) {
  return (
    <div>
      <h2>I like {name}</h2>
      <img src={picture} />
    </div>
  );
}

const foodILike = [
  {
    name: "Kimchi",
    image:
      "https://www.bgw.kr/wp-content/uploads/2019/12/%EC%88%98%EC%9E%85%EA%B9%80%EC%B9%98.png",
  },
  {
    name: "coke",
    image:
      "https://images-na.ssl-images-amazon.com/images/I/51jKm1MY43L._SX569_.jpg",
  },
];

function App() {
  return (
    <div>
      {foodILike.map((food) => (
        <Food name={food.name} picture={food.image} />
      ))}
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
