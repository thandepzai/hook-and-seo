import React, { createContext, use, useContext, useState } from "react";

interface IUserContext {
  user: string;
  setUser: React.Dispatch<React.SetStateAction<string>>;
}

const UserContext = createContext<IUserContext>({
  user: "",
  setUser: () => {},
});

const DemoContextWithUseView = () => {
  const [user, setUser] = useState("Cu Thân");

  return (
    <UserContext.Provider value={{ user, setUser }}>
      <DemoUseContextView />
      <DemoUseContextSetView />
    </UserContext.Provider>
  );
};

const DemoUseContextView = () => {
  // const { user } = useContext(UserContext);
  const {user} = use(UserContext)
  return <div className="bg-slate-200 py-2">User in Component UseContext: {user}</div>;
};

function DemoUseContextSetView() {
  // const { user, setUser } = useContext(UserContext);
  const {user, setUser} = use(UserContext)

  return (
    <div className="bg-slate-400 py-2">
      User in Component UseContextSet: {user}
      <div><button className="bg-green-400 rounded-md p-2 mt-2" onClick={() => setUser("Đẹp Zai")}>Change User</button></div>
    </div>
  );
}

export default DemoContextWithUseView;
