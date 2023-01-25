import "./index.css";
import { useEffect, useState } from "react";
import comic01 from "../Landing/assets/the-witcher-3.jpeg";
import comic02 from "./assets/crisis-core.webp";
import comic03 from "./assets/hogwarts-legacy.webp";

function Landing() {
  const [index, setIndex] = useState(0);

  const mod = (n, m) => {
    let result = n % m;

    // Return a positive value
    return result >= 0 ? result : result + m;
  };

  const cards = [
    {
      id: "1",
      image: comic01,
    },
    {
      id: "2",
      image: comic02,
    },
    {
      id: "3",
      image: comic03,
    },
  ];

  useEffect(() => {
    setTimeout(() => {
      setIndex((index + 1) % cards.length);
      // console.log(index);
    }, 3000);
  }, [index]);

  return (
    <div className="App">
      <div className="carousel">
        {cards.map((item, i) => {
          const indexLeft = mod(index - 1, cards.length);
          const indexRight = mod(index + 1, cards.length);

          let className = "card";

          if (i === index) {
            className = "card card--active";
          } else if (i === indexRight) {
            className = "card card--right";
          } else if (i === indexLeft) {
            className = "card card--left";
          } else className = "card";

          return (
            <img
              key={item.id}
              className={className}
              src={item.image}
              alt="Comic"
            ></img>
          );
        })}
      </div>
    </div>
  );
}

export default Landing;