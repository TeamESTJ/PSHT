import type { NextPage } from "next";
import Marquee from "react-fast-marquee";
import { useEffect, useState } from "react";
import React from "react";

const websocketEndpoint = "wss://psht-no-sqwuuwjriq-du.a.run.app/dannypark";

const Home: NextPage = () => {
  const [message, setMessage] = useState("");
  const { ws, messageList } = useReactQuerySubscription();

  function handleMessage(event: React.ChangeEvent<HTMLInputElement>) {
    setMessage(event.target.value);
  }

  function handleSubmit() {
    ws?.send(message);
  }

  return (
    <div>
      <h1>please report</h1>
      <div>
        {messageList.map((message) => (
          <p key={message.create_date}>
            {message.create_date} {message.report}
          </p>
        ))}
      </div>
      <div>
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
  const [ws, setWs] = useState<null | WebSocket>(null);

  useEffect(() => {
    const websocket = new WebSocket(websocketEndpoint);
    setWs(websocket);

    websocket.onopen = (event) => {
      console.log(websocket);
    };

    websocket.onmessage = (event) => {
      const data = JSON.parse(event.data);
      setMessageList(data);
    };

    return () => {
      websocket.close();
    };
  }, []);

  return {
    ws,
    messageList,
  };
};

export default Home;
