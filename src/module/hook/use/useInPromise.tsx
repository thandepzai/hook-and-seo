import { useState } from "react";
import { MessageContainer } from "./testprm";

function fetchMessage() {

  
  return new Promise((resolve) => setTimeout(resolve, 1000, "⚛️"));
}

export default function App() {
  // const [messagePromise, setMessagePromise] = useState(null);
  // const [show, setShow] = useState(false);
  // function download() {
  //   setMessagePromise(fetchMessage());
  //   setShow(true);
  // }

  return <MessageContainer messagePromise={fetchMessage} />;
}
