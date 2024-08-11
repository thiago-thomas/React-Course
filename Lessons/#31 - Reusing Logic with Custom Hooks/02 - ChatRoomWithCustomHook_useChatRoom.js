import { useEffect, useEffectEvent } from "react";
import { createConnection } from "./chat";

export function useChatRoom({ serverUrl, roomId, onReceiveMessage }) {
  const onMessage = useEffectEvent(onReceiveMessage);

  useEffect(() => {
    const options = {
      serverUrl: serverUrl,
      roomId: roomId,
    };
    const connection = createConnection(options);
    connection.on("message", (msg) => {
      //showNotification("New message: " + msg);
      onMessage(msg);
    });
    connection.connect();
    return () => connection.disconnect();
  }, [roomId, serverUrl, onReceiveMessage]);
}
