import { useOptimistic, useState, useRef } from "react";
// import { deliverMessage } from "./service";

interface IMessages {
  text: string;
  sending?: boolean;
  key?: number;
}
[];

export async function deliverMessage(message: string) {
  await new Promise((res) => setTimeout(res, 1000));
  return message;
}

function Thread({ messages, sendMessage }: any) {
  const formRef = useRef<any>();

  async function formAction(formData: FormData) {
    addOptimisticMessage(formData.get("message"));
    formRef.current?.reset();
    await sendMessage(formData);
  }
  const [optimisticMessages, addOptimisticMessage] = useOptimistic(
    messages,
    (state, newMessage) => [
      ...state,
      {
        text: newMessage,
        sending: true,
      },
    ]
  );

  return (
    <div className="p-4">
      {optimisticMessages.map((message: IMessages, index: number) => (
        <div key={index}>
          {message.text}
          {!!message.sending && <small> (Sending...)</small>}
        </div>
      ))}
      <form action={formAction} ref={formRef}>
        <input
          className="border rounded-lg mr-2 px-2"
          type="text"
          name="message"
          placeholder="Hello!"
        />
        <button className="bg-blue-200 px-2 rounded-md" type="submit">
          Send
        </button>
      </form>
    </div>
  );
}

export default function DemoUseOptimisticView() {
  const [messages, setMessages] = useState<IMessages[]>([
    { text: "Hello there!", sending: false, key: 1 },
  ]);
  async function sendMessage(formData: FormData) {
    const sentMessage = await deliverMessage(String(formData.get("message")));
    setMessages((messages: IMessages[]) => [
      ...messages,
      { text: sentMessage },
    ]);
  }
  return <Thread messages={messages} sendMessage={sendMessage} />;
}
