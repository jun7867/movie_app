import React from "react";
import { render } from "@testing-library/react";

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
    id: 1,
    name: "Kimchi",
    image:
      "https://www.bgw.kr/wp-content/uploads/2019/12/%EC%88%98%EC%9E%85%EA%B9%80%EC%B9%98.png",
  },
  {
    id: 2,
    name: "coke",
    image:
      "https://images-na.ssl-images-amazon.com/images/I/51jKm1MY43L._SX569_.jpg",
  },
];

// function renderFood(food) {
//   return <Food name={food.name} picture={food.image} />;
// }

function App() {
  return (
    <div>
      {foodILike.map((food) => (
        <Food key={food.id} name={food.name} picture={food.image} />
      ))}
    </div>
  );
}

export default App;
