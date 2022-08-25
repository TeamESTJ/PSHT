import React from "react";
import Marquee from "react-fast-marquee";

const Offline = () => {
  return (
    <div>
      <Marquee speed={200} gradient={false}>
        <h1>오프라인</h1>
      </Marquee>
    </div>
  );
};

export default Offline;
