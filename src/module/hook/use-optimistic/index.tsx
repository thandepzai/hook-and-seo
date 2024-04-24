import { useOptimistic, useState, useRef } from "react";
import { toast } from 'react-toastify';

interface IUser {
  id: number;
  userName: string;
  sending?: boolean;
}
[];

const callAddUser = async (userName: string) => {
  await new Promise((res) => setTimeout(res, 5000));
  if (Math.random() < 0.7) {
    throw new Error("Network error");
  }
  return userName;
};

const DemoUseOptimisticView = () => {
  const formRef = useRef<any>();
  const [users, setUsers] = useState<IUser[]>([
    { userName: "Cu Thân", sending: false, id: 1 },
  ]);

  const [optimisticUsers, addOptimisticUser] = useOptimistic(
    users,
    (state: IUser[], newUser: string) => [
      ...state,
      {
        userName: newUser,
        sending: true,
        id: state.length + 1,
      },
    ]
  );

  async function sendMessage(formData: FormData) {
    const sentMessage = await callAddUser(String(formData.get("user")));
    setUsers((users: IUser[]) => [
      ...users,
      { userName: sentMessage, sending: false, id: users.length + 1 },
    ]);
  }

  async function formAction(formData: FormData) {
    try {
      addOptimisticUser(String(formData.get("user")));
      formRef.current?.reset();
      await sendMessage(formData);
    } catch (error: any) {
      toast.error(error.message);
      setUsers([...users]);
    }
  }

  return (
    <div className="p-4">
      {optimisticUsers.map((user: IUser) => (
        <div key={user.id} className="mb-2">
          {user.userName}
          {!!user.sending && <small> (Sending...)</small>}
        </div>
      ))}
      <form action={formAction} ref={formRef}>
        <input
          className="border rounded-lg mr-2 px-2"
          type="text"
          name="user"
          placeholder="Thân"
        />
        <button className="bg-blue-200 px-2 rounded-md" type="submit">
          Send
        </button>
      </form>

    </div>
  );
};

export default DemoUseOptimisticView;
