"use client";

import { use, Suspense } from "react";

function Message({ messagePromise }: any) {
  const messageContent = use(messagePromise);
  console.log("🚀 ~ Message ~ messageContent:", messageContent);
  return (
    <div>
      <span>Here is userId: {messageContent?.userId}</span>
      <br />
      <span>{messageContent}</span>
    </div>
  );
}

export function MessageContainer({ messagePromise }: any) {
  return (
    <Suspense fallback={<p>⌛Downloading message...</p>}>
      <Message messagePromise={messagePromise} />
    </Suspense>
  );
}
