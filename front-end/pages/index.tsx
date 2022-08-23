import type { NextPage } from "next";
import Marquee from "react-fast-marquee";

const Home: NextPage = () => {
  return (
    <div>
      <Marquee speed={200} gradient={false}>
        <h1>제보를 기다리고 있습니다</h1>
      </Marquee>
    </div>
  );
};

export default Home;
