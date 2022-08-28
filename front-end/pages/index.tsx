import type { NextPage } from "next";
import Marquee from "react-fast-marquee";
import { useState } from "react";

const Home: NextPage = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <Marquee speed={200} gradient={false}>
        <h1>제보를 기다리고 있습니다!</h1>
      </Marquee>
      <p>제보 {count}</p>
      <button onClick={() => setCount((count) => count + 1)}>제보하기</button>
    </div>
  );
};

export default Home;
