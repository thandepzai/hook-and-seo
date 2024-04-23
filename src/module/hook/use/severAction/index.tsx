"use client";

import { use, Suspense } from "react";

function Message({ messagePromise }) {
  const messageContent = use(messagePromise);
  return <p>Here is the message: {messageContent}</p>;
}

export function MessageContainer({ messagePromise }) {
  const messageContent = use(messagePromise);

  return (
    <Suspense fallback={<p>⌛Downloading message...</p>}>
      {messageContent}
      <Message messagePromise={messagePromise} />
    </Suspense>
  );
}