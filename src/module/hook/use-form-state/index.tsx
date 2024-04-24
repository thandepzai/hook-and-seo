import { useFormState } from "react-dom";
import { AddButton } from "./use-form-status/addButton";


interface IUser {
  id: number;
  userName: string;
  age: number;
}
[];

const addUser = async (previousState: IUser[], formData: FormData) => {
  await new Promise((res) => setTimeout(res, 1000));

  const userName = String(formData.get("name"));
  const age = Number(formData.get("age"));
  const id = previousState.length + 1;
  return [...previousState, { id, userName, age }];
};

function StatefulForm({}) {
  const [users, formActionUser] = useFormState(addUser, [
    { id: 1, userName: "Thân", age: 20 },
  ]);
  return (
    <div className="items-center text-center">
      {users.map((user) => (
        <div key={user.id} className="mb-4">
          Tên: {user.userName} - Tuổi: {user.age}
        </div>
      ))}
      <form action={formActionUser}>
        <div>
          <span>Nhập tên: </span>{" "}
          <input name="name" className="border-2 mb-4 rounded-md" />
        </div>
        <div>
          <span>Nhập tuổi: </span>{" "}
          <input name="age" type="number" className="border-2 rounded-md" />
        </div>
        <AddButton />
      </form>
    </div>
  );
}
export default StatefulForm;
