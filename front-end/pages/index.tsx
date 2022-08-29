import type { NextPage } from "next";
import Marquee from "react-fast-marquee";
import { useEffect, useState } from "react";
import React from "react";

const websocketEndpoint = "ws://psht-no-sqwuuwjriq-du.a.run.app";

const Home: NextPage = () => {
  const [message, setMessage] = useState("");
  const { ws, messageList } = useReactQuerySubscription();

  function handleMessage(event: React.ChangeEvent<HTMLInputElement>) {
    setMessage(event.target.value);
  }

  function handleSubmit() {
    ws.send(message);
    setMessage("");
  }

  return (
    <div>
      <Marquee speed={200} gradient={false}>
        <h1>제보를 기다리고 있습니다!</h1>
      </Marquee>
      <div>
        {messageList.map((message) => (
          <p key={message.create_date}>{message.report}</p>
        ))}
      </div>
      <div>
        <label>메세지를 입력하세요</label>
        <input
          onChange={handleMessage}
          value={message}
          placeholder="제보"
          type="text"
        />
        <button onClick={handleSubmit}>신고</button>
      </div>
    </div>
  );
};

type MessageType = {
  report: string;
  create_date: string;
};
const useReactQuerySubscription = () => {
  const [messageList, setMessageList] = useState<MessageType[]>([]);
  const [ws, setWs] = useState<any>(null);

  useEffect(() => {
    const websocket = new WebSocket(websocketEndpoint);
    setWs(websocket);
    websocket.onopen = () => {
      console.log("connected");
    };
    websocket.onmessage = (event) => {
      const data = JSON.parse(event.data);
      console.log(data);
      setMessageList(data);
    };

    return () => {
      websocket.close();
    };
  }, []);

  useEffect(() => {
    console.log("there is a change");
  }, [messageList]);

  return {
    ws,
    messageList,
  };
};

export default Home;
